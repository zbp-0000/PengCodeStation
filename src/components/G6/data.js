export const COLLAPSE_ICON = function COLLAPSE_ICON (x, y, r) {
    return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
    ];
};
export const EXPAND_ICON = function EXPAND_ICON (x, y, r) {
    return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
        ['M', x, y - 2 * r + 2],
        ['L', x, y - 2],
    ];
};

export const data = {
    id: 'root',
    label: 'root',
    children: [
        {
            id: 'c1',
            label: 'c1',
            children: [
                {
                    id: 'c1-1',
                    label: 'c1-1',
                },
                {
                    id: 'c1-2',
                    label: 'c1-2',
                    children: [
                        {
                            id: 'c1-2-1',
                            label: 'c1-2-1',
                        },
                        {
                            id: 'c1-2-2',
                            label: 'c1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 'c2',
            label: 'c2',
        },
        {
            id: 'c3',
            label: 'c3',
            children: [
                {
                    id: 'c3-1',
                    label: 'c3-1',
                },
                {
                    id: 'c3-2',
                    label: 'c3-2',
                    children: [
                        {
                            id: 'c3-2-1',
                            label: 'c3-2-1',
                        },
                        {
                            id: 'c3-2-2',
                            label: 'c3-2-2',
                        },
                        {
                            id: 'c3-2-3',
                            label: 'c3-2-3',
                        },
                    ],
                },
                {
                    id: 'c3-3',
                    label: 'c3-3',
                },
            ],
        },
    ],
};