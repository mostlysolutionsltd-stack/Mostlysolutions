/**
 * Blog content for the workshop blog. All copy is SEO-approved and ported
 * verbatim from the design handoff prototypes — do not reword.
 *
 * Cross-links inside each `result` paragraph are declared explicitly in
 * `resultLinks` (phrase → service route) and rendered at display time.
 */

export type ResultLink = { phrase: string; href: string }

export type BlogPost = {
  slug: string
  category: string // chip label
  breadcrumbCategory: string
  h1: string
  date: string // display, e.g. "12 July 2026"
  datePublished: string // ISO, e.g. "2026-07-12"
  area: string
  readTime: string
  image: string
  imageAlt: string
  intro: string
  problem: string
  checklist: string[]
  result: string
  resultLinks: ResultLink[]
  instagram: string
  ctaHeading: string
  ctaSub: string
  // Blog-index card fields
  dateArea: string
  excerpt: string
}

const DIAGNOSTICS = '/services/car-diagnostics-london'
const MECHANICAL = '/services/mechanical-work-london'
const ELECTRICAL = '/services/electrical-battery-london'

const CTA_SUB = 'Fast booking, expert technicians, and honest advice — wherever you are in London or Reading.'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'audi-rs5-brake-replacement-reading',
    category: 'Brakes',
    breadcrumbCategory: 'Brake Replacement',
    h1: 'Front Brake Pads & Discs Replacement on an Audi RS5 TFSI Quattro',
    date: '12 July 2026',
    datePublished: '2026-07-12',
    area: 'Reading, Berkshire',
    readTime: '3 min read',
    image: '/assets/ig/post1-brakes.jpg',
    imageAlt: 'New front brake disc fitted on an Audi RS5 in Reading',
    intro:
      "This 2017 Audi RS5 TFSI Quattro came to us with worn front brake components — reduced braking efficiency and a noticeable vibration under braking. Worn pads and discs don't just affect comfort; they extend stopping distances and put real safety at risk. The owner booked a mobile visit, and we completed the full replacement at their home in Reading.",
    problem:
      'Brake pads and discs wear as a pair. Once the discs develop uneven wear, new pads alone won\'t restore smooth braking — the vibration returns within weeks. On a performance car like the RS5, quattro drivetrain and higher cornering speeds make healthy brakes even more critical.',
    checklist: [
      'Removal of worn front brake pads and brake discs',
      'Installation of new high-quality front brake pads and discs',
      'Inspection of braking system components',
      'Brake system checks and full road test',
    ],
    result:
      'Strong, smooth braking performance restored, with safe and reliable stopping power ensured — all without the owner leaving home. If your car vibrates under braking or squeals when stopping, our mobile mechanical repair service can replace pads and discs at your doorstep, and our car diagnostics service will confirm the cause before any work begins.',
    resultLinks: [
      { phrase: 'mobile mechanical repair service', href: MECHANICAL },
      { phrase: 'car diagnostics service', href: DIAGNOSTICS },
    ],
    instagram: 'https://www.instagram.com/p/DViU0YyDO2W/',
    ctaHeading: 'Need Your Brakes Checked?',
    ctaSub: CTA_SUB,
    dateArea: '12 Jul 2026 · Reading',
    excerpt:
      "Worn brake components were causing vibration under braking. Here's how we restored strong, smooth stopping power on the driveway.",
  },
  {
    slug: 'clutch-replacement-audi-q3-london',
    category: 'Clutch',
    breadcrumbCategory: 'Clutch Replacement',
    h1: 'Clutch Replacement on an Audi Q3 — Gearbox Out, On the Driveway',
    date: '4 July 2026',
    datePublished: '2026-07-04',
    area: 'London',
    readTime: '3 min read',
    image: '/assets/ig/post2-clutch.jpg',
    imageAlt: 'Audi Q3 raised with gearbox removed for clutch replacement in London',
    intro:
      'This Audi Q3 arrived with classic clutch failure symptoms — slipping under acceleration, difficulty shifting gears, and noticeably reduced driving performance. A worn-out clutch never repairs itself; left too long, it can damage the flywheel and gearbox. The owner booked a mobile visit and we completed the full clutch replacement at their home in London.',
    problem:
      'A slipping clutch means the friction plate can no longer transfer full engine power to the gearbox — you rev, but the car hesitates. Combined with stiff or crunchy gear changes, this Q3 needed a complete clutch kit, which on a transverse-engine SUV means removing the gearbox: a garage-scale job we carry out on the driveway.',
    checklist: [
      'Removal of worn clutch components',
      'Installation of new high-quality clutch kit',
      'Gearbox removed and refitted correctly',
      'Clutch system inspected and adjusted',
      'All components aligned and secured',
      'Final road test',
    ],
    result:
      'Smooth gear shifting restored, driving performance improved, and reliable operation ensured — with no recovery truck and no garage queue. If your car is slipping or shifting badly, our mobile mechanical repair service handles clutch work at your doorstep, and our car diagnostics service can confirm the fault first.',
    resultLinks: [
      { phrase: 'mobile mechanical repair service', href: MECHANICAL },
      { phrase: 'car diagnostics service', href: DIAGNOSTICS },
    ],
    instagram: 'https://www.instagram.com/p/DWn56kfjMct/',
    ctaHeading: 'Clutch Slipping or Hard to Shift?',
    ctaSub: CTA_SUB,
    dateArea: '4 Jul 2026 · London',
    excerpt:
      'Clutch slipping and difficult gear shifts meant a full clutch kit replacement. A garage-scale job completed at the customer\'s home.',
  },
  {
    slug: 'land-rover-discovery-brake-replacement-reading',
    category: 'Brakes',
    breadcrumbCategory: 'Brake Replacement',
    h1: 'Land Rover Discovery Front Brake Overhaul at Home',
    date: '26 June 2026',
    datePublished: '2026-06-26',
    area: 'Reading, Berkshire',
    readTime: '3 min read',
    image: '/assets/ig/post3-discovery.jpg',
    imageAlt: 'Land Rover Discovery front brake pads and discs replacement at home in Reading',
    intro:
      "This 2018 Land Rover Discovery was experiencing wear on its front braking components, affecting braking performance and overall driving safety. On a 2.5-tonne SUV, worn brakes are not something to postpone. We replaced the front pads and discs with high-quality parts at the owner's home in Reading — completed the same morning.",
    problem:
      'Heavy vehicles like the Discovery put enormous load through their front brakes. Worn pads and discs mean longer stopping distances, fade on descents, and uneven braking. The wear pattern on this vehicle called for pads and discs replaced together — the only way to restore even, confident braking.',
    checklist: [
      'Removal of worn front brake pads and discs',
      'Installation of new high-quality front brake pads',
      'Installation of new front brake discs',
      'Brake components cleaned and inspected',
      'Braking system checked for proper operation',
      'Final road test',
    ],
    result:
      "Improved braking performance restored, enhanced driving safety ensured, and smooth, reliable braking achieved — all at the customer's driveway. Notice fading or grinding brakes? Our mobile mechanical repair service replaces pads and discs at your home or workplace.",
    resultLinks: [{ phrase: 'mobile mechanical repair service', href: MECHANICAL }],
    instagram: 'https://www.instagram.com/p/DadVvXrjbAs/',
    ctaHeading: 'Need Your Brakes Checked?',
    ctaSub: CTA_SUB,
    dateArea: '26 Jun 2026 · Reading',
    excerpt:
      'Reduced braking performance on a 2018 Discovery — new pads and discs fitted, system inspected, and road tested the same morning.',
  },
  {
    slug: 'catalytic-converter-replacement-bmw-3-series-london',
    category: 'Exhaust',
    breadcrumbCategory: 'Exhaust Repair',
    h1: 'Catalytic Converter Replacement on a BMW 3 Series',
    date: '18 June 2026',
    datePublished: '2026-06-18',
    area: 'London',
    readTime: '3 min read',
    image: '/assets/ig/post4-cat.jpg',
    imageAlt: 'BMW 3 Series catalytic converter and exhaust replacement in London',
    intro:
      'This BMW 3 Series came to us with a faulty catalytic converter that was affecting exhaust efficiency and overall engine performance. A failing cat restricts exhaust flow, hurts fuel economy, triggers warning lights — and guarantees an MOT emissions failure. We installed a new high-quality unit and carried out full exhaust system checks at the customer\'s location.',
    problem:
      'The catalytic converter cleans exhaust gases before they leave the car. When its internal structure degrades or clogs, the engine struggles to breathe: sluggish acceleration, higher fuel consumption, and fault codes. Replacement must include proper alignment and leak checks, or the new unit\'s sensors will keep flagging errors.',
    checklist: [
      'Removal of faulty catalytic converter',
      'Installation of new high-quality catalytic converter',
      'Exhaust system alignment and secure fitting',
      'Exhaust leak inspection and checks',
      'Fault codes cleared and system tested',
      'Final road test',
    ],
    result:
      'Exhaust system performance restored, engine efficiency improved, and the emissions system functioning correctly. If you have an emissions warning light or a sluggish engine, our car diagnostics service will identify the fault, and our mechanical repair service can complete the fix on site.',
    resultLinks: [
      { phrase: 'car diagnostics service', href: DIAGNOSTICS },
      { phrase: 'mechanical repair service', href: MECHANICAL },
    ],
    instagram: 'https://www.instagram.com/p/DVf-kC3jL6t/',
    ctaHeading: 'Emissions Warning Light On?',
    ctaSub: CTA_SUB,
    dateArea: '18 Jun 2026 · London',
    excerpt:
      'A faulty cat was hurting exhaust efficiency and engine performance. New unit fitted, fault codes cleared, emissions restored.',
  },
  {
    slug: 'alternator-replacement-audi-q3-reading',
    category: 'Electrical',
    breadcrumbCategory: 'Electrical Repair',
    h1: 'Alternator Replacement on an Audi Q3 TDI Quattro — On Site',
    date: '9 June 2026',
    datePublished: '2026-06-09',
    area: 'Reading, Berkshire',
    readTime: '2 min read',
    image: '/assets/ig/post5-alternator.jpg',
    imageAlt: 'Old and new alternator during on-site replacement on an Audi Q3 in Reading',
    intro:
      "Today's job: an alternator replacement on this 2016 Audi Q3 TDI Quattro — completed conveniently at the customer's location. No need to visit a garage or adjust your schedule: we bring the workshop straight to you.",
    problem:
      "The alternator charges the battery and powers the car's electrics while driving. When it fails, the battery drains until the car dies — often mistaken for a battery fault. That's why we always test the charging system first, so you never pay for parts you don't need.",
    checklist: [
      'Charging system tested to confirm the alternator fault',
      'Removal of the failed alternator',
      'Installation of a new quality alternator',
      'Drive belt checked and refitted',
      'Charging output verified',
      'Final road test',
    ],
    result:
      'Reliable charging restored with a professional, safe and hassle-free repair — on-site service with quality parts. Battery light on or dimming headlights? Our electrical and battery service tests and replaces alternators and batteries at your location.',
    resultLinks: [{ phrase: 'electrical and battery service', href: ELECTRICAL }],
    instagram: 'https://www.instagram.com/p/DRKU4m_DBk0/',
    ctaHeading: 'Battery Light On Your Dash?',
    ctaSub: CTA_SUB,
    dateArea: '9 Jun 2026 · Reading',
    excerpt:
      'Charging system tested first, then the alternator swapped at the customer\'s location. No recovery truck, no garage visit.',
  },
  {
    slug: 'transfer-box-replacement-bmw-4-series-london',
    category: 'Drivetrain',
    breadcrumbCategory: 'Drivetrain Repair',
    h1: 'Transfer Box Replacement & Service on a BMW 4 Series Gran Coupe',
    date: '1 June 2026',
    datePublished: '2026-06-01',
    area: 'London',
    readTime: '3 min read',
    image: '/assets/ig/post6-transferbox.jpg',
    imageAlt: 'BMW 4 Series Gran Coupe transfer box replacement and service in London',
    intro:
      'This BMW 4 Series Gran Coupe 3.0 was experiencing drivetrain issues — knocking noises and uneven power distribution caused by a faulty transfer box. We replaced the unit and carried out a complete service, restoring smooth operation with improved performance and reliability.',
    problem:
      'The transfer box splits engine power between the front and rear axles on xDrive BMWs. When it fails, you feel knocking, binding in tight turns, and uneven power delivery. Diagnosis matters: similar symptoms can come from driveshafts or differentials, so we always check the full drivetrain first.',
    checklist: [
      'Diagnostic check of drivetrain system',
      'Removal of faulty transfer box',
      'Installation of replacement transfer box',
      'Transfer box oil drained and refilled with correct fluid',
      'System checked for leaks and proper operation',
      'Final road test',
    ],
    result:
      'Smooth and balanced power delivery restored, no more drivetrain noise or faults, and reliable, efficient driving ensured. Hearing knocking from underneath? Book our diagnostics service to trace it, and our mechanical team will complete the repair at your location.',
    resultLinks: [
      { phrase: 'diagnostics service', href: DIAGNOSTICS },
      { phrase: 'mechanical team', href: MECHANICAL },
    ],
    instagram: 'https://www.instagram.com/p/DWlQjQRDJED/',
    ctaHeading: 'Drivetrain Noise or Knocking?',
    ctaSub: CTA_SUB,
    dateArea: '1 Jun 2026 · London',
    excerpt:
      'Knocking noises and uneven power delivery traced to a faulty transfer box. Replaced, refilled, and road tested.',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
