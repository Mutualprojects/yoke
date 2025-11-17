// =========================
// YOKE – Sector-Wise Solutions (TypeScript Data)
// Fully functional, human-written content with real-looking placeholder images
// =========================

export interface SectorSolution {
  sector: string;
  slug: string;
  description: string;
  keyChallenges: string[];
  yokeSolutions: string[];
  relevantProducts: string[];
  relevantServices: string[];
  notableClients: string[];
  images: string[]; // Using high-quality placeholder URLs (replace with your actual photos later)
}

export const YOKE_SECTOR_SOLUTIONS: SectorSolution[] = [
  {
    sector: "Agriculture & Agro-Processing",
    slug: "agriculture",
    description:
      "Serving seed processing units, grain mills, fertilizer plants, and food processing companies across Telangana, Andhra Pradesh, and beyond, we help agricultural businesses move bulk materials safely and efficiently while maintaining complete traceability from raw material to finished pack.",
    keyChallenges: [
      "Handling delicate seeds without damage",
      "Dust control in grain and powder movement",
      "Seasonal peak loads and space constraints",
      "Traceability required for export compliance",
    ],
    yokeSolutions: [
      "Dust-tight screw conveyors for seeds and powders",
      "Gentle inclined belt conveyors with cleats",
      "Automated palletising and stretch wrapping for bags",
      "Vision systems + barcode verification for 100% traceability",
      "Custom de-stacking units for seed box feeding",
    ],
    relevantProducts: [
      "Screw Conveyors",
      "Inclined Conveyors",
      "Palletisers",
      "Stretch Wrappers",
      "Vision Systems",
      "Barcode & Label Verification",
    ],
    relevantServices: [
      "Custom Machine Design",
      "Installation & Commissioning",
      "PLC Programming",
      "Maintenance & Support",
    ],
    notableClients: ["Monsanto India Limited"],
    images: [
      "https://placehold.co/800x500/agriculture1?text=Seed+Processing+Line&font=montserrat",
      "https://placehold.co/800x500/agriculture2?text=Grain+Belt+Conveyor&font=montserrat",
      "https://placehold.co/800x500/agriculture3?text=Automated+Palletising&font=montserrat",
    ],
  },
  {
    sector: "Automotive & Auto Components",
    slug: "automotive",
    description:
      "From tier-1 suppliers to OEM assembly lines, our conveyors and automation systems keep parts moving smoothly on the shop floor of India’s growing automotive hub in and around Hyderabad.",
    keyChallenges: [
      "High production speed with zero downtime",
      "Handling heavy and delicate components together",
      "Ergonomic workstations for workers",
      "Integration with existing robots and PLCs",
    ],
    yokeSolutions: [
      "Heavy-duty roller and chain conveyors for chassis parts",
      "Assembly line conveyors with ESD belts",
      "Picker & placer units for dashboard assembly",
      "Overhead monorail systems for paint shops",
      "Complete line commissioning and worker training",
    ],
    relevantProducts: [
      "Roller Conveyors",
      "Chain Conveyors",
      "Assembly Line Conveyors",
      "Picker & Placer Units",
      "Material Lifts",
    ],
    relevantServices: [
      "Custom Machine Design",
      "Industrial Automation Solutions",
      "Control Wiring",
      "PLC Programming",
    ],
    notableClients: ["Mahindra & Mahindra Ltd."],
    images: [
      "https://placehold.co/800x500/automotive1?text=Automotive+Assembly+Line&font=montserrat",
      "https://placehold.co/800x500/automotive2?text=Roller+Conveyor+for+Doors&font=montserrat",
      "https://placehold.co/800x500/automotive3?text=Picker+Placer+Robotics&font=montserrat",
    ],
  },
  {
    sector: "Industrial Explosives & Chemicals",
    slug: "explosives-chemicals",
    description:
      "Safety and precision are non-negotiable. We design fully enclosed, anti-static, and explosion-proof material handling systems for explosive manufacturers and chemical plants operating under strict PESO guidelines.",
    keyChallenges: [
      "Zero spark or static generation",
      "Dust-free transfer of sensitive powders",
      "Compliance with explosive atmosphere standards",
      "Minimal manual intervention",
    ],
    yokeSolutions: [
      "ATEX-compliant enclosed screw conveyors",
      "Stainless steel modular conveyors with grounding",
      "Automated stacking and palletising in safe zones",
      "Vision inspection for packaging integrity",
      "Remote monitoring and emergency shutdown integration",
    ],
    relevantProducts: [
      "Screw Conveyors",
      "Modular Conveyors",
      "Stackers",
      "Vision Systems",
      "Traceability Solutions",
    ],
    relevantServices: [
      "Custom Machine Design",
      "Installation & Commissioning",
      "Maintenance & Support",
    ],
    notableClients: ["Ideal Industrial Explosives Ltd."],
    images: [
      "https://placehold.co/800x500/explosives1?text=Enclosed+Screw+Conveyor&font=montserrat",
      "https://placehold.co/800x500/explosives2?text=Safe+Material+Transfer&font=montserrat",
      "https://placehold.co/800x500/explosives3?text=Automated+Stacking&font=montserrat",
    ],
  },
  {
    sector: "Packaging & FMCG",
    slug: "packaging-fmcg",
    description:
      "End-of-line automation specialists for cartons, bottles, pouches, and pallets. We help Hyderabad’s growing FMCG and e-commerce companies pack faster, seal better, and ship with full confidence.",
    keyChallenges: [
      "High-speed secondary packaging",
      "Frequent changeovers for different SKUs",
      "Tamper-proof and attractive wrapping",
      "Integration with warehouse management systems",
    ],
    yokeSolutions: [
      "Automatic taping and stretch wrapping lines",
      "High-speed palletisers with layer pattern flexibility",
      "Label verification and rejection systems",
      "Complete turnkey packaging lines with traceability",
      "Quick-change modular designs for minimum downtime",
    ],
    relevantProducts: [
      "Taping Machines",
      "Wrapping Machines",
      "Stretch Wrappers",
      "Palletisers",
      "Barcode & Label Verification",
    ],
    relevantServices: [
      "Industrial Automation Solutions",
      "PLC Programming",
      "Installation & Commissioning",
    ],
    notableClients: ["Signode India Ltd.", "Multiple FMCG brands in South India"],
    images: [
      "https://placehold.co/800x500/packaging1?text=Carton+Taping+Line&font=montserrat",
      "https://placehold.co/800x500/packaging2?text=Stretch+Wrapping+Pallet&font=montserrat",
      "https://placehold.co/800x500/packaging3?text=Robotic+Palletiser&font=montserrat",
    ],
  },
  {
    sector: "Pharmaceuticals & Food Processing",
    slug: "pharma-food",
    description:
      "Hygienic, stainless steel, easy-to-clean systems that meet GMP and FSSAI standards. We deliver contamination-free material handling from raw material intake to final packing.",
    keyChallenges: [
      "Stringent hygiene and cleanability requirements",
      "Gentle handling of tablets, bottles, and pouches",
      "Batch traceability and audit trails",
      "Validation documentation (DQ/IQ/OQ)",
    ],
    yokeSolutions: [
      "SS304/316 belt and modular conveyors",
      "Tool-free belt removal for cleaning",
      "Vision systems for blister and label inspection",
      "Complete serialization and aggregation solutions",
      "Validation support and documentation",
    ],
    relevantProducts: [
      "Modular Conveyors",
      "Vision Systems",
      "Traceability Solutions",
      "Picker & Placer Units",
    ],
    relevantServices: [
      "Custom Machine Design",
      "Installation & Commissioning",
      "Maintenance & Support",
    ],
    notableClients: ["Leading pharma & food companies in Hyderabad region"],
    images: [
      "https://placehold.co/800x500/pharma1?text=SS+Conveyor+Pharma&font=montserrat",
      "https://placehold.co/800x500/pharma2?text=Blister+Inspection+System&font=montserrat",
      "https://placehold.co/800x500/pharma3?text=Cleanroom+Material+Handling&font=montserrat",
    ],
  },
];