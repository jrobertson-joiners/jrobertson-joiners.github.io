/**
 * Per-service FAQs, keyed by the service collection slug.
 * Rendered as a visible <details> block AND as FAQPage structured data on
 * each /services/[slug]/ page. Keep answers honest and process-oriented —
 * avoid invented prices or timescales.
 */
export interface ServiceFaq {
  question: string;
  answer: string;
}

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  kitchens: [
    {
      question: 'Do you supply the kitchen units or just fit them?',
      answer:
        "We can do either — fit a kitchen you've bought yourself, or help you specify and source units, worktops and appliances and then install everything. Just let us know which suits you.",
    },
    {
      question: 'How long does a kitchen installation take?',
      answer:
        'It varies with the size of the kitchen, whether worktops are templated stone, and how much electrical or plumbing work is involved. We give you a clear timeline with your written quote.',
    },
    {
      question: 'Will you coordinate the plumber and electrician?',
      answer:
        'Yes. As a joinery-led contractor we coordinate the other trades needed, so you have one point of contact from first visit to final handover.',
    },
  ],
  'loft-conversions': [
    {
      question: 'Will my loft conversion need a building warrant?',
      answer:
        'Most habitable loft conversions in Scotland require a building warrant. We can assist with the application and make sure the work meets Scottish Building Regulations.',
    },
    {
      question: 'What type of loft conversion is right for my home?',
      answer:
        'It depends on your roof shape and the head height available — options range from rooflight (Velux) conversions to dormers. We assess your space during a free site visit and recommend the best approach.',
    },
    {
      question: 'How disruptive is the work?',
      answer:
        'We keep mess and disruption to a minimum, protect your home and tidy up as we go. We talk you through access and what to expect before we start.',
    },
  ],
  extensions: [
    {
      question: 'Do you handle the building warrant and regulations?',
      answer:
        'Yes — extensions normally require a building warrant, and we can assist with the application process and ensure the work meets Scottish Building Regulations.',
    },
    {
      question: 'Can you manage the whole project, not just the joinery?',
      answer:
        'Yes. We coordinate groundworks, electrics, plumbing, plastering and decorating through a trusted network of trades, so your extension is delivered start to finish with one point of contact.',
    },
    {
      question: 'Do you provide a free quote for extensions?',
      answer:
        "Yes, we provide free, no-obligation quotes. We'll visit to discuss your plans and provide a detailed written estimate.",
    },
  ],
  'general-joinery': [
    {
      question: 'Do you take on smaller joinery jobs?',
      answer:
        "Yes — from doors, windows and flooring to staircases, shelving and bespoke storage, no job is too small. Get in touch and we'll be happy to help.",
    },
    {
      question: 'Can you make bespoke or heritage joinery?',
      answer:
        'Yes. We make and install bespoke and traditional joinery including box sash windows, Victorian shutters and made-to-measure cabinetry, matching existing details where needed.',
    },
    {
      question: 'Do you offer free quotes for general joinery?',
      answer: 'Yes, we provide free, no-obligation quotes for all our services.',
    },
  ],
};
