const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('90회기 실행위원 및 실무자 명단.xlsx');
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Output structure
const members = {
    president: {}, // 회장
    executives: [], // 임원
    departments: {}, // 부서
    cooperating: [], // 협력위원
    staff: [] // 실무자
};

data.forEach(row => {
    const role = (row['직 위'] || '').trim();
    const name = (row['성 명'] || '').trim();

    if (!role || !name) return;

    if (role === '회장') {
        members.president = { role, name };
    }
    else if (role === '직전회장' || role === '부회장') {
        members.executives.push({ role, name });
    }
    else if (role.includes('서기') || role.includes('회계')) {
        // General executives list (Secretary, Treasurer etc)
        // Check if it belongs to a department or general executive
        // In this list, pure '서기', '부서기' etc seem to be main executives
        // Dept roles are usually '부장', '차장'
        members.executives.push({ role, name });
    }
    else if (role.includes('부장') || role.includes('차장')) {
        // Extract Dept Name relative to the role
        // The excel doesn't have a "Department" column, but the list seems ordered or implies dept.
        // Wait, looking at the dump, there is NO Department column. '연합회' is Federation.
        // The structure in the dump shows: 
        // { "직 위": "기획행정지원부 부장", "성 명": "최효녀" ... } ?? 
        // NO. The dump showed: { "직 위": "부회장", "성 명": "이난숙", ... }
        // Let's re-examine the dump for departments.
        // Ah, typically these lists might have "OO부 부장" as the role string 
        // OR the user provided image showed grouping.
        // Let's assume the JSON dump I saw earlier:
        // { "번호": 20, "직 위": "기획행정지원부 부장", "성 명": "최효녀" ... }
        // If the role string contains the department name, we can parse it.

        // Let's rely on splitting the role string if it has spaces
        // e.g. "기획행정지원부 부장" -> Dept: 기획행정지원부, Role: 부장

        const parts = role.split(' ');
        if (parts.length > 1) {
            const deptName = parts[0];
            const deptRole = parts.slice(1).join(' ');
            if (!members.departments[deptName]) {
                members.departments[deptName] = [];
            }
            members.departments[deptName].push({ role: deptRole, name });
        } else {
            // Fallback if no space
            if (!members.departments['기타']) members.departments['기타'] = [];
            members.departments['기타'].push({ role, name });
        }
    }
    else if (role.includes('이사장') || role.includes('원장') || role.includes('이사')) {
        // Special organizations (Foundation, etc)
        // e.g. "계속교육원 이사장"
        const parts = role.split(' ');
        if (parts.length > 1) {
            const orgName = parts[0];
            const orgRole = parts.slice(1).join(' ');
            if (!members.departments[orgName]) {
                members.departments[orgName] = [];
            }
            members.departments[orgName].push({ role: orgRole, name });
        } else {
            if (!members.departments['산하기관']) members.departments['산하기관'] = [];
            members.departments['산하기관'].push({ role, name });
        }
    }
    else if (role === '협력위원') {
        members.cooperating.push({ role, name });
    }
    else if (role === '전회장') {
        // Maybe part of cooperating or separate?
        // In web page "협력위원" section is simple names.
        // Let's categorize '전회장' separately if needed or put in cooperating
        if (!members.advisors) members.advisors = [];
        members.advisors.push({ role, name });
    }
    else {
        // Staff usually come after "실무자" row, but here we just check if role matches staff titles
        // "총무", "사무처장", "국장", "과장", "주임", "간사"
        const staffRoles = ["총무", "사무처장", "국장", "과장", "주임", "간사"];
        if (staffRoles.some(r => role.includes(r))) {
            members.staff.push({ role, name });
        }
    }
});

// Sort executives to match desired order: 직전회장 -> 부회장 -> 서기...
// This might be hard to automate perfectly without strict rules, but preserving file order helps.
// The file seems ordered.

fs.writeFileSync('members.json', JSON.stringify(members, null, 2));
console.log('Successfully extracted members.json');
