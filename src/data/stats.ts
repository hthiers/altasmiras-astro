export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 175,
                label: 'Personas capacitadas',
                prefix: '+',
            },
            {
                value: 2,
                label: 'Regiones',
            },
            {
                value: 7,
                label: 'Áreas de capacitación',
                prefix: '+',
            },
            {
                value: 2017,
                label: 'Año de fundación',
            },
        ],
    },
    impacto2025: {
        id: 'impacto2025',
        stats: [
            {
                value: 7,
                label: 'Cursos ejecutados',
                prefix: '+',
            },
            {
                value: 100,
                label: 'Personas capacitadas',
                prefix: '+',
            },
            {
                value: 2,
                label: 'Regiones',
            },
        ],
    },
};
