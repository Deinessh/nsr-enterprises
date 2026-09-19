export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyFeatures: string[];
  applications: string[];
}

export interface MaterialOption {
  id: string;
  name: string;
  tagline: string;
  durability: string;
  installationSpeed: string;
  maintenance: string;
  bestFor: string;
  weight: string;
  waterproofRating: string;
  description: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "NSR Enterprises",
  subTagline: "Greenway Build & Bio Solutions",
  tagline: "Smarter Sewage Solutions. Cleaner Future.",
  shortDescription: "NSR Enterprises is Tamil Nadu's leading environmental sanitation provider specializing in non-filling bio septic tanks, sewage treatment systems, and sustainable wastewater management.",
  vision: "Our goal is to provide a pollution-free, green environment & clean groundwater through lifelong sewage treatment solutions for both commercial and residential projects.",
  phone: "+91 82481 27235",
  phoneRaw: "918248127235",
  email: "info@nsrenterprises.in",
  address: "No. 32, Muthuvel Nagar, Urapakkam, Chengalpattu – 603210, Tamil Nadu, India",
  whatsappMsg: "Hi NSR Enterprises! I am interested in getting a consultation for a Bio Septic Tank / Sewage Solution.",
  googleMapsUrl: "https://maps.google.com/maps?q=No.+32,+Muthuvel+Nagar,+Urapakkam,+Chengalpattu+603210,+Tamil+Nadu,+India&t=&z=16&ie=UTF8&iwloc=&output=embed",
  facebookUrl: "https://www.facebook.com/share/1A2yiF3TeP/",
  instagramUrl: "https://www.instagram.com/nsr_enterprises?utm_source=qr&igsh=MTF2MG9tdmhvZjllYw==",
  locationAreas: ["Urapakkam", "Chengalpattu", "Tambaram", "Chennai", "Kanchipuram", "All Tamil Nadu"],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bio-septic-tank",
    number: "01",
    title: "Bio Septic Tank",
    shortDesc: "Eco-friendly, non-filling anaerobic digester tanks requiring no frequent lorry pumping.",
    fullDesc: "Our flagship Bio Septic Tank utilizes multi-chamber anaerobic biological digestion. Microorganisms naturally break down organic human waste into clean water and odorless effluent, eliminating the constant need for expensive vacuum lorry evacuations.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/155-420x380.jpg",
    keyFeatures: [
      "99% organic waste decomposition via anaerobic bacteria",
      "Non-filling technology — eliminates periodic lorry cleaning costs",
      "Prevents soil and groundwater contamination",
      "Odorless, maintenance-free continuous operation"
    ],
    applications: ["Independent Houses", "Apartment Complexes", "Gated Communities", "Resorts"]
  },
  {
    id: "sewage-treatment",
    number: "02",
    title: "Sewage Treatment (STP)",
    shortDesc: "Turnkey decentralized sewage treatment plants for residential and commercial buildings.",
    fullDesc: "NSR Enterprises designs compact, efficient Decentralized Sewage Treatment Plants (STP) engineered to process high volumes of blackwater and greywater. Output water meets strict environmental discharge norms and can be reused for flushing or gardening.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/82f460c1c174e41ff8238e205bdbf458-420x380.jpg",
    keyFeatures: [
      "Decentralized compact design requiring minimal footprint",
      "Produces clear reusable water for secondary applications",
      "Low power consumption aeration options available",
      "Compliant with Tamil Nadu Pollution Control Board norms"
    ],
    applications: ["Commercial Buildings", "Hospitals", "Educational Institutions", "Hotels"]
  },
  {
    id: "waste-water-treatment",
    number: "03",
    title: "Wastewater Treatment",
    shortDesc: "Comprehensive effluent and greywater purification solutions for industrial scale.",
    fullDesc: "Specialized wastewater treatment systems tailored for commercial laundries, food processing units, and industrial facilities. Removes suspended solids, heavy organic loads, and oils prior to safe environmental disposal.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/f2312afa897f1d53a452453f45d8658a-420x380.jpg",
    keyFeatures: [
      "Custom chemical bio-culture biological dosing",
      "High chemical oxygen demand (COD) & BOD reduction",
      "Heavy-duty filtration and settling stages",
      "Tailored for industrial scale operations"
    ],
    applications: ["Industrial Factories", "Textile & Processing", "Vehicle Wash Units", "Restaurants"]
  },
  {
    id: "rcc-bio-septic-tank",
    number: "04",
    title: "RCC Concrete Bio Septic Tank",
    shortDesc: "Reinforced cement concrete bio tanks engineered for heavy load-bearing & longevity.",
    fullDesc: "Built with high-grade reinforced concrete, RCC Bio Septic Tanks are ideal for installations under driveways, parking zones, or heavy vehicle areas. Provides robust structural integrity alongside superior bio-digestion technology.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/a0933338bbf7356f0b8c4a68cce4bc46-420x380.jpg",
    keyFeatures: [
      "High compressive strength suitable for driveway installation",
      "Pre-cast modular or cast-in-place options",
      "50+ year structural lifespan",
      "Custom high-capacity designs (5000L to 50,000L+)"
    ],
    applications: ["High-rise Buildings", "Driveways", "Industrial Parks", "Public Utilities"]
  },
  {
    id: "frp-bio-septic-tank",
    number: "05",
    title: "FRP Bio Septic Tank",
    shortDesc: "Fiberglass Reinforced Plastic tanks offering 100% rustproof & leakproof rapid setup.",
    fullDesc: "FRP (Fiberglass Reinforced Polymer) bio septic tanks combine extreme chemical corrosion resistance with lightweight ease of installation. Perfect for high water table locations or coastal soil conditions.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/d86d6d037512b455ca3f5dbd353fdcb9-420x380.jpg",
    keyFeatures: [
      "100% leakproof, seamless monolithic construction",
      "Zero corrosion in acidic soil or saline groundwater",
      "Lightweight for rapid 1-day installation",
      "High mechanical impact strength"
    ],
    applications: ["Coastal Properties", "High Groundwater Areas", "Rapid Construction Sites"]
  },
  {
    id: "pvc-bio-septic-tank",
    number: "06",
    title: "PVC Bio Septic Tank",
    shortDesc: "Cost-effective, highly durable engineered polymer bio septic tanks for residential homes.",
    fullDesc: "Crafted from UV-stabilized heavy-duty polymer materials, PVC Bio Septic Tanks provide a budget-friendly yet highly efficient sanitation solution for individual homes and small commercial setups.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/3a9a1bb31816152478e54615b77e9aa3-420x380.jpg",
    keyFeatures: [
      "Economical pricing with premium performance",
      "Compact footprint suited for tight residential plots",
      "Resistant to roots, soil microbes, and domestic chemicals",
      "Simple plug-and-play inlet/outlet connections"
    ],
    applications: ["Individual Houses", "Villas", "Farmhouses", "Small Offices"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Residential Bio Septic Tank Installation",
    category: "Residential",
    location: "Urapakkam, Chengalpattu",
    capacity: "2,500 Litres FRP Bio Digester",
    description: "Completed turnkey installation of a 2,500L Fiberglass Bio Septic Tank for an independent villa. Replaced an overflowing traditional tank, permanently eliminating suction lorry expenses.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/155-420x380.jpg",
    highlights: ["1-Day Excavation & Fitting", "Zero Odor Output", "100% Groundwater Protection"]
  },
  {
    id: "proj-2",
    title: "Apartment Complex Sewage Treatment Plant",
    category: "Commercial",
    location: "Tambaram, Chennai",
    capacity: "10,000 Litres Decentralized STP",
    description: "Engineered and commissioned a compact multi-stage biological sewage treatment plant for a 32-unit residential gated community. Recycles effluent for garden irrigation.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/82f460c1c174e41ff8238e205bdbf458-420x380.jpg",
    highlights: ["Pollution Board Approved", "Secondary Filtered Recycled Water", "Low Power Aeration"]
  },
  {
    id: "proj-3",
    title: "Industrial Facility Heavy-Duty RCC Tank",
    category: "Industrial",
    location: "Kanchipuram Industrial Zone",
    capacity: "25,000 Litres RCC Concrete System",
    description: "Installed a heavy-load bearing reinforced concrete bio-digester under the main vehicular driveway for a manufacturing plant supporting 200+ staff.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/a0933338bbf7356f0b8c4a68cce4bc46-420x380.jpg",
    highlights: ["Driveway Heavy Vehicle Load Bearing", "High COD/BOD Decomposition", "50+ Year Structural Life"]
  },
  {
    id: "proj-4",
    title: "Gated Villa Layout Eco Sanitation",
    category: "Residential",
    location: "Guduvanchery, Chengalpattu",
    capacity: "5,000 Litres RCC Bio Septic Tank",
    description: "Designed a centralized bio septic tank system for a cluster of eco-friendly villas. Guaranteed zero contamination to private borewell groundwater.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/Untitled-design-12-1024x1024.png",
    highlights: ["Centralized Multi-Villa Digestion", "Borewell Safety Guaranteed", "Zero Lorry Maintenance"]
  },
  {
    id: "proj-5",
    title: "Beach Resort FRP Corrosion-Proof Project",
    category: "Commercial",
    location: "Mahabalipuram Coastal Belt",
    capacity: "7,500 Litres FRP Tank",
    description: "Installed corrosion-resistant FRP bio digester tanks in high saline groundwater soil conditions, ensuring long-term resort sanitation without rust or leakage.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/d86d6d037512b455ca3f5dbd353fdcb9-420x380.jpg",
    highlights: ["Saline Groundwater Proof", "100% Seamless Monolithic Tank", "Eco-Resort Sanitation"]
  },
  {
    id: "proj-6",
    title: "Educational Institution Bio Digester Upgrade",
    category: "Commercial",
    location: "Chengalpattu District",
    capacity: "15,000 Litres Modular System",
    description: "Upgraded conventional failing septic pits at a local educational campus to high-capacity biological bio septic digesters with bio-culture dosing.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/3a9a1bb31816152478e54615b77e9aa3-420x380.jpg",
    highlights: ["150+ Daily Campus Users", "Zero Foul Smell", "Turnkey Commissioning"]
  }
];

