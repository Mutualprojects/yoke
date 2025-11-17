// =========================
// YOKE – Products & Services TS Data (Expanded)
// =========================
// This is an expanded version of the original YOKE_DATA, with added fields for each item:
// - title: A human-readable title (same as name for consistency).
// - description: A detailed, human-written paragraph describing the product/service, tailored for a local Hyderabad-based company.
// - features: An array of 4-6 key features, written in natural, professional language.
// - image: A dummy placeholder image URL (using placehold.co for simplicity; replace with real images in production).

export interface ExtendedProductItem {
  title: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
}

export interface ExtendedProductCategory {
  category: string;
  items: ExtendedProductItem[];
}

export interface ExtendedServiceItem {
  title: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
}

export interface ExtendedYokeData {
  products: ExtendedProductCategory[];
  services: ExtendedServiceItem[];
}

export const EXTENDED_YOKE_DATA: ExtendedYokeData = {
  // =========================
  // 📦 PRODUCTS (Manufacturing & Supply)
  // =========================
  products: [
    {
      category: "Conveying Systems",
      items: [
        {
          title: "Belt Conveyors",
          name: "Belt Conveyors",
          slug: "belt-conveyors",
          description: "As a proud Hyderabad-based manufacturer, we specialize in belt conveyors that are built tough for the demands of Indian industries. These systems efficiently transport materials across your facility, whether it's bulk goods in warehouses or components in assembly lines. Our designs focus on reliability, low maintenance, and seamless integration with existing setups, helping local businesses streamline operations without breaking the bank.",
          features: [
            "Durable rubber or PVC belts for heavy-duty use",
            "Customizable lengths and widths to fit your space",
            "Energy-efficient motors that reduce operational costs",
            "Easy integration with sensors for automated control",
            "Corrosion-resistant frames suitable for humid environments",
            "Quick installation with minimal downtime",
          ],
          image: "https://placehold.co/600x400?text=Belt+Conveyors&font=raleway",
        },
        {
          title: "Roller Conveyors",
          name: "Roller Conveyors",
          slug: "roller-conveyors",
          description: "Our roller conveyors are a staple in Hyderabad's bustling logistics scene, designed to move packages and pallets smoothly with gravity or powered assistance. Perfect for e-commerce warehouses or manufacturing plants, these systems cut down on manual labor and boost throughput. We use high-quality materials sourced locally to ensure they're robust and cost-effective for small to medium enterprises.",
          features: [
            "Gravity-fed or motorized options for flexibility",
            "Sturdy steel rollers that handle up to 500kg loads",
            "Modular design for easy expansion or reconfiguration",
            "Low-friction bearings for smooth, quiet operation",
            "Safety guards to prevent accidents in busy workspaces",
            "Affordable pricing tailored for Indian markets",
          ],
          image: "https://placehold.co/600x400?text=Roller+Conveyors&font=raleway",
        },
        {
          title: "Chain Conveyors",
          name: "Chain Conveyors",
          slug: "chain-conveyors",
          description: "Chain conveyors from our Hyderabad workshop are engineered for heavy lifting in tough environments like automotive or food processing plants. They handle irregular loads with ease, using strong chains that pull materials along tracks. We've optimized them for energy efficiency and longevity, making them a smart choice for businesses looking to automate without overseas imports.",
          features: [
            "High-tensile steel chains for maximum strength",
            "Variable speed controls for precise material flow",
            "Lubrication-free options to reduce maintenance",
            "Custom track layouts for complex factory floors",
            "Integrated with PLC for smart automation",
            "Built to withstand high temperatures and dust",
          ],
          image: "https://placehold.co/600x400?text=Chain+Conveyors&font=raleway",
        },
        {
          title: "Modular Conveyors",
          name: "Modular Conveyors",
          slug: "modular-conveyors",
          description: "In the heart of Hyderabad, we craft modular conveyors that adapt as your business grows. These plug-and-play systems use interchangeable parts for quick setup and modifications, ideal for dynamic industries like pharmaceuticals or electronics. Our focus on local innovation means you get customizable, reliable solutions that evolve with your needs.",
          features: [
            "Interlocking modules for easy assembly and changes",
            "Lightweight aluminum frames for portability",
            "Compatible with various belt types and accessories",
            "Scalable from small setups to large networks",
            "Low noise levels for comfortable work environments",
            "Eco-friendly materials with recyclable components",
          ],
          image: "https://placehold.co/600x400?text=Modular+Conveyors&font=raleway",
        },
        {
          title: "Inclined Conveyors",
          name: "Inclined Conveyors",
          slug: "inclined-conveyors",
          description: "Our inclined conveyors are designed right here in Hyderabad to tackle vertical material movement in multi-level facilities. Whether elevating grains in agro-processing or parts in assembly, these systems prevent slippage with textured belts and secure cleats. We prioritize safety and efficiency, helping local manufacturers optimize space and reduce labor costs.",
          features: [
            "Adjustable incline angles up to 45 degrees",
            "Cleated belts to secure loads during ascent",
            "Robust motors for continuous uphill operation",
            "Side guards to prevent material spillage",
            "Compact design for space-constrained areas",
            "Easy cleaning features for hygiene-sensitive industries",
          ],
          image: "https://placehold.co/600x400?text=Inclined+Conveyors&font=raleway",
        },
        {
          title: "Screw Conveyors",
          name: "Screw Conveyors",
          slug: "screw-conveyors",
          description: "Screw conveyors from our Hyderabad facility excel at handling powders, granules, and viscous materials in industries like cement or chemicals. The helical screw design ensures consistent flow in enclosed tubes, minimizing dust and contamination. As a local player, we offer tailored solutions that are affordable and quick to deploy for Indian operations.",
          features: [
            "Enclosed tubing for dust-free transport",
            "Variable pitch screws for optimized flow rates",
            "Stainless steel construction for corrosion resistance",
            "Horizontal, inclined, or vertical configurations",
            "Low power consumption for cost savings",
            "Simple disassembly for maintenance",
          ],
          image: "https://placehold.co/600x400?text=Screw+Conveyors&font=raleway",
        },
        {
          title: "Assembly Line Conveyors",
          name: "Assembly Line Conveyors",
          slug: "assembly-line-conveyors",
          description: "Tailored for Hyderabad's growing manufacturing sector, our assembly line conveyors keep production flowing smoothly. They synchronize worker stations with precise speed control, boosting efficiency in electronics or appliance assembly. We build them with local expertise to ensure they're durable, user-friendly, and integrated with modern automation tech.",
          features: [
            "Ergonomic design for worker comfort",
            "Synchronized belts for timed assembly processes",
            "Integration with robotic arms and sensors",
            "Modular stations for flexible workflows",
            "Emergency stop features for safety",
            "High uptime with reliable components",
          ],
          image: "https://placehold.co/600x400?text=Assembly+Line+Conveyors&font=raleway",
        },
      ],
    },
    {
      category: "Packaging Machines",
      items: [
        {
          title: "Taping Machines",
          name: "Taping Machines",
          slug: "taping-machines",
          description: "Our taping machines, manufactured in Hyderabad, automate carton sealing for fast-paced packaging lines. They apply adhesive tape precisely and consistently, reducing errors and speeding up shipments. Ideal for e-commerce and FMCG sectors, these machines are built with simple controls for easy operation by local teams.",
          features: [
            "Automatic tape dispensing and cutting",
            "Adjustable for various box sizes",
            "High-speed operation up to 30 boxes per minute",
            "Durable construction for 24/7 use",
            "Low tape waste for cost efficiency",
            "User-friendly interface with minimal training needed",
          ],
          image: "https://placehold.co/600x400?text=Taping+Machines&font=raleway",
        },
        {
          title: "Wrapping Machines",
          name: "Wrapping Machines",
          slug: "wrapping-machines",
          description: "From our Hyderabad base, we provide wrapping machines that secure products with shrink or stretch film for protection during transit. These are essential for food, beverage, and consumer goods industries, ensuring tamper-proof packaging. Our designs emphasize energy savings and quick changeovers to keep your lines running efficiently.",
          features: [
            "Heat-sealing for tight, secure wraps",
            "Variable film tension controls",
            "Compatible with multiple film types",
            "Automated feeding for high volume",
            "Safety interlocks to protect operators",
            "Compact footprint for small factories",
          ],
          image: "https://placehold.co/600x400?text=Wrapping+Machines&font=raleway",
        },
        {
          title: "Stretch Wrappers",
          name: "Stretch Wrappers",
          slug: "stretch-wrappers",
          description: "Stretch wrappers crafted in Hyderabad stabilize pallet loads with elastic film, preventing shifts during shipping. Perfect for warehouses dealing with exports, they automate the wrapping process to save time and labor. We focus on robust builds that handle India's diverse climates, offering value to local logistics firms.",
          features: [
            "Rotary arm or turntable options",
            "Pre-stretch film for material savings",
            "Programmable wrap patterns for consistency",
            "Load cells for precise tension",
            "Mobile models for flexible use",
            "Easy maintenance with accessible parts",
          ],
          image: "https://placehold.co/600x400?text=Stretch+Wrappers&font=raleway",
        },
      ],
    },
    {
      category: "Material Handling Automation",
      items: [
        {
          title: "Stackers",
          name: "Stackers",
          slug: "stackers",
          description: "Our stackers, designed and built in Hyderabad, automate the piling of boxes or pallets to optimize storage space. They're a boon for warehouses facing space crunch in urban areas, with hydraulic lifts that handle heavy loads safely. We incorporate smart sensors for precision, helping businesses scale without extra manpower.",
          features: [
            "Hydraulic or electric lifting mechanisms",
            "Capacity up to 2 tons for industrial use",
            "Automatic alignment for neat stacks",
            "Battery-powered for cordless operation",
            "Anti-tip safety features",
            "Custom heights to match your racking",
          ],
          image: "https://placehold.co/600x400?text=Stackers&font=raleway",
        },
        {
          title: "De-Stackers",
          name: "De-Stackers",
          slug: "de-stackers",
          description: "De-stackers from our Hyderabad facility efficiently unpack stacked items for feeding into production lines. Ideal for bottling or packaging operations, they reduce manual handling and minimize damage. Our local engineering ensures they're reliable and adaptable to various product shapes and sizes.",
          features: [
            "Gentle handling to avoid product damage",
            "Adjustable speeds for different throughput",
            "Sensor-based detection for empty stacks",
            "Integration with conveyors",
            "Sturdy build for continuous shifts",
            "Low energy use for sustainable ops",
          ],
          image: "https://placehold.co/600x400?text=De-Stackers&font=raleway",
        },
        {
          title: "Picker & Placer Units",
          name: "Picker & Placer Units",
          slug: "picker-placer",
          description: "Picker and placer units, proudly made in Hyderabad, use robotic arms to pick items from one spot and place them elsewhere with pinpoint accuracy. Great for assembly or sorting in electronics and pharma, they speed up processes while reducing errors. We design them for easy programming, suiting small-scale manufacturers.",
          features: [
            "Vacuum or gripper end-effectors",
            "High-speed cycles up to 100 picks/min",
            "Vision-guided for accurate placement",
            "Compact design for tight spaces",
            "User-programmable via touchscreen",
            "Fail-safe mechanisms for reliability",
          ],
          image: "https://placehold.co/600x400?text=Picker+Placer+Units&font=raleway",
        },
        {
          title: "Lifts",
          name: "Lifts",
          slug: "material-lifts",
          description: "Material lifts from our Hyderabad workshop provide safe vertical transport for goods in multi-story facilities. Whether for construction sites or factories, they handle heavy loads with ease, featuring platforms that ensure stability. Our focus on local needs means durable, weather-resistant builds at competitive prices.",
          features: [
            "Scissor or telescopic lift designs",
            "Load capacities from 500kg to 5 tons",
            "Smooth hydraulic operation",
            "Safety rails and gates",
            "Portable models for versatility",
            "Low maintenance hydraulic systems",
          ],
          image: "https://placehold.co/600x400?text=Material+Lifts&font=raleway",
        },
        {
          title: "Palletisers",
          name: "Palletisers",
          slug: "palletisers",
          description: "Palletisers built in Hyderabad automate the layering of products onto pallets for efficient storage and shipping. Essential for high-volume operations in food or beverage sectors, they handle diverse patterns with robotic precision. We engineer them for seamless integration, helping local industries go automated affordably.",
          features: [
            "Robotic or layer-based palletizing",
            "Handles various box sizes and weights",
            "Customizable layer patterns",
            "High throughput for busy lines",
            "Safety zones with light curtains",
            "Intuitive software for setup",
          ],
          image: "https://placehold.co/600x400?text=Palletisers&font=raleway",
        },
      ],
    },
    {
      category: "Track & Trace",
      items: [
        {
          title: "Vision Systems",
          name: "Vision Systems",
          slug: "vision-track-systems",
          description: "Our vision systems, developed in Hyderabad, use advanced cameras and AI to inspect and track products in real-time. Perfect for quality control in manufacturing, they detect defects and ensure compliance. As a local company, we offer customizable solutions that integrate easily with your existing lines.",
          features: [
            "High-resolution cameras for detailed inspection",
            "AI algorithms for defect detection",
            "Real-time tracking and reporting",
            "Integration with ERP systems",
            "User-friendly dashboards",
            "Scalable for small to large operations",
          ],
          image: "https://placehold.co/600x400?text=Vision+Systems&font=raleway",
        },
        {
          title: "Barcode & Label Verification",
          name: "Barcode & Label Verification",
          slug: "barcode-verification",
          description: "Barcode and label verification tools from Hyderabad ensure every product is correctly labeled before leaving your facility. They scan for accuracy, preventing costly recalls in supply chains. Our systems are designed for speed and reliability, supporting businesses in retail and logistics with minimal setup.",
          features: [
            "Multi-format barcode scanning (1D/2D)",
            "Label alignment and print quality checks",
            "Automatic rejection of faulty items",
            "Data logging for audits",
            "Compatible with high-speed lines",
            "Easy calibration for different products",
          ],
          image: "https://placehold.co/600x400?text=Barcode+Label+Verification&font=raleway",
        },
        {
          title: "Traceability Solutions",
          name: "Traceability Solutions",
          slug: "traceability",
          description: "Traceability solutions crafted in Hyderabad provide end-to-end tracking from raw materials to finished goods. Using RFID and software, they help comply with regulations in pharma and food industries. We make them user-centric, with cloud-based access for real-time insights into your supply chain.",
          features: [
            "RFID and barcode integration",
            "Cloud-based data storage",
            "Batch and lot tracking",
            "Alert systems for anomalies",
            "Custom reports for compliance",
            "Secure data encryption",
          ],
          image: "https://placehold.co/600x400?text=Traceability+Solutions&font=raleway",
        },
      ],
    },
  ],
  // =========================
  // 🛠 SERVICES
  // =========================
  services: [
    {
      title: "Custom Machine Design",
      name: "Custom Machine Design",
      slug: "custom-machine-design",
      description: "At our Hyderabad headquarters, we offer custom machine design services that turn your unique requirements into functional realities. From concept sketches to prototypes, our engineers collaborate closely to create bespoke automation solutions. This service is perfect for startups and established firms needing tailored equipment without global sourcing hassles.",
      features: [
        "3D modeling and simulation for accuracy",
        "Rapid prototyping with local materials",
        "Iterative design process with client feedback",
        "Compliance with Indian safety standards",
        "Cost-effective solutions for SMEs",
        "Full documentation and training",
      ],
      image: "https://placehold.co/600x400?text=Custom+Machine+Design&font=raleway",
    },
    {
      title: "Industrial Automation Solutions",
      name: "Industrial Automation Solutions",
      slug: "industrial-automation",
      description: "Our industrial automation solutions, based in Hyderabad, transform manual processes into smart, efficient systems. We integrate robotics, IoT, and controls to boost productivity across sectors. With a focus on local challenges like power fluctuations, we deliver resilient setups that drive growth for Indian businesses.",
      features: [
        "IoT-enabled monitoring and control",
        "Custom software development",
        "Seamless integration with legacy systems",
        "Energy optimization features",
        "24/7 remote support",
        "Scalable from pilot to full deployment",
      ],
      image: "https://placehold.co/600x400?text=Industrial+Automation+Solutions&font=raleway",
    },
    {
      title: "Installation & Commissioning",
      name: "Installation & Commissioning",
      slug: "installation-commissioning",
      description: "We handle installation and commissioning of equipment right in Hyderabad and surrounding areas, ensuring everything runs smoothly from day one. Our skilled teams manage site prep, wiring, and testing to minimize downtime. This service guarantees your new systems are up and optimized quickly.",
      features: [
        "On-site surveys for perfect fit",
        "Professional installation by certified techs",
        "Comprehensive testing and calibration",
        "Training sessions for your staff",
        "Post-install support for adjustments",
        "Adherence to safety protocols",
      ],
      image: "https://placehold.co/600x400?text=Installation+Commissioning&font=raleway",
    },
    {
      title: "Control Wiring",
      name: "Control Wiring",
      slug: "control-wiring",
      description: "Control wiring services from our Hyderabad experts ensure reliable electrical connections for your automation systems. We use high-quality cables and follow best practices to prevent faults. Ideal for upgrades or new installs, this keeps your operations safe and efficient.",
      features: [
        "Neat, labeled wiring for easy troubleshooting",
        "Use of industrial-grade components",
        "EMC shielding for noise reduction",
        "Compliance with electrical codes",
        "Quick turnaround for urgent needs",
        "Testing for continuity and insulation",
      ],
      image: "https://placehold.co/600x400?text=Control+Wiring&font=raleway",
    },
    {
      title: "PLC Programming",
      name: "PLC Programming",
      slug: "plc-programming",
      description: "Our PLC programming service in Hyderabad customizes logic controllers to automate your machinery precisely. From simple sequences to complex algorithms, we program for reliability and scalability. This empowers local industries to adopt smart manufacturing without high costs.",
      features: [
        "Ladder logic and function block programming",
        "Integration with HMI interfaces",
        "Debugging and optimization",
        "Backup and version control",
        "Training on program modifications",
        "Support for major brands like Siemens, Allen-Bradley",
      ],
      image: "https://placehold.co/600x400?text=PLC+Programming&font=raleway",
    },
    {
      title: "Maintenance & Support",
      name: "Maintenance & Support",
      slug: "maintenance-support",
      description: "Maintenance and support from our Hyderabad team keeps your equipment running at peak performance year-round. We offer preventive checks, repairs, and 24/7 helplines to avoid breakdowns. Tailored contracts ensure minimal disruptions, supporting the longevity of your investments.",
      features: [
        "Scheduled preventive maintenance",
        "Rapid response for breakdowns",
        "Spare parts inventory management",
        "Performance audits and upgrades",
        "Remote diagnostics via IoT",
        "Flexible service plans for budgets",
      ],
      image: "https://placehold.co/600x400?text=Maintenance+Support&font=raleway",
    },
  ],
};