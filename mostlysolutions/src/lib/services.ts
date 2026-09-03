/**
 * SEO service-page content for the four London landing pages.
 *
 * The H1s, taglines, section headings, checklist items and CTA headings are the
 * SEO-approved strings from the design handoff and must stay verbatim. Mandated
 * keyword phrases (e.g. "mobile car diagnostics service in London") must not be
 * reworded. Cross-links between services are applied automatically at render
 * time via SERVICE_ANCHORS (see components/ServicePageView.tsx).
 */

export type ServiceFAQ = { q: string; a: string }
export type ServiceSection = { h2: string; paras: string[] }

export type ServiceContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  breadcrumb: string
  h1: string
  tagline: string
  intro: string
  sections: ServiceSection[]
  checklistTitle: string
  checklist: string[]
  ctaHeading: string
  faqs: ServiceFAQ[]
}

// Anchor phrases → target slug, used to cross-link mentions of other services.
// Longest phrases are matched first so specific keyword phrases win.
export const SERVICE_ANCHORS: { slug: string; phrases: string[] }[] = [
  {
    slug: 'car-diagnostics-london',
    phrases: ['mobile car diagnostics service in London', 'mobile car diagnostics service', 'mobile car diagnostics', 'car diagnostics'],
  },
  {
    slug: 'mechanical-work-london',
    phrases: ['mechanical work in London', 'mechanical repairs', 'mechanical work'],
  },
  {
    slug: 'electrical-battery-london',
    phrases: ['car battery replacement in London', 'electrical and battery services', 'auto electrical', 'battery replacement'],
  },
  {
    slug: 'car-detailing-london',
    phrases: ['mobile car detailing in London', 'detailing and protection', 'ceramic coating', 'car detailing'],
  },
]

