// src/data/menu.ts

export interface MenuItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: { name: string; link: string }[];
}

export const headerMenu: MenuItem[] = [
    { name: 'Quiénes Somos', link: '/nosotros' },
    { name: 'Cursos 2025', link: '/cursos' },
    { name: 'Contacto', link: '/contact' },
];

export const footerMenu: MenuItem[] = [
    { name: 'Quiénes Somos', link: '/nosotros' },
    { name: 'Cursos 2025', link: '/cursos' },
    { name: 'Contacto', link: '/contact' },
];

export const legalMenu: MenuItem[] = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' },
];
