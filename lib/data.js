export const products = [
  {
    id: 1,
    name: "Quantum X1 Headset",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Immersive noise-cancelling headphones with crystal clear audio and premium comfort."
  },
  {
    id: 2,
    name: "Nebula Smartwatch",
    price: 199.50,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Track your fitness and stay connected with the Nebula Smartwatch featuring AMOLED display."
  },
  {
    id: 3,
    name: "AeroBlade Laptop",
    price: 1299.00,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    description: "Ultra-thin, ultra-powerful. The AeroBlade defines modern computing with 16GB RAM."
  },
  {
    id: 4,
    name: "Lumix Lens Kit",
    price: 850.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    description: "Professional grade lenses for the aspiring photographer. Includes 3 premium lenses."
  },
  {
    id: 5,
    name: "Titan Mechanical Keyboard",
    price: 149.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
    description: "Tactile feedback and RGB lighting for the ultimate typing experience."
  },
  {
    id: 6,
    name: "Sonic Bluetooth Speaker",
    price: 89.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Portable sound that packs a punch. Water-resistant and 20-hour battery life."
  },
  {
    id: 7,
    name: "ProGamer Mouse",
    price: 79.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    description: "Precision gaming mouse with 16000 DPI and customizable RGB lighting."
  },
  {
    id: 8,
    name: "UltraView 4K Monitor",
    price: 599.00,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    description: "27-inch 4K display with HDR support and 144Hz refresh rate for professionals."
  },
  {
    id: 9,
    name: "SkyDrone Pro",
    price: 1199.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
    description: "Capture stunning aerial footage with 4K camera and 30-minute flight time."
  },
  {
    id: 10,
    name: "FitBand Elite",
    price: 129.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    description: "Advanced fitness tracker with heart rate monitoring and sleep analysis."
  },
  {
    id: 11,
    name: "PowerBank Ultra",
    price: 59.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "20000mAh portable charger with fast charging and dual USB ports."
  },
  {
    id: 12,
    name: "Studio Microphone",
    price: 249.00,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80",
    description: "Professional USB microphone for streaming, podcasting, and recording."
  },
  {
    id: 13,
    name: "Gaming Console X",
    price: 499.99,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&q=80",
    description: "Next-gen gaming console with 4K graphics and exclusive game library."
  },
  {
    id: 14,
    name: "Wireless Earbuds Pro",
    price: 179.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    description: "True wireless earbuds with active noise cancellation and 24-hour battery."
  },
  {
    id: 15,
    name: "Smart Home Hub",
    price: 149.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1558089687-e5e5e1d6e4f6?w=500&q=80",
    description: "Control all your smart devices from one central hub with voice commands."
  },
  {
    id: 16,
    name: "Action Camera 360",
    price: 399.99,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    description: "Waterproof action camera with 360-degree recording and image stabilization."
  },
  {
    id: 17,
    name: "VR Headset Elite",
    price: 799.00,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80",
    description: "Immersive virtual reality headset with 4K resolution and motion tracking."
  },
  {
    id: 18,
    name: "Smart Ring",
    price: 299.00,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
    description: "Sleek fitness and health tracking ring with sleep and activity monitoring."
  }
];

export async function getProducts(query = '') {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query) return products;

  const lowerQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
}

export async function getProductById(id) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products.find(product => product.id === parseInt(id));
}