export const MATERIAL_COMPARISON: MaterialOption[] = [
  {
    id: "rcc",
    name: "RCC Concrete Bio Tank",
    tagline: "Maximum Structural Strength & Heavy Load Capacity",
    durability: "50+ Years (Extreme)",
    installationSpeed: "2 - 4 Days",
    maintenance: "Near Zero",
    bestFor: "Driveways, Parking Areas & High-Capacity Facilities",
    weight: "Heavy (Crane Required)",
    waterproofRating: "High (Waterproof Sealed Joints)",
    description: "Reinforced Cement Concrete (RCC) bio tanks are built for permanence and extreme structural loads. Capable of supporting vehicle weight overhead while maintaining multi-chamber bio digestion underground.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/a0933338bbf7356f0b8c4a68cce4bc46-420x380.jpg"
  },
  {
    id: "frp",
    name: "FRP Fiberglass Bio Tank",
    tagline: "Corrosion-Proof & Rapid 1-Day Underground Setup",
    durability: "35+ Years (High Corrosion Resistance)",
    installationSpeed: "1 Day (Rapid)",
    maintenance: "Zero Maintenance",
    bestFor: "High Water Tables, Coastal Soils & Quick Turnaround",
    weight: "Lightweight (Easy Handling)",
    waterproofRating: "100% Monolithic Leakproof",
    description: "Fiberglass Reinforced Plastic (FRP) tanks are impervious to acidic soils, saline groundwater, and harsh domestic chemicals. Light enough for easy transportation and rapid single-day excavation installation.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/d86d6d037512b455ca3f5dbd353fdcb9-420x380.jpg"
  },
  {
    id: "pvc",
    name: "PVC Engineered Polymer Tank",
    tagline: "Cost-Effective & Compact Residential Solution",
    durability: "25+ Years",
    installationSpeed: "1 Day",
    maintenance: "Low",
    bestFor: "Independent Houses, Small Plot Sizes & Budget Projects",
    weight: "Very Light",
    waterproofRating: "100% Seamless Poly",
    description: "Engineered UV-resistant polymer PVC bio tanks deliver high performance at an accessible investment level. Ideal for individual homes looking to permanently eliminate traditional septic cleaning lorries.",
    image: "https://nsrenterprises.in/wp-content/uploads/2025/01/3a9a1bb31816152478e54615b77e9aa3-420x380.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "What is a Bio Septic Tank and how does it work?",
    answer: "A Bio Septic Tank is a multi-chambered underground sewage treatment chamber that uses anaerobic bacteria (bacteria that thrive without oxygen) to convert human excreta and organic wastewater into clear, odorless water and harmless gases. Unlike traditional septic tanks, organic waste is digested biologically, meaning the tank does not fill up with thick sludge."
  },
  {
    category: "Comparison",
    question: "How is a Bio Septic Tank different from a traditional septic tank?",
    answer: "Traditional septic tanks only store sewage solids, requiring frequent (and smelly) pumping by suction lorries every few months or years. A Bio Septic Tank actively treats and decomposes 99% of organic waste inside the tank using bio-culture bacteria, eliminating the need for periodic lorry cleaning while protecting surrounding groundwater from contamination."
  },
  {
    category: "Sizing",
    question: "What capacity Bio Septic Tank do I need for my property?",
    answer: "Capacity depends on the number of daily users and property type. Typical sizes include 1,000 Litres (suited for 4-8 residents), 5,000 Litres (suited for 20-40 users or small commercial setups), and 10,000+ Litres (designed for 100+ users, apartment complexes, or industrial sites). You can use our online Capacity Calculator or contact our engineers for a custom site sizing recommendation."
  },
  {
    category: "Materials",
    question: "Should I choose RCC Concrete, FRP, or PVC Bio Septic Tank?",
    answer: "Choose RCC Concrete if the tank is installed under a driveway or parking space where heavy vehicles pass overhead. Choose FRP (Fiberglass) for rapid 1-day installation, high groundwater conditions, or coastal locations where corrosion resistance is essential. Choose PVC Polymer for cost-effective residential home setups with standard backyard placement."
  },
  {
    category: "Maintenance",
    question: "Does a Bio Septic Tank require periodic bio-culture topping up?",
    answer: "NSR Enterprises bio septic tanks are charged with high-potency bio-culture bacteria during initial commissioning. Under normal operating conditions, the bacteria colony naturally reproduces and self-sustains continuously. Minimal periodic maintenance or chemical dosing is only required if high amounts of harsh industrial bleach are flushed into the system."
  },
  {
    category: "Consultation",
    question: "How do I get a quote or schedule a site inspection in Tamil Nadu?",
    answer: "Simply call or WhatsApp NSR Enterprises at +91 82481 27235 or fill out our online consultation form. Our engineering team provides free site assessment and customized recommendations across Urapakkam, Chengalpattu, Chennai, and surrounding regions."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Wastewater Inflow",
    subtitle: "Inlet Collection",
    desc: "Domestic blackwater from toilets and greywater from drains enters the primary sedimentation chamber of the sealed bio tank."
  },
  {
    step: "02",
    title: "Anaerobic Digestion",
    subtitle: "Biological Decomposition",
    desc: "Specially formulated anaerobic bacterial bio-culture breaks down organic solids, fats, and proteins into simple compounds without oxygen."
  },
  {
    step: "03",
    title: "Filtration & Clarification",
    subtitle: "Pathogen Elimination",
    desc: "Water moves through secondary baffle chambers where remaining suspended particles settle, clarifying the liquid phase."
  },
  {
    step: "04",
    title: "Clean Effluent Discharge",
    subtitle: "Eco-Friendly Output",
    desc: "Treated, odorless water exits safely into soak pits or secondary irrigation systems, leaving groundwater 100% clean and unpolluted."
  }
];

