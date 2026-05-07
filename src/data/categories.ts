interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Tech',
    slug: 'tech',
    description: 'Lo último en tecnología y desarrollo de software'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Consejos e información sobre desarrollo web'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Exploración del diseño y experiencia de usuario'
  },
  {
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Accesibilidad y experiencia de usuario'
  },
  {
    name: 'Theme Usage',
    slug: 'theme-usage',
    description: 'Aprende a usar el tema'
  },
  {
    name: 'Astro JS',
    slug: 'astro-js',
    description: 'Todo sobre el framework Astro JS'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Estrategias y mejores prácticas de posicionamiento en buscadores'
  },
  
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}