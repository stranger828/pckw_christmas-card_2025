// Keep existing snow effect code...
// (Previous snow code remains here)
// Helper function for random range
const randomRange = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};

// ... (Snow code truncated for brevity in replace tool, but in real file I'll keep it) ...
// Actually, since I'm rewriting the file or appending, let's keep the snow code and ADD query logic.

const totalSnowflakes = 200;
let styleSheetContent = '';

for (let i = 1; i <= totalSnowflakes; i++) {
    const random_x = Math.random() * 100; // 0 to 100 vw
    const random_offset = randomRange(-10, 10); // -10 to 10 vw
    const random_x_end = random_x + random_offset;
    const random_x_end_yoyo = random_x + (random_offset / 2);
    const random_yoyo_time = randomRange(30000, 80000) / 100000;
    const random_yoyo_y = random_yoyo_time * 100; // vh
    const random_scale = Math.random(); // 0 to 1
    const fall_duration = randomRange(10, 30); // s
    const fall_delay = randomRange(0, 30) * -1; // s
    const opacity = Math.random();

    // Create the snowflake element
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.classList.add(`snow-${i}`); // Add unique class
    document.body.appendChild(snow);

    // Generate CSS for this snowflake
    styleSheetContent += `
        .snow-${i} {
            opacity: ${opacity};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time * 100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
        }
    `;
}

// Inject snow styles
const styleParams = document.createElement('style');
styleParams.innerHTML = styleSheetContent;
document.head.appendChild(styleParams);


