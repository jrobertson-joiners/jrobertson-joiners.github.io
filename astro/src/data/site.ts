export const SITE = {
  title: 'Jamie Robertson Joiners',
  url: 'https://jrobertson-joiners.co.uk',
  description: 'Joinery-led building contractor in Stirling since 2016. Specialising in bespoke kitchens, loft conversions, extensions and full contract builds across Central Scotland.',
  author: 'Jamie Robertson',
  foundingYear: 2016,
  email: 'info@jrobertson-joiners.co.uk',

  // Phone — keep these in sync. `phone` is the human-readable display string,
  // `phoneTel` is the E.164 value used for tel: links and structured data.
  phone: '07917 113 063',
  phoneTel: '+447917113063',

  // WhatsApp. `whatsappText` pre-fills the message to lower the barrier.
  whatsappUrl: 'https://wa.me/447917113063',
  whatsappText: "Hi Jamie, I'd like a quote for ",

  // Contact form backend (Formspree — the static site has no server).
  formspreeUrl: 'https://formspree.io/f/mjkdyrzo',

  // Single source of truth for the business location (used in geo meta tags
  // and the LocalBusiness/GeoCircle structured data).
  geo: {
    lat: '56.15516',
    lng: '-4.12703',
    region: 'GB-STG',
    placename: 'Stirling',
  },

  social: {
    facebook: 'https://www.facebook.com/jrobertsonjoiners2016',
  },
};

/** Absolute URL helper, e.g. absUrl('/contact/') -> 'https://.../contact/'. */
export const absUrl = (path = '') => `${SITE.url}${path}`;

/** Canonical @id for the Organization node that other schemas reference. */
export const ORG_ID = `${SITE.url}/#organization`;

/** Pre-filled WhatsApp deep link. */
export const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(SITE.whatsappText)}`;

export const MENU_LINKS = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' }, // Contact is usually last
];
