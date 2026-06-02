export type Product = {
  id: string;
  name: string;
  category: "headphones" | "fans" | "phone-covers" | "gadgets" | "accessories";
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  brand: string;
  featured?: boolean;
};

export const products: Product[] = [
  // ── Headphones ──────────────────────────────────────────────────────────────
  {
    id: "1",
    name: "Sony WH-1000XM5",
    category: "headphones",
    price: 349.99,
    rating: 4.8,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30-hour battery life with quick charge support.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    brand: "Sony",
    featured: true,
  },
  {
    id: "2",
    name: "Bose QuietComfort 45",
    category: "headphones",
    price: 279.99,
    rating: 4.7,
    description:
      "World-class noise cancellation with TriPort acoustic architecture for powerful, balanced audio performance.",
    imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
    brand: "Bose",
    featured: true,
  },
  {
    id: "3",
    name: "Audio-Technica ATH-M50x",
    category: "headphones",
    price: 149.99,
    rating: 4.7,
    description:
      "Critically acclaimed studio monitor headphones with exceptional clarity across the entire frequency range.",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    brand: "Audio-Technica",
    featured: false,
  },
  {
    id: "4",
    name: "Sennheiser HD 660S",
    category: "headphones",
    price: 499.99,
    rating: 4.9,
    description:
      "High-end open-back headphones with optimized transducer and low impedance for audiophile-grade performance.",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
    brand: "Sennheiser",
    featured: true,
  },
  {
    id: "5",
    name: "Apple AirPods Max",
    category: "headphones",
    price: 449.99,
    rating: 4.6,
    description:
      "High-fidelity audio with Apple H1 chips in each ear cup, computational audio, and Active Noise Cancellation.",
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    brand: "Apple",
    featured: false,
  },
  {
    id: "6",
    name: "Jabra Evolve2 65",
    category: "headphones",
    price: 219.99,
    rating: 4.5,
    description:
      "Professional wireless headset with advanced ANC and 37-hour battery. Engineered for hybrid work.",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    brand: "Jabra",
    featured: false,
  },

  // ── Fans ─────────────────────────────────────────────────────────────────────
  {
    id: "7",
    name: "Honeywell USB Desk Fan",
    category: "fans",
    price: 29.99,
    rating: 4.3,
    description:
      "Compact USB-powered desk fan with 2-speed settings and whisper-quiet operation. Perfect for office or home.",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
    brand: "Honeywell",
    featured: false,
  },
  {
    id: "8",
    name: "Vornado Mini Portable Fan",
    category: "fans",
    price: 39.99,
    rating: 4.5,
    description:
      "Portable personal fan with vortex airflow technology. Adjustable tilt and quiet motor for desk or travel.",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    brand: "Vornado",
    featured: false,
  },
  {
    id: "9",
    name: "Dyson Pure Cool TP09",
    category: "fans",
    price: 549.99,
    rating: 4.8,
    description:
      "Air purifier and fan in one. Captures 99.97% of particles as small as 0.3 microns with HEPA H13 filter.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    brand: "Dyson",
    featured: true,
  },
  {
    id: "10",
    name: "Lasko Wind Curve Tower Fan",
    category: "fans",
    price: 79.99,
    rating: 4.4,
    description:
      "Slim tower fan with fresh air ionizer, 3 speed settings, and programmable timer. Space-saving design.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    brand: "Lasko",
    featured: false,
  },
  {
    id: "11",
    name: "PELONIS 16-inch Stand Fan",
    category: "fans",
    price: 49.99,
    rating: 4.2,
    description:
      "Adjustable height pedestal fan with 3 speed settings, 90-degree oscillation, and energy-saving mode.",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
    brand: "PELONIS",
    featured: false,
  },
  {
    id: "12",
    name: "Rowenta Turbo Silence Stand Fan",
    category: "fans",
    price: 139.99,
    rating: 4.6,
    description:
      "Ultra-quiet 5-speed stand fan with turbo boost button delivering powerful yet silent airflow up to 2690 RPM.",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    brand: "Rowenta",
    featured: false,
  },

  // ── Phone Covers ─────────────────────────────────────────────────────────────
  {
    id: "13",
    name: "iPhone 15 Pro Clear Case",
    category: "phone-covers",
    price: 19.99,
    rating: 4.4,
    description:
      "Premium military-grade protection with MagSafe compatibility. Crystal clear design shows off your phone.",
    imageUrl: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=600&q=80",
    brand: "Spigen",
    featured: true,
  },
  {
    id: "14",
    name: "Samsung S24 Leather Wallet Case",
    category: "phone-covers",
    price: 24.99,
    rating: 4.2,
    description:
      "Slim wallet case with 3 card slots and a built-in kickstand. Genuine leather exterior with precise cutouts.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    brand: "Bellroy",
    featured: false,
  },
  {
    id: "15",
    name: "Google Pixel 9 Pro MagSafe Case",
    category: "phone-covers",
    price: 29.99,
    rating: 4.3,
    description:
      "Slim magnetic case with reinforced corners. Compatible with MagSafe accessories and wireless charging.",
    imageUrl: "https://images.unsplash.com/photo-1574394783937-3e040cafa921?w=600&q=80",
    brand: "Google",
    featured: false,
  },
  {
    id: "16",
    name: "iPhone 15 MagSafe Silicone Case",
    category: "phone-covers",
    price: 39.99,
    rating: 4.5,
    description:
      "Soft-touch silicone case with MagSafe ring. Microfiber lining protects your iPhone from scratches.",
    imageUrl: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=600&q=80",
    brand: "Apple",
    featured: false,
  },
  {
    id: "17",
    name: "Samsung S24 Ultra Armor Case",
    category: "phone-covers",
    price: 22.99,
    rating: 4.4,
    description:
      "Military-grade drop protection with a built-in S Pen holder. Carbon fiber texture with raised bezels.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    brand: "Samsung",
    featured: false,
  },
  {
    id: "18",
    name: "OnePlus 12 Carbon Fiber Case",
    category: "phone-covers",
    price: 18.99,
    rating: 4.1,
    description:
      "Ultra-thin carbon fiber case with precise cutouts. Adds minimal bulk while delivering solid protection.",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    brand: "OnePlus",
    featured: false,
  },

  // ── Gadgets ──────────────────────────────────────────────────────────────────
  {
    id: "19",
    name: "Apple Watch Series 10",
    category: "gadgets",
    price: 399.99,
    rating: 4.9,
    description:
      "Advanced health monitoring with blood oxygen and ECG. Crash detection, always-on display, and carbon neutral design.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    brand: "Apple",
    featured: true,
  },
  {
    id: "20",
    name: "JBL Flip 6 Bluetooth Speaker",
    category: "gadgets",
    price: 129.99,
    rating: 4.6,
    description:
      "Powerful bold bass and crystal-clear stereo sound. IP67 waterproof rating with 12-hour playtime.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    brand: "JBL",
    featured: true,
  },
  {
    id: "21",
    name: "Amazon Echo Dot 5th Gen",
    category: "gadgets",
    price: 49.99,
    rating: 4.5,
    description:
      "Smart speaker with Alexa and improved audio. Control smart home devices and stream music with your voice.",
    imageUrl: "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=600&q=80",
    brand: "Amazon",
    featured: true,
  },
  {
    id: "22",
    name: "Kindle Paperwhite 16GB",
    category: "gadgets",
    price: 139.99,
    rating: 4.7,
    description:
      "6.8-inch glare-free display with adjustable warm light. Waterproof with weeks of battery life.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    brand: "Amazon",
    featured: false,
  },
  {
    id: "23",
    name: "GoPro HERO12 Black",
    category: "gadgets",
    price: 399.99,
    rating: 4.8,
    description:
      "5.3K video, 27MP photos, HyperSmooth 6.0 stabilization. Waterproof to 33ft — capture every adventure.",
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    brand: "GoPro",
    featured: false,
  },
  {
    id: "24",
    name: "Sony WF-1000XM5 Earbuds",
    category: "gadgets",
    price: 279.99,
    rating: 4.8,
    description:
      "World's best noise cancelling earbuds with 8-hour battery, multipoint connection, and LDAC codec support.",
    imageUrl: "https://images.unsplash.com/photo-1590658165737-15a047b7c863?w=600&q=80",
    brand: "Sony",
    featured: false,
  },

  // ── Accessories ──────────────────────────────────────────────────────────────
  {
    id: "25",
    name: "Anker USB-C Cable 3-Pack",
    category: "accessories",
    price: 14.99,
    rating: 4.6,
    description:
      "6ft braided nylon USB-C cables with 60W fast charging and 480Mbps data transfer.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    brand: "Anker",
    featured: false,
  },
  {
    id: "26",
    name: "Belkin 15W Wireless Charger",
    category: "accessories",
    price: 44.99,
    rating: 4.5,
    description:
      "Qi2 certified 15W wireless charging pad with LED indicator. Universal compatibility with iPhone and Android.",
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&q=80",
    brand: "Belkin",
    featured: false,
  },
  {
    id: "27",
    name: "Anker PowerCore 20000mAh",
    category: "accessories",
    price: 49.99,
    rating: 4.7,
    description:
      "High-capacity power bank with 20W Power Delivery and 15W wireless charging output. Charge 4 devices at once.",
    imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
    brand: "Anker",
    featured: true,
  },
  {
    id: "28",
    name: "Logitech MX Keys Mini Keyboard",
    category: "accessories",
    price: 99.99,
    rating: 4.6,
    description:
      "Compact wireless keyboard with smart illumination, USB-C charging, and seamless multi-device pairing.",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    brand: "Logitech",
    featured: false,
  },
  {
    id: "29",
    name: "Razer Gigantus V2 XXL Mouse Pad",
    category: "accessories",
    price: 24.99,
    rating: 4.5,
    description:
      "XXL gaming mouse pad with micro-textured surface, anti-slip rubber base, and stitched edges for durability.",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    brand: "Razer",
    featured: false,
  },
  {
    id: "30",
    name: "Anker 65W GaN USB-C Charger",
    category: "accessories",
    price: 34.99,
    rating: 4.7,
    description:
      "Compact 65W GaN charger with 3 ports (2 USB-C + 1 USB-A). Charges a MacBook, iPad, and iPhone simultaneously.",
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&q=80",
    brand: "Anker",
    featured: false,
  },
];

export const categoryLabels: Record<Product["category"], string> = {
  headphones: "Headphones",
  fans: "Fans",
  "phone-covers": "Phone Covers",
  gadgets: "Gadgets",
  accessories: "Accessories",
};
