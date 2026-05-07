// src/data/menu.ts

export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: { name: string; link: string }[];
}

export const headerMenu: MenuItem[] = [
    { name: 'Quiénes Somos', link: '/nosotros' },
    { name: 'Cursos', link: '/cursos' },
    { name: 'Documentos', link: '/documentos' },
];

export const footerMenu: MenuItem[] = [
    { name: 'Quiénes Somos', link: '/nosotros' },
    { name: 'Cursos', link: '/cursos' },
    { name: 'Contacto', link: '/contact' },
    { name: 'Documentos', link: '/documentos' },
];

export const legalMenu: MenuItem[] = [];
