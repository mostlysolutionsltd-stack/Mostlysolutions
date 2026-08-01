/**
 * Blog content for the workshop blog. All copy is SEO-approved and ported
 * verbatim from the design handoff prototypes — do not reword.
 *
 * Cross-links inside each `result` paragraph are declared explicitly in
 * `resultLinks` (phrase → service route) and rendered at display time.
 */

export type ResultLink = { phrase: string; href: string }

// Ordered content blocks for long-form article posts (e.g. guides). When a post
// supplies `body`, the post template renders these blocks instead of the
// case-study layout (Problem / checklist / Result / Instagram).
export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type BlogFaq = { q: string; a: string }

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
  // Case-study fields (job-story posts). Optional so article posts can omit them.
  problem?: string
  checklist?: string[]
  result?: string
  resultLinks?: ResultLink[]
  instagram?: string
  // Long-form article fields. When present, rendered in place of the case-study layout.
  body?: BlogBlock[]
  faqs?: BlogFaq[]
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
    slug: 'mobile-car-diagnostics-london',
    category: 'Diagnostics',
    breadcrumbCategory: 'Car Diagnostics',
    h1: 'Mobile Car Diagnostics in London: Fast, Accurate, and Convenient Vehicle Checks',
    date: '1 August 2026',
    datePublished: '2026-08-01',
    area: 'London',
    readTime: '6 min read',
    image: '/services/diagnostics.webp',
    imageAlt: 'Mobile car diagnostics being carried out on a vehicle in London',
    intro:
      'Modern cars rely on advanced technology to keep every system working properly. When something goes wrong, it is not always easy to find the cause without the right equipment. That is why professional diagnostic services have become an essential part of vehicle maintenance. Whether your dashboard warning light appears, your car loses power, or you notice unusual performance issues, a professional inspection can identify the problem before it becomes more serious.',
    body: [
      { type: 'p', text: 'At Mostly Solutions, we provide reliable mobile car diagnostics in London that save you time and help you keep your vehicle in excellent condition. Instead of driving to a garage and waiting for an appointment, our experienced technicians come to your location with advanced diagnostic tools to inspect your vehicle.' },

      { type: 'h2', text: 'What Are Car Diagnostics?' },
      { type: 'p', text: "A vehicle diagnostic service checks your car's electronic systems using specialised equipment. Every modern vehicle has sensors that monitor the engine, transmission, brakes, battery, emissions, and many other components. When one of these systems detects a fault, it stores a fault code." },
      { type: 'p', text: 'A professional automotive diagnostic service reads these codes and helps identify the exact issue affecting your vehicle. This allows technicians to recommend the correct repair instead of replacing parts through guesswork.' },

      { type: 'h2', text: 'Why Choose Mobile Car Diagnostics?' },
      { type: 'p', text: 'Many drivers have busy schedules and cannot spend hours waiting at a repair shop. Mobile diagnostic services provide a convenient solution.' },
      { type: 'p', text: 'With mobile car diagnostics in London, our technician arrives at your home, office, or roadside location with professional equipment. The vehicle is inspected where it is parked, making the process simple and stress free.' },
      { type: 'p', text: 'Benefits include:' },
      { type: 'ul', items: ['Saving time', 'No need to tow your vehicle in many cases', 'Quick identification of faults', 'Professional advice from experienced technicians', 'Accurate reports before repairs begin'] },

      { type: 'h2', text: 'Signs Your Vehicle Needs a Diagnostic Check' },
      { type: 'p', text: 'Your vehicle often gives warning signs before a major problem develops. Booking a diagnostic check early can prevent expensive repairs later.' },
      { type: 'p', text: 'Common signs include:' },
      { type: 'ul', items: ['Engine warning light remains on', 'Poor fuel economy', 'Difficulty starting the vehicle', 'Loss of engine power', 'Rough idling', 'Unusual noises', 'Transmission problems', 'Increased exhaust smoke'] },
      { type: 'p', text: 'Ignoring these symptoms can allow small issues to become much more costly.' },

      { type: 'h2', text: 'What Happens During a Car Diagnostic Test?' },
      { type: 'p', text: 'A professional car diagnostic test involves much more than simply reading fault codes.' },
      { type: 'p', text: 'The technician will:' },
      { type: 'ul', items: ['Connect advanced diagnostic equipment', 'Read stored fault codes', 'Check live vehicle data', 'Inspect electrical systems', 'Test engine performance', 'Identify the source of the problem', 'Explain the findings clearly'] },
      { type: 'p', text: 'This detailed process helps ensure the correct repair is recommended the first time.' },

      { type: 'h2', text: 'Why Accurate Diagnostics Matter' },
      { type: 'p', text: 'Replacing parts without identifying the real fault often wastes time and money.' },
      { type: 'p', text: "A proper automotive diagnostic test allows technicians to understand exactly what your vehicle needs. Instead of guessing, repairs are based on real information collected from the vehicle's electronic systems." },
      { type: 'p', text: 'This approach reduces unnecessary repairs and helps restore your vehicle more quickly.' },

      { type: 'h2', text: 'Common Problems Found During Engine Diagnostics' },
      { type: 'p', text: 'Many vehicle faults begin with small warning signs that drivers may overlook.' },
      { type: 'p', text: 'An engine diagnostic can identify issues such as:' },
      { type: 'ul', items: ['Faulty oxygen sensors', 'Ignition coil failures', 'Spark plug problems', 'Fuel injector faults', 'Air flow sensor issues', 'Battery charging problems', 'Emission system faults', 'Cooling system concerns'] },
      { type: 'p', text: 'Finding these problems early can improve vehicle performance and prevent larger repairs.' },

      { type: 'h2', text: 'Looking for Car Diagnostic Services Near You?' },
      { type: 'p', text: 'Many drivers search online for car diagnostic near me when a warning light suddenly appears or their vehicle starts behaving differently.' },
      { type: 'p', text: 'Choosing a trusted mobile service means you do not have to worry about driving a potentially unsafe vehicle to a workshop. Mostly Solutions brings professional equipment directly to your location across London, providing a convenient and reliable solution when you need it most.' },
      { type: 'p', text: 'Likewise, if you are searching for mobile car diagnostics near me, our mobile service is designed to reach customers wherever they are, helping them receive expert assistance without unnecessary delays.' },

      { type: 'h2', text: 'Vehicles We Diagnose' },
      { type: 'p', text: 'Our technicians work with many different makes and models, including:' },
      { type: 'ul', items: ['Petrol vehicles', 'Diesel vehicles', 'Hybrid vehicles', 'Commercial vans', 'Family cars', 'Executive vehicles'] },
      { type: 'p', text: 'Using advanced equipment allows us to diagnose a wide range of electronic and mechanical faults accurately.' },

      { type: 'h2', text: 'Why Choose Mostly Solutions?' },
      { type: 'p', text: 'Choosing the right diagnostic service gives you confidence that your vehicle is being checked by experienced professionals.' },
      { type: 'p', text: 'Our customers choose Mostly Solutions because we offer:' },
      { type: 'ul', items: ['Experienced technicians', 'Mobile service across London', 'Modern diagnostic equipment', 'Honest advice', 'Fast response', 'Competitive pricing', 'Reliable customer service'] },
      { type: 'p', text: 'We focus on identifying the problem correctly before recommending repairs, helping customers avoid unnecessary costs.' },

      { type: 'h2', text: 'Prevent Future Vehicle Problems' },
      { type: 'p', text: 'Regular diagnostics are not only useful when warning lights appear. Preventive inspections can identify developing faults before they become serious.' },
      { type: 'p', text: 'Routine diagnostic check services help maintain vehicle performance, improve fuel efficiency, and increase reliability. They also provide peace of mind before long journeys or seasonal travel.' },
      { type: 'p', text: 'If your vehicle has recently shown warning lights or unusual behaviour, booking a professional inspection today can help prevent larger repair bills tomorrow.' },

      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Vehicle diagnostics have become one of the most important services for modern cars. Advanced electronic systems require specialised equipment and experienced technicians to identify faults accurately.' },
      { type: 'p', text: 'Whether you need mobile car diagnostics in London, a complete car diagnostic test, an engine diagnostic, or a full automotive diagnostic, Mostly Solutions provides professional mobile services that come directly to you.' },
      { type: 'p', text: 'Our goal is to make vehicle diagnostics simple, convenient, and accurate so you can get back on the road with confidence.' },
    ],
    faqs: [
      { q: 'What is a car diagnostic test?', a: "A car diagnostic test uses professional equipment to scan your vehicle's electronic systems, identify fault codes, and determine the cause of warning lights or performance issues." },
      { q: 'How long does a diagnostic check take?', a: 'A standard diagnostic check usually takes between 30 and 60 minutes, depending on the vehicle and the complexity of the issue.' },
      { q: 'Can mobile diagnostics fix my vehicle?', a: 'The diagnostic service identifies the problem first. If the issue can be repaired on site, the technician will advise you. Some repairs may require additional parts or workshop equipment.' },
      { q: 'Is an engine diagnostic necessary if the warning light disappears?', a: "Yes. Even if the warning light goes off, fault codes may still be stored in the vehicle's system. An engine diagnostic can identify any underlying issues before they become more serious." },
      { q: 'Do you provide mobile car diagnostics across London?', a: 'Yes. We provide mobile car diagnostics in London and travel to homes, workplaces, and roadside locations for customer convenience.' },
      { q: 'When should I search for car diagnostic services?', a: 'If your vehicle shows warning lights, loses power, has trouble starting, or is not performing as it should, it is time to book a professional inspection. Many drivers search for car diagnostic near me when they need quick help, while those who prefer on site assistance often search for mobile car diagnostics near me to have an experienced technician come directly to their home, workplace, or roadside location.' },
      { q: 'What is the difference between an automotive diagnostic and an automotive diagnostic test?', a: "Both terms refer to the process of checking a vehicle's electronic systems. An automotive diagnostic identifies faults, while an automotive diagnostic test includes a complete scan and detailed analysis to help determine the correct repair." },
    ],
    ctaHeading: 'Need a Diagnostic Check?',
    ctaSub: CTA_SUB,
    dateArea: '1 Aug 2026 · London',
    excerpt:
      'Dashboard warning light on or car losing power? Our mobile car diagnostics come to you across London with advanced equipment to find faults fast — accurately and conveniently.',
  },
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
