import { company } from './utils';

export const defaultSEO = {
  title: 'CrushCodeWorks — Premium Digital Product Studio',
  description:
    'CrushCodeWorks designs and builds high-performing websites, SaaS products, and e-commerce experiences for global companies.',
  image: `${company.url}/og-default.jpg`
};

export function agencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    url: company.url,
    email: company.email,
    areaServed: 'Worldwide',
    priceRange: `${company.pricing.base} - ${company.pricing.ecommerce}`,
    serviceType: [
      'Web Development',
      'SaaS Applications',
      'E-commerce',
      'UI/UX Design',
      'Performance Optimization',
      'White-label development'
    ]
  };
}
