import { Zap, Heart, Trophy, Gem, Wrench, Scissors, Palette } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Scissors,
                title: 'Cosmetología básica',
                description: 'Técnicas fundamentales de cosmetología para el cuidado y embellecimiento personal.',
            },
            {
                icon: Gem,
                title: 'Orfebrería',
                description: 'Trabajo artesanal con cobre y plata para la creación de piezas únicas.',
            },
            {
                icon: Trophy,
                title: 'Árbitro de fútbol',
                description: 'Formación y certificación para el arbitraje en competencias de fútbol.',
            },
            {
                icon: Heart,
                title: 'Cuidados primarios de personas',
                description: 'Atención y cuidados básicos orientados al bienestar de personas dependientes.',
            },
            {
                icon: Palette,
                title: 'Diseño de prendas de vestir',
                description: 'Diseño y confección de prendas con énfasis en creatividad y técnica.',
            },
            {
                icon: Wrench,
                title: 'Redes sanitarias y gas',
                description: 'Instalación y mantención de redes de agua potable, alcantarillado y gas.',
            },
            {
                icon: Zap,
                title: 'Instalaciones eléctricas',
                description: 'Montaje y reparación de instalaciones eléctricas tipo F y G.',
            },
        ],
    },
};
