(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Table = ({ data, columns, onRowClick, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overflow-x-auto ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800",
                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: {
                                    width: col.width
                                },
                                className: `py-4 px-2 text-xs font-bold text-gray-400 uppercase tracking-wider ${col.headerClassName || ''} text-${col.align || 'left'}`,
                                children: col.title
                            }, col.key, false, {
                                fileName: "[project]/src/components/ui/Table.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Table.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Table.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-gray-100 dark:divide-gray-800",
                    children: data.map((item, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            onClick: ()=>onRowClick?.(item),
                            className: `transition-colors ${onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50' : ''}`,
                            children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: `py-4 px-2 text-${col.align || 'left'} ${col.className || ''}`,
                                    children: col.render ? col.render(item, rowIndex) : item[col.key]
                                }, `${rowIndex}-${col.key}`, false, {
                                    fileName: "[project]/src/components/ui/Table.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, rowIndex, false, {
                            fileName: "[project]/src/components/ui/Table.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Table.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Table.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Table.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Table;
const __TURBOPACK__default__export__ = Table;
var _c;
__turbopack_context__.k.register(_c, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/teamService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "teamService",
    ()=>teamService
]);
const MOCK_STANDINGS = [
    {
        rank: 1,
        team: 'Man City',
        played: 30,
        record: '25-3-2',
        gd: '+45',
        points: 78,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe3zSKtvnFalzaJvcATfFTTsK7wJMYO0bDfGUfGRyGfcSI0MwSDEQpQWWzpH8MzRTAQqu9DPUny_Pi4QX8rDwtFQbNHvCWAnA5u5p8Co-rwge_ReBMPWkM4qEX0JSMXolVRNOOZzxigHbe26pEmqima0PpD6osgv4n0gNv50KtD31IpOBYdmSbf-_k2E2c8UrbPU0Er6XfhXKN9K7j_bJtHWMWf9iF51WUfyhGszdiGPYPa4B2v0h2IXFfUHHmG7ndOrieGB91Zl_x',
        status: 'ucl'
    },
    {
        rank: 2,
        team: 'Arsenal',
        played: 30,
        record: '24-4-2',
        gd: '+40',
        points: 76,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyRWmzKrRjAhOPHKdL_6gSRKNBmBlu89RaI1xr0uoR1gsfW1Xb88YculM1NLMhsO3GQrdjuyd940lAW1i2wwyvZ3wkwqQkMJK6KI7VpmhaiDW-fHUnaHzExUc7wztlGZzTxYFZAW6eN8RcddFkjDY03hV08JdL6CKNtUq8lJlW6_EKwlgIo_K8XuTz7YleigwNX0zfxvwjLT3az13qZ9c_sZJbCixxG7XCtExdUZIhSTAHeibUKlbwH1YqO33yX-jwXpxdE-dbZM3P',
        status: 'ucl'
    },
    {
        rank: 3,
        team: 'Liverpool',
        played: 30,
        record: '22-6-2',
        gd: '+38',
        points: 72,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANsQFE7hZItvaH5J7vwE01aJukdVhUk5Rsbo8LnCF6igL8ND6ME296RJn-_fllAyFqCUUInogXZSsv0CCBJiJmKLxiQwBc7YRtyIXRudy9hOwLjKQQtaAiKILY_oUf9xpUwTSqXXwgtJiqD2et0Q-ssqfMEduuEJT2owwuy3RXVKLyQ7j-X-dWhrkC3Xjy9vkz7a4ENcTr7vHeaIHhx5l-6NfB51Ss_a1XZPDF-ll9_s1a4a-lA3SUAV1IDhFNQ4ovvm-GWbUZwQpW',
        status: 'ucl'
    },
    {
        rank: 4,
        team: 'Aston Villa',
        played: 30,
        record: '18-5-7',
        gd: '+15',
        points: 59,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuUhZqP1IzzlevWgLOjRAyUxHxD8MZSWEQ4_GAOCHW1ucvPqQzWHo2OLr733tUB2cmAIEUUpTxodt5hKis9y49PeVvDIdjvnfSBYdn_2T4zFpmvU-Wi9MRy8KpTcN7U4-ZVtnhFplFvDBhB5bM1e0xPHM8cUC-FRWnSLUfz9oNmcwSJpWuqRQEJcDC9Ieee39Dw03uyK_URhBEGaCHFPE7KNgG0JDceW6BLn4lOs6nBvwcdlX8kD9ccLUx2oqkSYZoJDPbHu5A1tQp',
        status: 'ucl'
    },
    {
        rank: 5,
        team: 'West Ham',
        played: 30,
        record: '13-9-8',
        gd: '-4',
        points: 48,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aUXb0fqRbBvbbTjvfk_Mx2M2Y3gSdZncgFkbsYyMcpb2l1H7ik1i_OlersIa-C-6-c5LP0T0kzcnoyRAmQqdO24DQOAYlcnhY52p6bONIwQk4nd6O5tBiSgXqf7HOi10Rrm5V3E9ZQrGn1c_ouT-Yp_EgxLFDQPCpIuSmtCRVa4u3oevki5kK_ZnrpUps_vtxPRpoUq8-t9P39siReqqHdV44_SyAdNATzxvIWAsgxbLVVSlp9rYJ6-MwVN_FtMYhYUex9zS9B2s',
        status: 'uel'
    },
    {
        rank: 6,
        team: 'Man Utd',
        played: 29,
        record: '15-3-11',
        gd: '0',
        points: 48,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhk15SeyndGvKgS9Al9k9pQHogbxGPADpV8alc3wA2L7_RSpZwhNax_IQhmkWC6tw3o4yyA4j4c0-fqZqujgOezjCLpnT16WNAUWg8bccXVejHFtBBIfREukbY5W1TnNe9M8RtqupABmCjJlzdy-ehcBYUSTNsaoyec5FP7PeCX04m_WI75JCCxduFRmsguAOqjul9Z0PlnEhyIufbVZgjTjwolvK4RT8XXIMr8ibvyHCqSU-RmvVMcv1t-Vx2F0IlvudHi14Bewbz',
        status: 'normal'
    },
    {
        rank: 7,
        team: 'Tottenham',
        played: 29,
        record: '14-5-10',
        gd: '+8',
        points: 47,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Kb_322Pbor8bHovmhqiNUph2H8ZVaOiEEd6j6hhY4eCGA1kyddGlmeOiY9aY4fysb0U_pgCZscKYS-oogabXWbuJLwkeNeUwP2siDwYdN1Jc9S59Uf5yezLWS_dYPDmdI0BKIxbFhdWEOggn-UF2--bX-xGuMbCAbcINq62umjhoN_J1WUHNdxHu5-wbaX_8lR64dxoEazt_aSsJIxacdJWzYPiJ5WmgxfDlXgc6HWob6eK6bMsdFh58r98MGPwGhxncE_SyOah',
        status: 'normal'
    },
    {
        rank: 8,
        team: 'Brighton',
        played: 30,
        record: '11-9-10',
        gd: '+2',
        points: 42,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBADTAQ43jNndc-3a6XUAEf8urakRV7x1H5wc7saQx_SnKotKJZ6GjIbMwl5koqhK3FUYkNU-guToBKPO2IPAbTrciiJG5n0GbfckjTpUA2PO1CGHCrc2wYBDUmEKWnWKAhYpaS-J6k-QggQOJziSmOLKiYV4UsZGRl53qD8snJ4AxQUBOw9ZFr5qkkTPYs0BW0oHgKgcVy6E5--orIXMxAmyzZ8CpdQUERWgxC8b4EYTQman9YGjmL2Ty_r_-vtwSME0UhvJQa6tC0',
        status: 'normal'
    },
    {
        rank: 18,
        team: 'Luton',
        played: 30,
        record: '5-7-18',
        gd: '-19',
        points: 22,
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfOHdhVOOBx3E0j6JE39vCPjgc5Ybm-RZA2d0Bm2pt0_IUbEWACD23GTGBYXLliKyZRoyMqWDKKb2NHllyz1vS_O4EeOAYaV9UCwH5H0CQT1Bc0gZNgcYS6hvrcqJZqdReCSLO1JT82q5GiLt7Kqj9Xm_hNUDFognkod8jEcVmFhP1qfRbENB-M6-DL0mPJznd0nXczAUT54-8pX1q3i1z7F60QZ652EHYpcGhpbVH3-qv8qugiUqj-fVshQLsjsKNBEDoaYvy6ztw',
        status: 'relegation'
    }
];
const teamService = {
    getStandings: async (league)=>{
        // const response = await api.get('/leagues/standings', { params: { league }});
        // return response.data;
        return new Promise((resolve)=>{
            setTimeout(()=>resolve(MOCK_STANDINGS), 500);
        });
    },
    getTeamDetail: async (teamId)=>{
        // const response = await api.get(`/teams/${teamId}`);
        // return response.data;
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    performanceData: [
                        {
                            name: 'Thắng',
                            value: 20,
                            color: '#3B82F6'
                        },
                        {
                            name: 'Hòa',
                            value: 4,
                            color: '#9CA3AF'
                        },
                        {
                            name: 'Thua',
                            value: 3,
                            color: '#EF4444'
                        }
                    ],
                    lineData: [
                        {
                            name: 'V26',
                            rank: 5
                        },
                        {
                            name: 'V27',
                            rank: 4
                        },
                        {
                            name: 'V28',
                            rank: 6
                        },
                        {
                            name: 'V29',
                            rank: 6
                        },
                        {
                            name: 'V30',
                            rank: 4
                        },
                        {
                            name: 'V31',
                            rank: 2
                        },
                        {
                            name: 'V32',
                            rank: 2
                        },
                        {
                            name: 'V33',
                            rank: 1
                        }
                    ],
                    matchStats: [
                        {
                            name: 'Toàn trận',
                            win: 20,
                            draw: 4,
                            loss: 3
                        },
                        {
                            name: 'Sân nhà',
                            win: 12,
                            draw: 2,
                            loss: 0
                        },
                        {
                            name: 'Sân khách',
                            win: 8,
                            draw: 2,
                            loss: 3
                        }
                    ],
                    goalStats: [
                        {
                            name: 'Toàn trận',
                            scored: 82,
                            conceded: 25
                        },
                        {
                            name: 'Sân nhà',
                            scored: 48,
                            conceded: 10
                        },
                        {
                            name: 'Sân khách',
                            scored: 34,
                            conceded: 15
                        }
                    ],
                    players: [
                        {
                            name: 'Erling Haaland',
                            number: 9,
                            role: 'Tiền đạo',
                            goals: 28,
                            assists: 5,
                            apps: 26,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS'
                        },
                        {
                            name: 'Kevin De Bruyne',
                            number: 17,
                            role: 'Tiền vệ',
                            goals: 8,
                            assists: 15,
                            apps: 24,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG'
                        },
                        {
                            name: 'Phil Foden',
                            number: 47,
                            role: 'Tiền đạo',
                            goals: 14,
                            assists: 7,
                            apps: 28,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq'
                        }
                    ],
                    matches: [
                        {
                            id: '1',
                            date: '15/05/2024',
                            time: '20:00',
                            competition: 'Premier League',
                            round: 'Vòng 34',
                            homeTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            awayTeam: {
                                name: 'Arsenal',
                                shortName: 'ARS',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq'
                            },
                            homeScore: 3,
                            awayScore: 1,
                            status: 'finished',
                            venue: 'Etihad Stadium'
                        },
                        {
                            id: '2',
                            date: '12/05/2024',
                            time: '18:30',
                            competition: 'Premier League',
                            round: 'Vòng 33',
                            homeTeam: {
                                name: 'Tottenham',
                                shortName: 'TOT',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Kb_322Pbor8bHovmhqiNUph2H8ZVaOiEEd6j6hhY4eCGA1kyddGlmeOiY9aY4fysb0U_pgCZscKYS-oogabXWbuJLwkeNeUwP2siDwYdN1Jc9S59Uf5yezLWS_dYPDmdI0BKIxbFhdWEOggn-UF2--bX-xGuMbCAbcINq62umjhoN_J1WUHNdxHu5-wbaX_8lR64dxoEazt_aSsJIxacdJWzYPiJ5WmgxfDlXgc6HWob6eK6bMsdFh58r98MGPwGhxncE_SyOah'
                            },
                            awayTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            homeScore: 0,
                            awayScore: 2,
                            status: 'finished',
                            venue: 'Tottenham Hotspur Stadium'
                        },
                        {
                            id: '3',
                            date: '08/05/2024',
                            time: '21:00',
                            competition: 'Premier League',
                            round: 'Vòng 32',
                            homeTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            awayTeam: {
                                name: 'Chelsea',
                                shortName: 'CHE',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe3zSKtvnFalzaJvcATfFTTsK7wJMYO0bDfGUfGRyGfcSI0MwSDEQpQWWzpH8MzRTAQqu9DPUny_Pi4QX8rDwtFQbNHvCWAnA5u5p8Co-rwge_ReBMPWkM4qEX0JSMXolVRNOOZzxigHbe26pEmqima0PpD6osgv4n0gNv50KtD31IpOBYdmSbf-_k2E2c8UrbPU0Er6XfhXKN9K7j_bJtHWMWf9iF51WUfyhGszdiGPYPa4B2v0h2IXFfUHHmG7ndOrieGB91Zl_x'
                            },
                            homeScore: 4,
                            awayScore: 1,
                            status: 'finished',
                            venue: 'Etihad Stadium'
                        },
                        {
                            id: '4',
                            date: '05/05/2024',
                            time: '17:30',
                            competition: 'Premier League',
                            round: 'Vòng 31',
                            homeTeam: {
                                name: 'Liverpool',
                                shortName: 'LIV',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANsQFE7hZItvaH5J7vwE01aJukdVhUk5Rsbo8LnCF6igL8ND6ME296RJn-_fllAyFqCUUInogXZSsv0CCBJiJmKLxiQwBc7YRtyIXRudy9hOwLjKQQtaAiKILY_oUf9xpUwTSqXXwgtJiqD2et0Q-ssqfMEduuEJT2owwuy3RXVKLyQ7j-X-dWhrkC3Xjy9vkz7a4ENcTr7vHeaIHhx5l-6NfB51Ss_a1XZPDF-ll9_s1a4a-lA3SUAV1IDhFNQ4ovvm-GWbUZwQpW'
                            },
                            awayTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            homeScore: 1,
                            awayScore: 1,
                            status: 'finished',
                            venue: 'Anfield'
                        },
                        {
                            id: '5',
                            date: '01/05/2024',
                            time: '20:00',
                            competition: 'Premier League',
                            round: 'Vòng 30',
                            homeTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            awayTeam: {
                                name: 'Brighton',
                                shortName: 'BHA',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBADTAQ43jNndc-3a6XUAEf8urakRV7x1H5wc7saQx_SnKotKJZ6GjIbMwl5koqhK3FUYkNU-guToBKPO2IPAbTrciiJG5n0GbfckjTpUA2PO1CGHCrc2wYBDUmEKWnWKAhYpaS-J6k-QggQOJziSmOLKiYV4UsZGRl53qD8snJ4AxQUBOw9ZFr5qkkTPYs0BW0oHgKgcVy6E5--orIXMxAmyzZ8CpdQUERWgxC8b4EYTQman9YGjmL2Ty_r_-vtwSME0UhvJQa6tC0'
                            },
                            homeScore: 5,
                            awayScore: 0,
                            status: 'finished',
                            venue: 'Etihad Stadium'
                        },
                        {
                            id: '6',
                            date: '18/05/2024',
                            time: '20:00',
                            competition: 'Premier League',
                            round: 'Vòng 35',
                            homeTeam: {
                                name: 'West Ham',
                                shortName: 'WHU',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aUXb0fqRbBvbbTjvfk_Mx2M2Y3gSdZncgFkbsYyMcpb2l1H7ik1i_OlersIa-C-6-c5LP0T0kzcnoyRAmQqdO24DQOAYlcnhY52p6bONIwQk4nd6O5tBiSgXqf7HOi10Rrm5V3E9ZQrGn1c_ouT-Yp_EgxLFDQPCpIuSmtCRVa4u3oevki5kK_ZnrpUps_vtxPRpoUq8-t9P39siReqqHdV44_SyAdNATzxvIWAsgxbLVVSlp9rYJ6-MwVN_FtMYhYUex9zS9B2s'
                            },
                            awayTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            status: 'upcoming',
                            venue: 'London Stadium'
                        },
                        {
                            id: '7',
                            date: '22/05/2024',
                            time: '21:00',
                            competition: 'Premier League',
                            round: 'Vòng 36',
                            homeTeam: {
                                name: 'Manchester City',
                                shortName: 'MCI',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4wcjhCFBZVQ4l7Ft7YcEsaIL3GGoZEsV-qNpyZRaf-zXKOH_GWc7z-Id6VGIh9skT9ZuTFa5Oa5Mme406dNl1ewyWArTEqCVFI8USrxtX9YOpYkHhTLEBIgPZyvSLRmY2hMlVrXCYkqo02N6pzMV2VP1rHO30ZsxuHldE2OqQ1R7aC-9jq_BEe7vKw1ElD6STS98j-UL0efXkT8uBcPYlKSCg9kPJowFPxDxJBgbKj1w7QyU52h0K4eYhtnmG3peTvBo8bJ-qPKL'
                            },
                            awayTeam: {
                                name: 'Newcastle',
                                shortName: 'NEW',
                                logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyRWmzKrRjAhOPHKdL_6gSRKNBmBlu89RaI1xr0uoR1gsfW1Xb88YculM1NLMhsO3GQrdjuyd940lAW1i2wwyvZ3wkwqQkMJK6KI7VpmhaiDW-fHUnaHzExUc7wztlGZzTxYFZAW6eN8RcddFkjDY03hV08JdL6CKNtUq8lJlW6_EKwlgIo_K8XuTz7YleigwNX0zfxvwjLT3az13qZ9c_sZJbCixxG7XCtExdUZIhSTAHeibUKlbwH1YqO33yX-jwXpxdE-dbZM3P'
                            },
                            status: 'upcoming',
                            venue: 'Etihad Stadium'
                        }
                    ],
                    squad: [
                        // Goalkeepers
                        {
                            name: 'Ederson',
                            number: 31,
                            position: 'Thủ môn',
                            nationality: 'Brazil',
                            age: 30,
                            height: '188cm',
                            apps: 27,
                            goals: 0,
                            assists: 1,
                            rating: 7.8,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'D',
                                'W'
                            ]
                        },
                        {
                            name: 'Stefan Ortega',
                            number: 18,
                            position: 'Thủ môn',
                            nationality: 'Germany',
                            age: 31,
                            height: '185cm',
                            apps: 8,
                            goals: 0,
                            assists: 0,
                            rating: 7.2,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'W'
                            ]
                        },
                        // Defenders
                        {
                            name: 'Kyle Walker',
                            number: 2,
                            position: 'Hậu vệ',
                            nationality: 'England',
                            age: 33,
                            height: '183cm',
                            apps: 25,
                            goals: 1,
                            assists: 3,
                            rating: 7.5,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'W',
                                'D',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Rúben Dias',
                            number: 3,
                            position: 'Hậu vệ',
                            nationality: 'Portugal',
                            age: 26,
                            height: '187cm',
                            apps: 26,
                            goals: 2,
                            assists: 1,
                            rating: 8.1,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'D',
                                'W'
                            ]
                        },
                        {
                            name: 'John Stones',
                            number: 5,
                            position: 'Hậu vệ',
                            nationality: 'England',
                            age: 29,
                            height: '188cm',
                            apps: 23,
                            goals: 3,
                            assists: 2,
                            rating: 7.9,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Nathan Aké',
                            number: 6,
                            position: 'Hậu vệ',
                            nationality: 'Netherlands',
                            age: 28,
                            height: '180cm',
                            apps: 20,
                            goals: 1,
                            assists: 0,
                            rating: 7.3,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'D',
                                'W',
                                'W',
                                'L'
                            ]
                        },
                        {
                            name: 'Manuel Akanji',
                            number: 25,
                            position: 'Hậu vệ',
                            nationality: 'Switzerland',
                            age: 28,
                            height: '193cm',
                            apps: 24,
                            goals: 2,
                            assists: 1,
                            rating: 7.6,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'D',
                                'W'
                            ]
                        },
                        {
                            name: 'Joško Gvardiol',
                            number: 24,
                            position: 'Hậu vệ',
                            nationality: 'Croatia',
                            age: 22,
                            height: '185cm',
                            apps: 22,
                            goals: 3,
                            assists: 2,
                            rating: 7.7,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'W',
                                'D'
                            ]
                        },
                        // Midfielders
                        {
                            name: 'Rodri',
                            number: 16,
                            position: 'Tiền vệ',
                            nationality: 'Spain',
                            age: 27,
                            height: '191cm',
                            apps: 28,
                            goals: 7,
                            assists: 4,
                            rating: 8.3,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'D',
                                'W'
                            ]
                        },
                        {
                            name: 'Kevin De Bruyne',
                            number: 17,
                            position: 'Tiền vệ',
                            nationality: 'Belgium',
                            age: 32,
                            height: '181cm',
                            apps: 24,
                            goals: 8,
                            assists: 15,
                            rating: 8.5,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'W',
                                'D'
                            ],
                            injuryStatus: 'Hồi phục',
                            injuryReturn: '2 tuần'
                        },
                        {
                            name: 'Bernardo Silva',
                            number: 20,
                            position: 'Tiền vệ',
                            nationality: 'Portugal',
                            age: 29,
                            height: '173cm',
                            apps: 27,
                            goals: 6,
                            assists: 9,
                            rating: 8.0,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'D',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Mateo Kovačić',
                            number: 8,
                            position: 'Tiền vệ',
                            nationality: 'Croatia',
                            age: 29,
                            height: '178cm',
                            apps: 21,
                            goals: 2,
                            assists: 3,
                            rating: 7.4,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'L',
                                'W'
                            ]
                        },
                        {
                            name: 'Matheus Nunes',
                            number: 27,
                            position: 'Tiền vệ',
                            nationality: 'Portugal',
                            age: 25,
                            height: '183cm',
                            apps: 15,
                            goals: 1,
                            assists: 2,
                            rating: 7.0,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'D',
                                'W',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Kalvin Phillips',
                            number: 4,
                            position: 'Tiền vệ',
                            nationality: 'England',
                            age: 28,
                            height: '178cm',
                            apps: 8,
                            goals: 0,
                            assists: 1,
                            rating: 6.8,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'D'
                            ],
                            injuryStatus: 'Chấn thương',
                            injuryReturn: '3 tuần',
                            injuryType: 'Bắp chân'
                        },
                        // Forwards
                        {
                            name: 'Erling Haaland',
                            number: 9,
                            position: 'Tiền đạo',
                            nationality: 'Norway',
                            age: 23,
                            height: '194cm',
                            apps: 26,
                            goals: 28,
                            assists: 5,
                            rating: 8.9,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Phil Foden',
                            number: 47,
                            position: 'Tiền đạo',
                            nationality: 'England',
                            age: 23,
                            height: '171cm',
                            apps: 28,
                            goals: 14,
                            assists: 7,
                            rating: 8.2,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'D',
                                'W'
                            ]
                        },
                        {
                            name: 'Jack Grealish',
                            number: 10,
                            position: 'Tiền đạo',
                            nationality: 'England',
                            age: 28,
                            height: '180cm',
                            apps: 25,
                            goals: 5,
                            assists: 8,
                            rating: 7.6,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'D',
                                'W',
                                'W',
                                'W'
                            ]
                        },
                        {
                            name: 'Julián Álvarez',
                            number: 19,
                            position: 'Tiền đạo',
                            nationality: 'Argentina',
                            age: 24,
                            height: '170cm',
                            apps: 22,
                            goals: 11,
                            assists: 4,
                            rating: 7.8,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS',
                            recentForm: [
                                'W',
                                'W',
                                'W',
                                'W',
                                'D'
                            ]
                        },
                        {
                            name: 'Jérémy Doku',
                            number: 11,
                            position: 'Tiền đạo',
                            nationality: 'Belgium',
                            age: 21,
                            height: '173cm',
                            apps: 18,
                            goals: 3,
                            assists: 6,
                            rating: 7.3,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq',
                            recentForm: [
                                'W',
                                'W',
                                'D',
                                'W',
                                'L'
                            ],
                            injuryStatus: 'Nghi ngờ',
                            injuryReturn: '1 tuần',
                            injuryType: 'Đùi'
                        },
                        {
                            name: 'Oscar Bobb',
                            number: 52,
                            position: 'Tiền đạo',
                            nationality: 'Norway',
                            age: 20,
                            height: '177cm',
                            apps: 10,
                            goals: 2,
                            assists: 1,
                            rating: 6.9,
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG',
                            recentForm: [
                                'W',
                                'W',
                                'W'
                            ]
                        }
                    ],
                    coaches: [
                        {
                            name: 'Pep Guardiola',
                            role: 'Huấn luyện viên trưởng',
                            nationality: 'Spain',
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS'
                        },
                        {
                            name: 'Juanma Lillo',
                            role: 'Trợ lý HLV',
                            nationality: 'Spain',
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeoDv2wGuXVcMhm3B9jBczSO8XBOBeWBa6F4fRdlSjqX7OHiKHZ0WC_E89h2EIQmlYMVtkSfaa4WgE7dCRPrDeBd93iZhs4vN6qMJWj0eUH49sL1CjVmXeeANwzDztUiYSWa9xDGK6ZIRRIBSaw1PKShVAk0KhdqZ2eNeVrh7cXvxPZkXvJ0F5Lv5ZyZjs0B5GpeUiLjEM8woEO-HHc7p-Gd8q0h9MT2w2f8Obwv8OE8_6_n6vF-5PymFdpohilDeyC1n-kY-JBiq'
                        },
                        {
                            name: 'Enzo Maresca',
                            role: 'Trợ lý HLV',
                            nationality: 'Italy',
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEk16034ETIT2QJM4enMTBuRL0NKKnTYvuv0Pzayc0AYoGFYdRLGV5ZbpmnCe9A2f-uATwXj6GacjnQHoPH9l4U9IjBaxxjP5oU0pqiSFg6d0ZfKFWVxpbl1Wdon7212QeYgweWPG9jdBXxt1F8AdycuHG88lQmUbSbankTNpNeNjqkYeaKiicROoVQCHlNRTFLTFZQVyFJZ3HH5zT6nuMwxdcXBQmUmTUZPzthSinwyxC9f5RM8ZP7ECADxfZvaKoh1B8LsW4aaLG'
                        },
                        {
                            name: 'Carlos Vicens',
                            role: 'HLV thủ môn',
                            nationality: 'Spain',
                            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5bTOJr8j59YJA74DNlp6QWTZyr5i3XDzqBHRsEwvxV2WIiLbakvFU26YHoyljqIoHZgOeCX7ODEpwx7ewprm7RvJBqxS5nD2_LakpVH4WBuWKuKScRv4ByURpHyuQwGnLI0t87CjE5jzWB02Ibn2CYY2IBkBKwc2Ovuj3X5PIKxf6__XLMnUcmhb1lhL03qHP5Fz8w3zirSAcK7k9pvAyoZGLwQ4fEsiBDpTlpvsrDXWqPR-BH2XYsifGaUrtO8I0E8IBuaHxmdDS'
                        }
                    ],
                    mainLineup: [
                        31,
                        2,
                        3,
                        5,
                        24,
                        16,
                        20,
                        17,
                        47,
                        9,
                        10
                    ],
                    substituteLineup: [
                        18,
                        6,
                        25,
                        8,
                        27,
                        19,
                        11
                    ],
                    formation: {
                        name: '4-3-3',
                        description: 'Sơ đồ tấn công linh hoạt với 3 tiền đạo',
                        positions: [
                            {
                                number: 31,
                                x: 50,
                                y: 95,
                                position: 'GK'
                            },
                            {
                                number: 2,
                                x: 85,
                                y: 75,
                                position: 'RB'
                            },
                            {
                                number: 3,
                                x: 65,
                                y: 80,
                                position: 'CB'
                            },
                            {
                                number: 5,
                                x: 35,
                                y: 80,
                                position: 'CB'
                            },
                            {
                                number: 24,
                                x: 15,
                                y: 75,
                                position: 'LB'
                            },
                            {
                                number: 16,
                                x: 50,
                                y: 55,
                                position: 'CDM'
                            },
                            {
                                number: 20,
                                x: 65,
                                y: 45,
                                position: 'CM'
                            },
                            {
                                number: 17,
                                x: 35,
                                y: 45,
                                position: 'CM'
                            },
                            {
                                number: 47,
                                x: 75,
                                y: 20,
                                position: 'RW'
                            },
                            {
                                number: 9,
                                x: 50,
                                y: 10,
                                position: 'ST'
                            },
                            {
                                number: 10,
                                x: 25,
                                y: 20,
                                position: 'LW'
                            }
                        ]
                    },
                    playingStyle: {
                        possession: 68,
                        passingAccuracy: 89,
                        pressureIntensity: 85,
                        defensiveLine: 'Cao',
                        buildUpStyle: 'Chuyền ngắn',
                        attackingWidth: 'Rộng',
                        strengths: [
                            'Kiểm soát bóng vượt trội',
                            'Pressing cao áp lực',
                            'Chuyền bóng chính xác',
                            'Tấn công đa dạng'
                        ],
                        weaknesses: [
                            'Dễ bị phản công',
                            'Phụ thuộc vào cầu thủ chủ chốt'
                        ],
                        tacticalApproach: 'Tiki-taka với pressing cao, kiểm soát bóng tuyệt đối và tấn công vị trí. Đội hình linh hoạt với hậu vệ biên tham gia tấn công và tiền vệ trung tâm di chuyển liên tục.'
                    }
                });
            }, 600);
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useStandings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStandings",
    ()=>useStandings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$teamService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/teamService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useStandings = ()=>{
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overall'); // overall, home, away
    const { data = [], isLoading: loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'standings',
            'PL'
        ],
        queryFn: {
            "useStandings.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$teamService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamService"].getStandings('PL')
        }["useStandings.useQuery"],
        staleTime: 1000 * 60 * 60
    });
    const displayData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStandings.useMemo[displayData]": ()=>{
            if (filter === 'overall') return data;
            return data.map({
                "useStandings.useMemo[displayData]": (team)=>{
                    const seed = team.team.charCodeAt(0);
                    const homeStrength = 0.55 + seed % 20 / 100;
                    const ratio = filter === 'home' ? homeStrength : 1 - homeStrength;
                    const played = Math.ceil(team.played / 2);
                    const points = Math.round(team.points * ratio);
                    const wins = Math.floor(points / 3);
                    const draws = Math.max(0, points - wins * 3);
                    const losses = Math.max(0, played - wins - draws);
                    const gdVal = parseInt(team.gd);
                    const gd = Math.round(gdVal * ratio);
                    return {
                        ...team,
                        played,
                        points,
                        record: `${wins}-${draws}-${losses}`,
                        gd: gd > 0 ? `+${gd}` : `${gd}`
                    };
                }
            }["useStandings.useMemo[displayData]"]).sort({
                "useStandings.useMemo[displayData]": (a, b)=>{
                    if (b.points !== a.points) return b.points - a.points;
                    return parseInt(b.gd) - parseInt(a.gd);
                }
            }["useStandings.useMemo[displayData]"]).map({
                "useStandings.useMemo[displayData]": (item, index)=>({
                        ...item,
                        rank: index + 1
                    })
            }["useStandings.useMemo[displayData]"]);
        }
    }["useStandings.useMemo[displayData]"], [
        filter,
        data
    ]);
    return {
        filter,
        setFilter,
        displayData,
        loading
    };
};
_s(useStandings, "rSe5/pRcx5pxwI3pwmvXZcwmDXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$16_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Skeleton = ({ className = '', variant = 'rectangular', width, height, style })=>{
    const baseStyles = "animate-pulse bg-slate-200 dark:bg-slate-700/50";
    const variants = {
        rectangular: "rounded-xl",
        circular: "rounded-full",
        text: "rounded-md"
    };
    const combinedStyle = {
        width: width,
        height: height,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        style: combinedStyle
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Skeleton.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Skeleton;
const __TURBOPACK__default__export__ = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(primary)/standings/StandingsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StandingsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStandings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStandings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StandingsClient() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { filter, setFilter, displayData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStandings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStandings"])();
    const columns = [
        {
            key: 'rank',
            title: '#',
            width: '48px',
            className: 'pl-4 pr-2',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
          ${item.status === 'ucl' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : item.status === 'uel' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : item.status === 'relegation' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'text-gray-500'}`,
                    children: item.rank
                }, void 0, false, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'team',
            title: 'Đội bóng',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 p-1 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.logo,
                                alt: item.team,
                                className: "w-full h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-sm text-[#111418] dark:text-white",
                            children: item.team
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'played',
            title: 'Trận',
            align: 'center',
            width: '48px',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-gray-600 dark:text-gray-300",
                    children: item.played
                }, void 0, false, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 48,
                    columnNumber: 25
                }, this)
        },
        {
            key: 'gd',
            title: 'HS',
            align: 'center',
            headerClassName: 'hidden sm:table-cell',
            className: 'hidden sm:table-cell',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-sm font-medium ${parseInt(item.gd) > 0 ? 'text-green-600' : parseInt(item.gd) < 0 ? 'text-red-600' : 'text-gray-500'}`,
                    children: item.gd
                }, void 0, false, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
        },
        {
            key: 'record',
            title: 'T-H-B',
            align: 'center',
            headerClassName: 'hidden md:table-cell',
            className: 'hidden md:table-cell',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-gray-500",
                    children: item.record
                }, void 0, false, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 68,
                    columnNumber: 25
                }, this)
        },
        {
            key: 'points',
            title: 'Điểm',
            align: 'center',
            width: '64px',
            className: 'pl-2 pr-4',
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold text-[#111418] dark:text-white",
                    children: item.points
                }, void 0, false, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 76,
                    columnNumber: 25
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f6f7f8] dark:bg-[#101922] min-h-screen pb-24 font-display text-[#111418] dark:text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-20 bg-white border-b border-gray-100 dark:border-gray-800 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "appearance-none w-full bg-slate-50 dark:bg-gray-800 text-[#111418] dark:text-white border-none rounded-2xl py-3 pl-12 pr-10 text-lg font-semibold cursor-pointer focus:ring-2 focus:ring-primary/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Premier League"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "La Liga"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Serie A"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Bundesliga"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "V-League"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full bg-gray-200 bg-cover bg-center",
                                            style: {
                                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASl46Hj6T1DM7EqHg4eYypaMSKa4mCdEpB8mgJt_zvd6j9XuzkWXqfCdHVMZzDaJ1snconVzIdQGgd27l8w3X0odCscElH4yl61tPnFv6uFsRIcIkPDfIQepbBzJWmTQ1htkv_x6moW_1G_dFtWXkweEES6t1ZpHcxKjvRqkeWOjpgQOTvLC3Y1Bhvo2LpvDV_rvx6gyhe4mYmY0jZTW8HDN4_DkN5nGqVsxT4VFs6mMKUblhvNVL1wMkwawGqB2UFxDchKXQxyLmN')"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "expand_more"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-full max-w-md items-center rounded-full bg-[#f0f2f4] dark:bg-gray-800 p-1",
                                children: [
                                    'overall',
                                    'home',
                                    'away'
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter(f),
                                        className: `flex-1 rounded-full text-xs font-bold uppercase tracking-wide h-full transition-all ${filter === f ? 'bg-white dark:bg-[#1A2633] shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`,
                                        children: f === 'overall' ? 'Tổng quan' : f === 'home' ? 'Sân nhà' : 'Sân khách'
                                    }, f, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-7xl px-4 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#1A2633] rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 space-y-4",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "circular",
                                            width: 24,
                                            height: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "circular",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "text",
                                                    width: 100,
                                                    height: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "text",
                                            width: 30,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "text",
                                            width: 30,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "text",
                                            width: 30,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: displayData,
                            columns: columns,
                            onRowClick: ()=>router.push('/team-detail')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-4 px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Champions League"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Europa League"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "Xuống hạng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(primary)/standings/StandingsClient.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(StandingsClient, "+X1hqh32ymscm1GwQ+n9jqb7Y+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStandings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStandings"]
    ];
});
_c = StandingsClient;
var _c;
__turbopack_context__.k.register(_c, "StandingsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ecc00d3b._.js.map