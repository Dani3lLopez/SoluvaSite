import { company, services, mapUrl } from '../data/company';

export const seo = {
  title: 'SOLUVA | Seguridad electrónica en El Salvador',
  description: 'Videovigilancia, control de acceso, protección contra incendios y redes en El Salvador. Instalación y mantenimiento con SOLUVA. Solicite su cotización.',
  image: '/brand/logo-soluva-social.png',
};

export function structuredData(site?: URL) {
  const businessId = site ? new URL('#empresa', site).href : undefined;
  const websiteId = site ? new URL('#sitio', site).href : undefined;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: 'SOLUVA',
        legalName: company.name,
        url: site?.href,
        description: seo.description,
        foundingDate: String(company.founded),
        telephone: company.phone.replace(/[^+\d]/g, ''),
        email: company.email,
        logo: site ? new URL(seo.image, site).href : undefined,
        image: site ? new URL(seo.image, site).href : undefined,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.streetAddress,
          addressLocality: company.city,
          addressRegion: company.region,
          addressCountry: 'SV',
        },
        areaServed: { '@type': 'Country', name: company.country },
        hasMap: mapUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Seguridad electrónica e infraestructura tecnológica',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              serviceType: service.name,
              areaServed: { '@type': 'Country', name: company.country },
              provider: businessId ? { '@id': businessId } : undefined,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site?.href,
        name: 'SOLUVA',
        inLanguage: 'es-SV',
        publisher: businessId ? { '@id': businessId } : undefined,
      },
      {
        '@type': 'WebPage',
        '@id': site ? new URL('#pagina', site).href : undefined,
        url: site?.href,
        name: seo.title,
        description: seo.description,
        inLanguage: 'es-SV',
        isPartOf: websiteId ? { '@id': websiteId } : undefined,
        about: businessId ? { '@id': businessId } : undefined,
      },
    ],
  };
}