// --- Member List Rendering ---
// Embedded data to avoid CORS issues when opening via file:// protocol
const membersData = {
    "president": {
        "role": "회장",
        "name": "이난숙"
    },
    "executives": [
        {
            "role": "부회장",
            "name": "송정경"
        },
        {
            "role": "부회장",
            "name": "박금숙"
        },
        {
            "role": "부회장",
            "name": "김현정"
        },
        {
            "role": "부회장",
            "name": "이미경"
        },
        {
            "role": "부회장",
            "name": "김은미"
        },
        {
            "role": "부회장",
            "name": "신미경"
        },
        {
            "role": "부회장",
            "name": "이해빈"
        },
        {
            "role": "부회장",
            "name": "진명신"
        },
        {
            "role": "직전회장",
            "name": "은정화"
        },
        {
            "role": "서기",
            "name": "김성숙"
        },
        {
            "role": "부서기",
            "name": "김은숙"
        },
        {
            "role": "회의록서기",
            "name": "고선주"
        },
        {
            "role": "회의록부서기",
            "name": "문영애"
        },
        {
            "role": "역사기록서기",
            "name": "신순철"
        },
        {
            "role": "역사기록부서기",
            "name": "송분옥"
        },
        {
            "role": "회계",
            "name": "강은영"
        },
        {
            "role": "부회계",
            "name": "김은희"
        }
    ],
    "departments": {
        "기획행정지원부": [
            {
                "role": "부장",
                "name": "은정화"
            },
            {
                "role": "차장",
                "name": "김명숙"
            }
        ],
        "선교부": [
            {
                "role": "부장",
                "name": "한미옥"
            },
            {
                "role": "차장",
                "name": "권영희"
            }
        ],
        "교육문화부": [
            {
                "role": "부장",
                "name": "윤종숙"
            },
            {
                "role": "차장",
                "name": "김병님"
            }
        ],
        "사회봉사부": [
            {
                "role": "부장",
                "name": "임신자"
            },
            {
                "role": "차장",
                "name": "김은미"
            }
        ],
        "홍보전략부": [
            {
                "role": "부장",
                "name": "박명숙"
            },
            {
                "role": "차장",
                "name": "강민수"
            }
        ],
        "재정부": [
            {
                "role": "부장",
                "name": "황   선"
            },
            {
                "role": "차장",
                "name": "노미란"
            }
        ],
        "계속교육원": [
            {
                "role": "이사장",
                "name": "주영복"
            },
            {
                "role": "부이사장",
                "name": "김연옥"
            }
        ],
        "여전도회장학회": [
            {
                "role": "이사장",
                "name": "민양기"
            },
            {
                "role": "부이사장",
                "name": "박영애"
            }
        ],
        "옥합선교회": [
            {
                "role": "이사장",
                "name": "서정자"
            },
            {
                "role": "부이사장",
                "name": "김경숙"
            }
        ],
        "여전도회작은자복지재단": [
            {
                "role": "이사장",
                "name": "홍기숙"
            },
            {
                "role": "부이사장",
                "name": "박화식"
            }
        ]
    },
    "advisors": [
        {
            "role": "전회장",
            "name": "김희원"
        },
        {
            "role": "전회장",
            "name": "홍순자"
        },
        {
            "role": "전회장",
            "name": "홍기숙"
        },
        {
            "role": "전회장",
            "name": "신성애"
        },
        {
            "role": "전회장",
            "name": "김순미"
        },
        {
            "role": "전회장",
            "name": "김미순"
        },
        {
            "role": "전회장",
            "name": "최효녀"
        },
        {
            "role": "전회장",
            "name": "은정화"
        }
    ],
    "cooperating": [
        {
            "role": "협력위원",
            "name": "김경원"
        },
        {
            "role": "협력위원",
            "name": "이동화"
        },
        {
            "role": "협력위원",
            "name": "문영옥"
        },
        {
            "role": "협력위원",
            "name": "서부숙"
        },
        {
            "role": "협력위원",
            "name": "김학란"
        },
        {
            "role": "협력위원",
            "name": "김순희"
        },
        {
            "role": "협력위원",
            "name": "최현순"
        },
        {
            "role": "협력위원",
            "name": "서영란"
        },
        {
            "role": "협력위원",
            "name": "오정임"
        },
        {
            "role": "협력위원",
            "name": "현정임"
        },
        {
            "role": "협력위원",
            "name": "최숙희"
        },
        {
            "role": "협력위원",
            "name": "박정민"
        },
        {
            "role": "협력위원",
            "name": "김순애"
        },
        {
            "role": "협력위원",
            "name": "송경희"
        },
        {
            "role": "협력위원",
            "name": "최계남"
        },
        {
            "role": "협력위원",
            "name": "박세옥"
        },
        {
            "role": "협력위원",
            "name": "김혜옥"
        },
        {
            "role": "협력위원",
            "name": "한기순"
        },
        {
            "role": "협력위원",
            "name": "강순자"
        },
        {
            "role": "협력위원",
            "name": "이선자"
        },
        {
            "role": "협력위원",
            "name": "김영기"
        },
        {
            "role": "협력위원",
            "name": "엄금남"
        },
        {
            "role": "협력위원",
            "name": "오은순"
        },
        {
            "role": "협력위원",
            "name": "고숙자"
        }
    ],
    "staff": [
        {
            "role": "총무",
            "name": "윤효심"
        },
        {
            "role": "사무처장",
            "name": "이승재"
        },
        {
            "role": "기획국장",
            "name": "전은숙"
        },
        {
            "role": "선교국장",
            "name": "박정남"
        },
        {
            "role": "교육국장",
            "name": "김혜자"
        },
        {
            "role": "작은자국장",
            "name": "박정은"
        },
        {
            "role": "홍보국장",
            "name": "김태양"
        },
        {
            "role": "사무국장",
            "name": "김진미"
        },
        {
            "role": "계속교육원국장",
            "name": "백지은"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Direct assignment instead of fetch
    const data = membersData;

    const memberContainer = document.querySelector('.member-list');
    if (!memberContainer) return;

    // Clear existing static content
    memberContainer.innerHTML = '';

    // Helper to create a divider
    const addDivider = () => {
        const hr = document.createElement('hr');
        hr.className = 'divider';
        memberContainer.appendChild(hr);
    };

    // 1. President (회장)
    if (data.president) {
        const group = document.createElement('div');
        group.className = 'member-group';
        group.innerHTML = `<div class="role">${data.president.role}</div><div class="name">${data.president.name}</div>`;
        memberContainer.appendChild(group);
    }

    // 2. Executives (임원)
    // Row 1: 직전회장, 부회장
    const execOrderRow1 = ["직전회장", "부회장"];

    // Officer Pairs for vertical alignment (Chief / Deputy)
    const officerPairs = [
        ["서기", "부서기"],
        ["회의록서기", "회의록부서기"],
        ["회계", "부회계"],
        ["역사기록서기", "역사기록부서기"]
    ];

    if (data.executives && data.executives.length > 0) {
        const row = document.createElement('div');
        row.className = 'member-row';
        row.style.flexDirection = 'column';
        row.style.alignItems = 'center';

        const groupedExecs = {};
        data.executives.forEach(m => {
            if (!groupedExecs[m.role]) groupedExecs[m.role] = [];
            groupedExecs[m.role].push(m.name);
        });

        // Helper to render a list of roles into a container
        const renderRoles = (roleList, container) => {
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.justifyContent = 'center';
            container.style.gap = '15px';
            container.style.maxWidth = '900px';

            roleList.forEach(role => {
                if (groupedExecs[role]) {
                    const group = document.createElement('div');
                    group.className = 'member-group';
                    group.innerHTML = `<span class="role">${role}</span> <span class="preserve-space">${groupedExecs[role].join(' ')}</span>`;
                    container.appendChild(group);
                }
            });
        };

        // Container 1 (Past President, Vice President)
        const container1 = document.createElement('div');
        renderRoles(execOrderRow1, container1);
        row.appendChild(container1);

        // Grid for Officers (Pairs)
        const officersGrid = document.createElement('div');
        officersGrid.className = 'officers-grid';

        officerPairs.forEach(pair => {
            const col = document.createElement('div');
            // Column styles are handled by CSS .officers-grid > div or can be inline if specific
            col.style.gap = '8px'; // Vertical gap between Chief and Deputy


            pair.forEach(role => {
                if (groupedExecs[role]) {
                    const group = document.createElement('div');
                    group.className = 'member-group';
                    // Reduce margin within vertical stack
                    group.style.marginBottom = '0';
                    // Use .fixed-role instead of .role for alignment
                    group.innerHTML = `<span class="fixed-role">${role}</span> <span class="preserve-space">${groupedExecs[role].join(' ')}</span>`;
                    col.appendChild(group);
                }
            });

            // Only append column if it has content
            if (col.children.length > 0) {
                officersGrid.appendChild(col);
            }
        });

        row.appendChild(officersGrid);

        // Render any remaining roles not in expected lists (fallback)
        // Flatten pairs to check leftovers
        const allOfficerRoles = officerPairs.flat();
        const allExpected = [...execOrderRow1, ...allOfficerRoles];
        const leftovers = Object.keys(groupedExecs).filter(role => !allExpected.includes(role));

        if (leftovers.length > 0) {
            const containerLeftovers = document.createElement('div');
            containerLeftovers.style.marginTop = '10px';
            renderRoles(leftovers, containerLeftovers);
            row.appendChild(containerLeftovers);
        }

        memberContainer.appendChild(row);
    }

    addDivider();

    // 3. Departments (부서)
    if (data.departments) {
        const deptGrid = document.createElement('div');
        deptGrid.className = 'department-grid';

        for (const [deptName, members] of Object.entries(data.departments)) {
            const item = document.createElement('div');

            // Group by role within department
            const groupedMembers = {};
            members.forEach(m => {
                if (!groupedMembers[m.role]) groupedMembers[m.role] = [];
                groupedMembers[m.role].push(m.name);
            });

            let html = `<div style="margin-bottom: 4px;"><strong>${deptName}</strong></div>`;
            // Order roles if needed, currently iterating object keys
            for (const [role, names] of Object.entries(groupedMembers)) {
                html += `<div><span class="dept-role">${role}</span> <span class="preserve-space">${names.join(' ')}</span></div>`;
            }
            item.innerHTML = html;
            deptGrid.appendChild(item);
        }
        memberContainer.appendChild(deptGrid);
    }

    // 4. Past Presidents (전회장) - Added before Cooperating
    if (data.advisors && data.advisors.length > 0) {
        addDivider();

        const advDiv = document.createElement('div');
        advDiv.className = 'member-group';
        advDiv.style.flexDirection = 'column';
        advDiv.style.textAlign = 'center';

        advDiv.innerHTML = `<div class="role" style="margin-bottom: 10px;">전회장</div>`;

        const namesDiv = document.createElement('div');
        namesDiv.className = 'name';
        // Flex styles for wider, controllable spacing
        namesDiv.style.display = 'flex';
        namesDiv.style.flexWrap = 'wrap';
        namesDiv.style.justifyContent = 'center';
        namesDiv.style.gap = '12px'; // Reduced from 15px
        namesDiv.style.padding = '0 20px';

        // Render names as individual spans
        namesDiv.innerHTML = data.advisors.map(m => `<span class="preserve-space">${m.name}</span>`).join('');

        advDiv.appendChild(namesDiv);
        memberContainer.appendChild(advDiv);
    }

    // 5. Cooperating Committee (협력위원)
    if (data.cooperating && data.cooperating.length > 0) {
        addDivider();

        const coopDiv = document.createElement('div');
        coopDiv.className = 'member-group';
        coopDiv.style.flexDirection = 'column';
        coopDiv.style.textAlign = 'center';

        coopDiv.innerHTML = `<div class="role" style="margin-bottom: 10px;">협력위원</div>`;

        const namesDiv = document.createElement('div');
        namesDiv.className = 'name';
        // Flex styles for wider, controllable spacing
        namesDiv.style.display = 'flex';
        namesDiv.style.flexWrap = 'wrap';
        namesDiv.style.justifyContent = 'center';
        namesDiv.style.gap = '6px'; // Reduced significantly (15px -> 6px) to simple spacing
        namesDiv.style.padding = '0 20px';

        // Render names as individual spans
        namesDiv.innerHTML = data.cooperating.map(m => `<span class="preserve-space">${m.name}</span>`).join('');

        coopDiv.appendChild(namesDiv);
        memberContainer.appendChild(coopDiv);
    }

    // 5. Staff (실무자)
    if (data.staff && data.staff.length > 0) {
        addDivider();

        const staffGrid = document.createElement('div');
        staffGrid.className = 'department-grid';

        data.staff.forEach(m => {
            const item = document.createElement('div');
            item.innerHTML = `<strong>${m.role}</strong> <span class="preserve-space">${m.name}</span>`;
            staffGrid.appendChild(item);
        });

        memberContainer.appendChild(staffGrid);
    }
});
