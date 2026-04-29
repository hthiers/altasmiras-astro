export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: '¿Qué es Fundación Altasmiras?',
                answer: 'Somos una institución sin fines de lucro creada en 2017 por la Diócesis de Villarrica, que promueve la capacitación y el desarrollo de personas en sectores rurales y vulnerables de La Araucanía y Los Ríos.',
            },
            {
                question: '¿Quiénes pueden participar en los cursos?',
                answer: 'Los cursos están orientados a personas de sectores rurales y vulnerables de las regiones de La Araucanía y Los Ríos, con un enfoque en empleabilidad y emprendimiento.',
            },
            {
                question: '¿Cuáles son las áreas de capacitación?',
                answer: 'En 2025 ofrecemos cursos de cosmetología básica, orfebrería, árbitro de fútbol, cuidados primarios de personas, diseño de prendas de vestir, redes sanitarias y gas, e instalaciones eléctricas.',
            },
            {
                question: '¿Cómo puedo contactarme con la fundación?',
                answer: 'Puedes escribirnos a contacto@altasmiras.cl o completar el formulario en nuestra página de contacto.',
            },
            {
                question: '¿Tienen presencia en más regiones?',
                answer: 'Actualmente operamos en las regiones de La Araucanía y Los Ríos, con planes de expansión futura.',
            },
        ],
    },
};