export const TAMIL_SUMMARY = {
  title: "பயோ செப்டிக் டேங்க் பற்றிய தகவல்கள் (Bio Septic Tank in Tamil)",
  content: "பயோ செப்டிக் டேங்க் என்பது, கழிவுநீரை சுத்திகரிக்கும் ஒரு நீர்ப்புகா அறை ஆகும். இதில், பாக்டீரியாக்கள் ஆக்ஸிஜன் இல்லாமல் கழிவுநீரில் இருந்து கரிம கழிவுகளை உடைக்கின்றன. இதன் மூலம் கழிவுநீர் முழுமையாக சுத்திகரிக்கப்பட்டு நிலத்தடி நீர் பாதுகாக்கப்படுகிறது. லாரி வைத்து அடிக்கடி செப்டிக் டேங்க் சுத்தம் செய்யும் சிரமம் இனி இல்லை."
};

/**
 * Builds formatted WhatsApp redirection URL with pre-filled enquiry parameters
 */
export function buildWhatsAppLink(data: {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  propertyType?: string;
  requirement: string;
  message?: string;
}): string {
  const text = `*NEW ENQUIRY - NSR ENTERPRISES*
---------------------------------------
• *Requirement:* ${data.requirement}
• *Name:* ${data.name}
• *Phone:* ${data.phone}
${data.email ? `• *Email:* ${data.email}\n` : ''}${data.location ? `• *Location:* ${data.location}\n` : ''}${data.propertyType ? `• *Property Type:* ${data.propertyType}\n` : ''}${data.message ? `• *Details:* ${data.message}\n` : ''}---------------------------------------
Please provide quotation and site survey schedule.`;

  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}