export const SERVICES: ServiceContent[] = [
  {
    slug: 'car-diagnostics-london',
    metaTitle: 'Mobile Car Diagnostics Service in London | Expert Vehicle Diagnostics',
    metaDescription:
      'Get fast and accurate mobile car diagnostics service in London. We identify engine faults, warning lights and performance issues at your home or workplace, saving you time and hassle.',
    breadcrumb: 'Car Diagnostics',
    h1: 'Mobile Car Diagnostics Service in London',
    tagline: 'Fast and Reliable Mobile Car Diagnostics at Your Doorstep',
    intro:
      'Mostly Solutions provides a professional mobile car diagnostics service in London, bringing dealer-grade Bosch diagnostic equipment directly to your home, workplace or the roadside. When a warning light appears or your car simply is not running right, our technicians pinpoint the fault accurately — no towing, no waiting rooms and no guesswork.',
    sections: [
      {
        h2: 'Professional Vehicle Fault Diagnosis',
        paras: [
          'Modern vehicles rely on dozens of interconnected electronic systems, and a single fault can trigger confusing symptoms across the car. Our mobile car diagnostics service in London reads live sensor data, scans every control module and interprets fault codes to identify the true root cause rather than the surface symptom.',
          'Using OEM-level diagnostic tools, we test engine management, ABS, airbag, transmission and emissions systems. You receive a clear explanation of what is wrong, what it will take to put it right, and an honest quote before any mechanical work begins.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions',
        paras: [
          'Every diagnostic is carried out by an IMI-certified technician with years of hands-on experience across European and Japanese marques. We come to you fully equipped, so your car is assessed exactly where it sits — at home, at the office or at the roadside.',
          'Accurate fault diagnosis saves money. By finding the real problem first, we help you avoid replacing parts unnecessarily, and if repairs are needed we can often complete them on the spot through our mechanical work and auto electrical services.',
        ],
      },
    ],
    checklistTitle: 'What Our Mobile Car Diagnostics Service Covers',
    checklist: [
      'Engine management light diagnosis',
      'ECU fault code scanning',
      'Battery and charging system testing',
      'Alternator and starter motor checks',
      'ABS diagnostics',
      'Airbag system diagnostics',
      'Auto electrical fault detection',
      'Sensor testing',
      'Performance and fuel efficiency issues',
      'Vehicle health checks before repairs',
    ],
    ctaHeading: 'Book Expert Automotive Diagnostics Today',
    faqs: [
      {
        q: 'What is included in a mobile car diagnostics scan?',
        a: 'Our scan checks every accessible control module — engine management, ABS, airbags, transmission and emissions — reads live sensor data and retrieves all stored fault codes. You receive a plain-English report explaining each fault and our recommended next steps.',
      },
      {
        q: 'Do you cover all areas of London?',
        a: 'Yes. Our mobile car diagnostics service in London covers Greater London and the surrounding areas, including home, workplace and roadside locations. If you are just outside London, get in touch and we will do our best to reach you.',
      },
      {
        q: 'Can you diagnose my dashboard warning lights?',
        a: 'Absolutely. Warning lights such as the engine management, ABS, airbag and battery lights are among the most common reasons customers call us. We identify exactly which system has logged the fault and explain what it means for your car.',
      },
      {
        q: 'How long does a diagnostic take?',
        a: 'A typical diagnostic takes around 30 to 60 minutes depending on the complexity of the fault. Intermittent or multi-system issues can take a little longer, and we will always keep you informed as we work.',
      },
      {
        q: 'Can you carry out the repair after the diagnosis?',
        a: 'In most cases, yes. Once we have identified the fault we can usually complete the repair on the spot through our mechanical work and auto electrical services, or provide a clear quote if parts need to be ordered.',
      },
    ],
  },
  {
    slug: 'mechanical-work-london',
    metaTitle: 'Mobile Mechanical Work in London | Car Repair Services',
    metaDescription:
      'Professional mobile mechanical work in London for brakes, suspension, servicing, engine repairs and more. Experienced mechanics deliver reliable repairs wherever your vehicle is located.',
    breadcrumb: 'Mechanical Work',
    h1: 'Mechanical Work in London',
    tagline: 'Professional Mobile Mechanical Repairs at Your Doorstep',
    intro:
      'Mostly Solutions delivers trusted mechanical work in London, repairing brakes, suspension, cooling systems and more at your home, workplace or the roadside. Our fully-equipped mobile technicians bring the garage to you, so you can skip the tow truck and the waiting room.',
    sections: [
      {
        h2: 'Comprehensive Mechanical Repair Services',
        paras: [
          'From worn brake pads to failing suspension components, our mechanical work in London covers the repairs that keep your car safe and reliable. We use OEM-grade parts backed by warranty, fitted correctly the first time by experienced technicians.',
          'Whether it is routine maintenance or an unexpected breakdown, we carry the tools and common parts needed to complete most jobs in a single visit — right where your vehicle is parked.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions',
        paras: [
          'Our IMI-certified mechanics have years of experience across major European and Japanese brands. We provide honest, upfront pricing and never recommend work your car does not need.',
          'If a fault needs investigating first, our mobile car diagnostics service pinpoints the problem before we lift a spanner, so you only pay for the repairs that genuinely fix the issue.',
        ],
      },
      {
        h2: 'Common Mechanical Problems We Repair',
        paras: [
          'Grinding brakes, knocking suspension, overheating engines and worn drive belts are among the faults we resolve every week. Left unattended these issues worsen quickly, so early repair keeps you safe and controls costs.',
          'We also handle starter and alternator problems and can arrange car battery replacement where an electrical fault is behind the breakdown.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Brake repairs and replacement',
      'Suspension repairs',
      'Steering system repairs',
      'Battery replacement',
      'Alternator replacement',
      'Starter motor repairs',
      'Cooling system repairs',
      'Engine component repairs',
      'Drive belt replacement',
      'General vehicle maintenance',
    ],
    ctaHeading: 'Book Your Mechanical Repair Today',
    faqs: [
      {
        q: 'What types of mechanical work do you carry out?',
        a: 'We handle brakes, suspension, steering, cooling systems, drive belts, engine components and general servicing. If you are unsure whether we cover your issue, get in touch and we will advise before booking.',
      },
      {
        q: 'Do you come to my home or workplace?',
        a: 'Yes. All of our mechanical work in London is carried out at a location that suits you — your driveway, a car park at work, or the roadside — with no need to visit a garage.',
      },
      {
        q: 'Do you use quality parts?',
        a: 'We fit OEM-grade parts backed by a 12-month warranty. We never use sub-standard components, and we confirm the parts and price with you before starting.',
      },
      {
        q: 'Can you fix my car the same day?',
        a: 'In most cases, yes. We carry common parts and tools to complete the majority of repairs on the first visit. If a specific part must be ordered, we will arrange a prompt return visit.',
      },
      {
        q: 'What if you cannot identify the problem straight away?',
        a: 'If the cause is not obvious, our mobile car diagnostics service will scan your vehicle and pinpoint the fault before we carry out any mechanical work, so nothing is replaced unnecessarily.',
      },
    ],
  },
  {
    slug: 'electrical-battery-london',
    metaTitle: 'Car Electrical & Battery Services in London | Mobile Auto Electrician',
    metaDescription:
      'Expert car electrical and battery services in London. We diagnose electrical faults, replace batteries, repair charging systems and get your vehicle back on the road quickly.',
    breadcrumb: 'Electrical & Battery',
    h1: 'Electrical and Battery Services in London',
    tagline: 'Reliable Mobile Electrical and Battery Services at Your Location',
    intro:
      'Mostly Solutions is your mobile auto electrician in London, offering everything from car battery replacement in London to alternator repairs and wiring fault finding — all carried out at your home, workplace or the roadside.',
    sections: [
      {
        h2: 'Professional Auto Electrical Repairs',
        paras: [
          'Electrical faults are among the hardest to trace, from parasitic battery drains to intermittent wiring problems. Our auto electrical specialists use professional diagnostic tools to locate the fault quickly and repair it properly.',
          'We repair charging systems, starters, alternators, lighting, fuses and relays, and resolve the dashboard warning lights that electrical faults so often trigger.',
        ],
      },
      {
        h2: 'Battery Replacement at Your Doorstep',
        paras: [
          'A flat or failing battery should not leave you stranded. We provide fast car battery replacement in London, testing your charging system first to make sure the battery is the real culprit and not an alternator fault.',
          'We fit the correct specification battery for your vehicle, dispose of the old unit responsibly, and reset any electronics that need reconfiguring after the change.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions',
        paras: [
          'Our IMI-certified auto electricians bring dealer-level equipment to you, so complex electrical faults are diagnosed and fixed without a garage visit. We explain the fault clearly and quote honestly before starting.',
          'Where an electrical issue overlaps with a wider fault, our mobile car diagnostics service and mechanical work team can complete everything in one visit.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Battery testing and replacement',
      'Alternator testing and replacement',
      'Starter motor diagnosis',
      'Charging system inspections',
      'Wiring fault repairs',
      'Fuse and relay replacement',
      'Lighting system repairs',
      'Electrical fault finding',
      'ECU fault diagnosis',
      'Dashboard warning light diagnosis',
    ],
    ctaHeading: 'Book Your Electrical or Battery Service Today',
    faqs: [
      {
        q: 'Can you replace my car battery at home?',
        a: 'Yes. We provide mobile car battery replacement in London at your home, workplace or roadside, and we test your charging system first to confirm the battery is the cause before fitting a new one.',
      },
      {
        q: 'How do I know if it is the battery or the alternator?',
        a: 'The symptoms often overlap, which is why we test both. We measure the battery condition and the alternator charging output so you replace the part that has actually failed, not both.',
      },
      {
        q: 'Do you cover all of London?',
        a: 'Yes. Our mobile electrical and battery services cover Greater London and the surrounding areas. If you are just outside the city, contact us and we will do our best to help.',
      },
      {
        q: 'Can you fix wiring and electrical faults, not just batteries?',
        a: 'Absolutely. We trace and repair wiring faults, charging problems, lighting failures, blown fuses and relays, and diagnose electrical warning lights using professional equipment.',
      },
      {
        q: 'What if the electrical fault is linked to another problem?',
        a: 'If the fault is part of a wider issue, our mobile car diagnostics service will scan the vehicle, and our mechanical work team can carry out any related repairs during the same visit.',
      },
    ],
  },
  {
    slug: 'car-detailing-london',
    metaTitle: 'Mobile Car Detailing in London | Professional Car Detailing Services',
    metaDescription:
      'Restore your vehicle with premium mobile car detailing in London. We offer interior cleaning, exterior polishing, paint protection and detailing services at your preferred location.',
    breadcrumb: 'Detailing & Protection',
    h1: 'Detailing and Protection Services in London',
    tagline: 'Professional Car Detailing and Vehicle Protection in London',
    intro:
      'Mostly Solutions offers professional mobile car detailing in London, from deep interior cleaning and paint correction to ceramic coating and long-lasting paint protection — carried out at your home or workplace.',
    sections: [
      {
        h2: 'Complete Mobile Car Detailing Services',
        paras: [
          'Our mobile car detailing in London restores your vehicle inside and out. We deep-clean interiors, hand-wash and decontaminate paintwork, and machine-polish to remove swirls and light scratches for a showroom finish.',
          'Every detail is carried out at your home or workplace using professional products and equipment, so you never have to drop your car off or wait around.',
        ],
      },
      {
        h2: 'Long Lasting Vehicle Protection',
        paras: [
          'Detailing is about protection as much as appearance. Our ceramic coating and paint protection treatments shield your paintwork from UV, road grime and contaminants, keeping it cleaner for longer and easier to maintain.',
          'We prepare the surface thoroughly with decontamination and paint correction before applying protection, ensuring the coating bonds correctly and lasts.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions',
        paras: [
          'Our detailing specialists are meticulous and fully mobile, bringing everything needed to transform your vehicle to your door. We treat every car as if it were our own.',
          'And because we are a complete mobile service, any mechanical work or auto electrical repairs your car needs can be handled by the same trusted team.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Interior deep cleaning',
      'Exterior hand wash',
      'Paint decontamination',
      'Paint correction',
      'Machine polishing',
      'Ceramic coating application',
      'Paint protection treatment',
      'Wheel and tyre cleaning',
      'Glass cleaning',
      'Trim restoration',
    ],
    ctaHeading: "Restore Your Vehicle's Appearance Today",
    faqs: [
      {
        q: 'What does a full mobile car detail include?',
        a: 'Our mobile car detailing in London includes interior deep cleaning, exterior hand washing, paint decontamination and correction, machine polishing, and glass, wheel and trim cleaning. Protection treatments can be added on request.',
      },
      {
        q: 'How long does ceramic coating last?',
        a: 'Depending on the product and how the car is maintained, a professionally applied ceramic coating typically lasts from two to five years, protecting your paintwork from UV, grime and contaminants.',
      },
      {
        q: 'Do you carry out detailing at my home?',
        a: 'Yes. All detailing and protection work is fully mobile and carried out at your home or workplace, using professional equipment and our own water and power where needed.',
      },
      {
        q: 'What is the difference between paint correction and polishing?',
        a: 'Polishing enhances gloss, while paint correction is a more thorough process that removes swirls, scratches and defects from the clear coat. We advise which your car needs after inspecting the paintwork.',
      },
      {
        q: 'Can you protect a brand-new car?',
        a: 'Absolutely. Applying ceramic coating and paint protection to a new car is one of the best times to do it, locking in that fresh finish. We prepare and protect the paint so it stays looking its best.',
      },
    ],
  },
  {
    slug: 'mobile-mechanic-reading-berkshire',
    metaTitle: 'Mobile Mechanic in Reading Berkshire | Mostly Solutions',
    metaDescription:
      'Professional mobile mechanic in Reading, Berkshire. We bring servicing, diagnostics, brake, suspension, exhaust and battery repairs to your home, workplace or roadside — no garage visit needed.',
    breadcrumb: 'Mobile Mechanic Reading',
    h1: 'Mobile Mechanic in Reading Berkshire',
    tagline: 'Professional Mobile Car Repairs Across Reading and Berkshire',
    intro:
      'When your car needs attention, getting it to a garage can be stressful and inconvenient. Mobile mechanic in Reading Berkshire services provide a practical solution by bringing professional vehicle repairs and maintenance directly to your home, workplace or suitable roadside location.',
    sections: [
      {
        h2: 'Professional Mobile Car Repairs in Reading',
        paras: [
          'At Mostly Solutions, we provide reliable mobile automotive services across Reading and surrounding areas. Our technicians can diagnose vehicle problems, carry out mechanical repairs and help get your car back on the road without the need for a traditional garage visit, using fully equipped vans and professional diagnostic equipment.',
          'Finding a dependable mobile mechanic in Reading Berks can save you valuable time. Instead of arranging recovery or waiting at a workshop, you can arrange for a technician to come to you.',
          'Our mobile services can help with a wide range of common vehicle problems, including brake issues, servicing, suspension repairs, exhaust problems, battery concerns and diagnostic checks. We can also investigate warning lights, starting problems and other faults affecting your vehicle.',
          'Whether your car has stopped working at home or you simply need convenient maintenance at your workplace, our mobile approach makes getting professional assistance easier.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions',
        paras: [
          'We focus on straightforward service, professional workmanship and clear communication. Our technicians use modern diagnostic equipment to identify faults and explain the required work before repairs are carried out. Our IMI certified technicians carry out repairs using OEM grade parts, backed by a 12 month warranty.',
          'Choosing a mobile mechanic means you can avoid unnecessary trips to a garage while receiving expert assistance at a location that suits you.',
        ],
      },
      {
        h2: 'Mobile Mechanic Services in Reading',
        paras: [
          'If you are searching for a mobile mechanic in Reading Berkshire for servicing, diagnostics or repairs, Mostly Solutions can help. We work with different makes and models and aim to provide a convenient service tailored to your vehicle’s needs.',
          'From routine maintenance to unexpected breakdown problems, our mobile technicians can assess the issue and advise you on the most suitable solution.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Vehicle servicing',
      'Brake repairs',
      'Suspension repairs',
      'Exhaust repairs',
      'Battery related work',
      'Diagnostic checks',
      'Warning light investigation',
      'Starting problem diagnosis',
      'General mechanical repairs',
      'Routine maintenance',
    ],
    ctaHeading: 'Book Your Mobile Mechanic in Reading',
    faqs: [
      {
        q: 'Can a mobile mechanic come to my home in Reading?',
        a: 'Yes. Mobile mechanics can provide services at suitable home, workplace or roadside locations, depending on the repair required.',
      },
      {
        q: 'What services can a mobile mechanic provide?',
        a: 'Common services include vehicle diagnostics, servicing, brake repairs, suspension work, exhaust repairs, battery related work and other mechanical repairs.',
      },
      {
        q: 'Do you provide mobile mechanic services across Reading?',
        a: 'Yes. Mostly Solutions provides mobile automotive services in Reading and the surrounding area.',
      },
      {
        q: 'How can I book a mobile mechanic?',
        a: 'Contact Mostly Solutions with your vehicle details and the problem you are experiencing. The team can discuss your requirements and arrange a suitable mobile appointment.',
      },
    ],
  },
  {
    slug: 'mobile-car-services-guildford',
    metaTitle: 'Mobile Car Services in Guildford | Mostly Solutions',
    metaDescription:
      'Professional mobile car services in Guildford — diagnostics, mechanical work, electrical and battery services, and detailing brought to your home, workplace or roadside.',
    breadcrumb: 'Guildford',
    h1: 'Mobile Car Services in Guildford',
    tagline: 'Professional Mobile Vehicle Care Across Guildford',
    intro:
      'Looking for a convenient and reliable way to take care of your vehicle? Mostly Solutions provides professional mobile car services in Guildford, bringing vehicle support directly to your home, workplace or another suitable location. Our services include mobile car diagnostics, mechanical work, electrical and battery services, and detailing and protection.',
    sections: [
      {
        h2: 'Mobile Car Diagnostics',
        paras: [
          'A dashboard warning light, starting problem or unusual vehicle behaviour can be a sign that your car needs attention. Our Mobile Car Diagnostics service helps identify potential faults using professional diagnostic equipment.',
          'We can investigate engine faults, warning lights, sensor problems and various electronic issues. A diagnostic check can help identify the cause of a problem before unnecessary repairs or part replacements are carried out.',
          'If you need car diagnostics in Guildford, our mobile service makes it easier to get your vehicle checked without making an unnecessary trip to a garage.',
        ],
      },
      {
        h2: 'Mechanical Work',
        paras: [
          'Mechanical problems can make everyday driving difficult and, in some cases, unsafe. Our Mechanical Work service provides assistance with suitable vehicle repairs and maintenance.',
          'We can help with various mechanical issues involving components such as brakes, suspension, engine and clutch systems. Our mobile approach means we can attend your vehicle at a convenient location, helping reduce the disruption caused by a garage visit.',
          'For customers looking for mobile mechanical services in Guildford, Mostly Solutions offers a practical and convenient option.',
        ],
      },
      {
        h2: 'Electrical and Batteries',
        paras: [
          "Electrical faults can affect your vehicle's ability to start and operate correctly. Battery problems, starting issues, warning lights and other electrical faults can occur without warning.",
          'Our Electrical & Batteries service provides professional assistance with suitable automotive electrical and battery related problems. If you need a car electrician in Guildford or are experiencing battery difficulties, our mobile service can provide convenient support.',
        ],
      },
      {
        h2: 'Detailing and Protection',
        paras: [
          "Your vehicle's appearance can deteriorate through regular use, road dirt and everyday wear. Our Detailing & Protection service helps keep your vehicle looking clean and well maintained.",
          'From interior cleaning to exterior care, professional detailing can improve the appearance of your vehicle and help maintain its condition. Whether you are preparing your car for sale or simply want to keep it looking its best, we can help.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions?',
        paras: [
          'Mostly Solutions provides a convenient approach to vehicle care. Instead of spending time arranging a garage visit, you can have suitable services carried out at a location that works for you.',
          'From diagnostics and mechanical work to electrical assistance, battery services and detailing, we provide practical automotive solutions for customers across Guildford.',
          'Contact Mostly Solutions today to discuss your vehicle requirements and arrange a convenient mobile service.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Engine & warning light diagnostics',
      'Sensor & electronic fault finding',
      'Brakes, suspension & clutch',
      'Servicing & maintenance',
      'Battery testing & replacement',
      'Alternator & starting faults',
      'Interior & exterior detailing',
      'Paint protection',
    ],
    ctaHeading: 'Book Mobile Car Services in Guildford',
    faqs: [
      {
        q: 'Do you provide mobile car diagnostics?',
        a: 'Yes. We provide mobile car diagnostics and can attend suitable locations to investigate potential vehicle faults.',
      },
      {
        q: 'Can you help with car electrical problems?',
        a: 'Yes. Our Electrical & Batteries service can assist with suitable electrical and battery related vehicle problems.',
      },
      {
        q: 'Do you offer mobile mechanical services?',
        a: 'Yes. We provide mobile mechanical assistance for suitable vehicle repairs and maintenance requirements.',
      },
      {
        q: 'Do you provide car detailing?',
        a: 'Yes. Our Detailing & Protection service helps maintain the interior and exterior appearance of your vehicle.',
      },
      {
        q: 'Do you cover Guildford?',
        a: 'Yes. Mostly Solutions provides mobile automotive services for customers in Guildford and surrounding areas.',
      },
    ],
  },
  {
    slug: 'mobile-car-services-oxford',
    metaTitle: 'Mobile Car Services in Oxford | Mostly Solutions',
    metaDescription:
      'Professional mobile car services in Oxford — diagnostics, mechanical work, electrical and battery services, and detailing brought to your home, workplace or roadside.',
    breadcrumb: 'Oxford',
    h1: 'Mobile Car Services in Oxford',
    tagline: 'Professional Mobile Vehicle Care Across Oxford',
    intro:
      'Looking for a convenient and reliable way to take care of your vehicle? Mostly Solutions provides professional mobile car services in Oxford, bringing vehicle support directly to your home, workplace or another suitable location. Our services include mobile car diagnostics, mechanical work, electrical and battery services, and detailing and protection.',
    sections: [
      {
        h2: 'Mobile Car Diagnostics',
        paras: [
          'A dashboard warning light, starting problem or unusual vehicle behaviour can be a sign that your car needs attention. Our Mobile Car Diagnostics service helps identify potential faults using professional diagnostic equipment.',
          'We can investigate engine faults, warning lights, sensor problems and various electronic issues. A diagnostic check can help identify the cause of a problem before unnecessary repairs or part replacements are carried out.',
          'If you need car diagnostics in Oxford, our mobile service makes it easier to get your vehicle checked without making an unnecessary trip to a garage.',
        ],
      },
      {
        h2: 'Mechanical Work',
        paras: [
          'Mechanical problems can make everyday driving difficult and, in some cases, unsafe. Our Mechanical Work service provides assistance with suitable vehicle repairs and maintenance.',
          'We can help with various mechanical issues involving components such as brakes, suspension, engine and clutch systems. Our mobile approach means we can attend your vehicle at a convenient location, helping reduce the disruption caused by a garage visit.',
          'For customers looking for mobile mechanical services in Oxford, Mostly Solutions offers a practical and convenient option.',
        ],
      },
      {
        h2: 'Electrical and Batteries',
        paras: [
          "Electrical faults can affect your vehicle's ability to start and operate correctly. Battery problems, starting issues, warning lights and other electrical faults can occur without warning.",
          'Our Electrical & Batteries service provides professional assistance with suitable automotive electrical and battery related problems. If you need a car electrician in Oxford or are experiencing battery difficulties, our mobile service can provide convenient support.',
        ],
      },
      {
        h2: 'Detailing and Protection',
        paras: [
          "Your vehicle's appearance can deteriorate through regular use, road dirt and everyday wear. Our Detailing & Protection service helps keep your vehicle looking clean and well maintained.",
          'From interior cleaning to exterior care, professional detailing can improve the appearance of your vehicle and help maintain its condition. Whether you are preparing your car for sale or simply want to keep it looking its best, we can help.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions?',
        paras: [
          'Mostly Solutions provides a convenient approach to vehicle care. Instead of spending time arranging a garage visit, you can have suitable services carried out at a location that works for you.',
          'From diagnostics and mechanical work to electrical assistance, battery services and detailing, we provide practical automotive solutions for customers across Oxford.',
          'Contact Mostly Solutions today to discuss your vehicle requirements and arrange a convenient mobile service.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Engine & warning light diagnostics',
      'Sensor & electronic fault finding',
      'Brakes, suspension & clutch',
      'Servicing & maintenance',
      'Battery testing & replacement',
      'Alternator & starting faults',
      'Interior & exterior detailing',
      'Paint protection',
    ],
    ctaHeading: 'Book Mobile Car Services in Oxford',
    faqs: [
      {
        q: 'Do you provide mobile car diagnostics?',
        a: 'Yes. We provide mobile car diagnostics and can attend suitable locations to investigate potential vehicle faults.',
      },
      {
        q: 'Can you help with car electrical problems?',
        a: 'Yes. Our Electrical & Batteries service can assist with suitable electrical and battery related vehicle problems.',
      },
      {
        q: 'Do you offer mobile mechanical services?',
        a: 'Yes. We provide mobile mechanical assistance for suitable vehicle repairs and maintenance requirements.',
      },
      {
        q: 'Do you provide car detailing?',
        a: 'Yes. Our Detailing & Protection service helps maintain the interior and exterior appearance of your vehicle.',
      },
      {
        q: 'Do you cover Oxford?',
        a: 'Yes. Mostly Solutions provides mobile automotive services for customers in Oxford and surrounding areas.',
      },
    ],
  },
  {
    slug: 'mobile-car-services-watford',
    metaTitle: 'Mobile Car Services in Watford | Mostly Solutions',
    metaDescription:
      'Professional mobile car services in Watford — diagnostics, mechanical work, electrical and battery services, and detailing brought to your home, workplace or roadside.',
    breadcrumb: 'Watford',
    h1: 'Mobile Car Services in Watford',
    tagline: 'Professional Mobile Vehicle Care Across Watford',
    intro:
      'Looking for a convenient way to get your vehicle checked, repaired or maintained? Mostly Solutions provides professional mobile car services in Watford, bringing reliable vehicle support directly to your home, workplace or another suitable location. Our services include mobile car diagnostics, mechanical work, electrical and battery services, and detailing and protection.',
    sections: [
      {
        h2: 'Mobile Car Diagnostics',
        paras: [
          'A warning light, starting issue or unusual vehicle behaviour can indicate an underlying problem. Our Mobile Car Diagnostics service helps identify potential faults using professional diagnostic equipment.',
          'We can investigate engine faults, warning lights, sensor issues and various electronic problems. Finding the cause of a fault can help you make an informed decision about the repairs your vehicle may require.',
          'If you need car diagnostics in Watford, our mobile service provides a convenient way to have your vehicle checked without the need for an unnecessary garage visit.',
        ],
      },
      {
        h2: 'Mechanical Work',
        paras: [
          "Mechanical problems can affect your vehicle's performance, reliability and safety. Our Mechanical Work service provides assistance with suitable vehicle repairs and maintenance.",
          'We can help with a range of mechanical issues involving components such as brakes, suspension, engine and clutch systems. Our mobile approach allows us to attend your vehicle at a convenient location, helping reduce the disruption caused by taking your car to a garage.',
          'For customers looking for mobile mechanical services in Watford, Mostly Solutions offers a practical solution.',
        ],
      },
      {
        h2: 'Electrical and Batteries',
        paras: [
          'Electrical and battery problems can happen without warning and may leave you unable to start or use your vehicle.',
          'Our Electrical & Batteries service provides assistance with suitable automotive electrical and battery related problems. If you need a car electrician in Watford, are experiencing starting difficulties or believe your battery needs attention, our mobile service can help.',
        ],
      },
      {
        h2: 'Detailing and Protection',
        paras: [
          "Regular driving exposes your vehicle to dirt, dust, road grime and everyday wear. Our Detailing & Protection service helps maintain your vehicle's interior and exterior appearance.",
          'Professional detailing can refresh the look of your car and help keep it in better condition. Whether you are preparing your vehicle for sale or simply want it looking its best, our detailing service provides convenient vehicle care.',
        ],
      },
      {
        h2: 'Why Choose Mostly Solutions?',
        paras: [
          'Mostly Solutions makes vehicle care more convenient by bringing suitable automotive services directly to you. Whether your vehicle needs diagnostics, mechanical assistance, electrical support, battery services or detailing, we aim to provide a straightforward and professional service.',
          'We provide mobile automotive solutions for customers across Watford and surrounding areas.',
          'Contact Mostly Solutions today to discuss your vehicle requirements and arrange a convenient service.',
        ],
      },
    ],
    checklistTitle: 'We can assist with',
    checklist: [
      'Engine & warning light diagnostics',
      'Sensor & electronic fault finding',
      'Brakes, suspension & clutch',
      'Servicing & maintenance',
      'Battery testing & replacement',
      'Alternator & starting faults',
      'Interior & exterior detailing',
      'Paint protection',
    ],
    ctaHeading: 'Book Mobile Car Services in Watford',
    faqs: [
      {
        q: 'Do you provide mobile car diagnostics?',
        a: 'Yes. We provide mobile car diagnostics and can attend suitable locations to investigate potential vehicle faults.',
      },
      {
        q: 'Can you help with car electrical problems?',
        a: 'Yes. Our Electrical & Batteries service can assist with suitable automotive electrical and battery related issues.',
      },
      {
        q: 'Do you offer mobile mechanical services?',
        a: 'Yes. We provide mobile mechanical assistance for suitable vehicle repairs and maintenance requirements.',
      },
      {
        q: 'Do you provide car detailing?',
        a: 'Yes. Our Detailing & Protection service helps maintain the appearance and condition of your vehicle.',
      },
      {
        q: 'Do you cover Watford?',
        a: 'Yes. Mostly Solutions provides mobile automotive services for customers in Watford and surrounding areas.',
      },
    ],
  },
]

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

// Builds the per-page metadata (title, description, canonical, Open Graph).
export function serviceMetadata(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  const url = `/services/${slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'website' as const,
      locale: 'en_GB',
    },
  }
}
