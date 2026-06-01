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
  {
    id: "1",
    name: "Sony WH-1000XM5",
    category: "headphones",
    price: 349.99,
    rating: 4.8,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30-hour battery life with quick charge support.",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
    brand: "Bose",
    featured: true,
  },
  {
    id: "3",
    name: "Honeywell USB Desk Fan",
    category: "fans",
    price: 29.99,
    rating: 4.3,
    description:
      "Compact USB-powered desk fan with 2-speed settings and whisper-quiet operation. Perfect for office or home.",
    imageUrl:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
    brand: "Honeywell",
    featured: false,
  },
  {
    id: "4",
    name: "Vornado Mini Portable Fan",
    category: "fans",
    price: 39.99,
    rating: 4.5,
    description:
      "Portable personal fan with vortex airflow technology. Adjustable tilt and quiet motor for desk or travel use.",
    imageUrl:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    brand: "Vornado",
    featured: false,
  },
  {
    id: "5",
    name: "iPhone 15 Pro Clear Case",
    category: "phone-covers",
    price: 19.99,
    rating: 4.4,
    description:
      "Premium military-grade protection with MagSafe compatibility. Crystal clear design shows off your phone.",
    imageUrl:
      "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=600&q=80",
    brand: "Spigen",
    featured: true,
  },
  {
    id: "6",
    name: "Samsung S24 Leather Wallet Case",
    category: "phone-covers",
    price: 24.99,
    rating: 4.2,
    description:
      "Slim wallet case with 3 card slots and a built-in kickstand. Genuine leather exterior with precise cutouts.",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    brand: "Bellroy",
    featured: false,
  },
  {
    id: "7",
    name: "Apple Watch Series 9",
    category: "gadgets",
    price: 399.99,
    rating: 4.9,
    description:
      "Advanced health monitoring with blood oxygen and ECG. Crash detection, always-on display, and carbon neutral design.",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    brand: "Apple",
    featured: true,
  },
  {
    id: "8",
    name: "JBL Flip 6 Bluetooth Speaker",
    category: "gadgets",
    price: 129.99,
    rating: 4.6,
    description:
      "Powerful bold bass and crystal-clear stereo sound. IP67 waterproof rating with 12-hour playtime on a single charge.",
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    brand: "JBL",
    featured: true,
  },
  {
    id: "9",
    name: "Anker USB-C Cable 3-Pack",
    category: "accessories",
    price: 14.99,
    rating: 4.6,
    description:
      "6ft braided nylon USB-C cables with 60W fast charging and 480Mbps data transfer. Compatible with all USB-C devices.",
    imageUrl:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    brand: "Anker",
    featured: false,
  },
  {
    id: "10",
    name: "Belkin 15W Wireless Charger",
    category: "accessories",
    price: 44.99,
    rating: 4.5,
    description:
      "Qi2 certified 15W wireless charging pad with LED indicator. Universal compatibility with iPhone and Android devices.",
    imageUrl:
      "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&q=80",
    brand: "Belkin",
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
