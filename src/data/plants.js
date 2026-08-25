const plants = [
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    description:
      "A fragrant purple-flowering plant known for its calming aroma and beautiful appearance.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Rosemary",
    category: "Aromatic Plants",
    description:
      "A hardy herb with needle-like leaves and a refreshing woody fragrance.",
    price: 9.99,
    image:
      "https://cdn.pixabay.com/photo/2015/12/13/00/11/rosemary-1090419_1280.jpg",
  },
  {
    id: 3,
    name: "Mint",
    category: "Aromatic Plants",
    description:
      "A refreshing herb with bright green leaves and a cool, pleasant fragrance.",
    price: 7.49,
    image:
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Basil",
    category: "Aromatic Plants",
    description:
      "A popular culinary herb with soft green leaves and a sweet, distinctive aroma.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Thyme",
    category: "Aromatic Plants",
    description:
      "A compact herb with tiny leaves and a warm, earthy fragrance.",
    price: 8.49,
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Lemongrass",
    category: "Aromatic Plants",
    description:
      "A tropical herb with long green leaves and a fresh citrus-like aroma.",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1524641619328-f3b7444f7afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVtb25ncmFzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Snake Plant",
    category: "Indoor Plants",
    description:
      "A low-maintenance houseplant with tall upright leaves that suits modern interiors.",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1687552212914-03a30c82053c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Aloe Vera",
    category: "Indoor Plants",
    description:
      "A hardy succulent with thick pointed leaves that thrives with minimal care.",
    price: 14.99,
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/22/35/plant-6544088_1280.jpg",
  },
  {
    id: 9,
    name: "Peace Lily",
    category: "Indoor Plants",
    description:
      "An elegant indoor plant with glossy green leaves and beautiful white flowers.",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1616694547693-b0f829a6cf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww",
  },
  {
    id: 10,
    name: "Spider Plant",
    category: "Indoor Plants",
    description:
      "A beginner-friendly plant with arching leaves and attractive hanging baby plants.",
    price: 13.49,
    image:
      "https://images.unsplash.com/photo-1668117653442-dd03862e957f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BpZGVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    name: "Pothos",
    category: "Indoor Plants",
    description:
      "A fast-growing trailing plant with heart-shaped leaves that brightens indoor spaces.",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "ZZ Plant",
    category: "Indoor Plants",
    description:
      "A resilient houseplant with glossy leaves that requires very little maintenance.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Rose",
    category: "Flowering Plants",
    description:
      "A classic flowering plant admired for its colorful blooms and timeless beauty.",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Jasmine",
    category: "Flowering Plants",
    description:
      "A delicate flowering plant with small white flowers and a sweet fragrance.",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Hibiscus",
    category: "Flowering Plants",
    description:
      "A tropical flowering plant known for its large, vibrant and colorful blossoms.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Marigold",
    category: "Flowering Plants",
    description:
      "A cheerful flowering plant producing bright yellow and orange blooms.",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Geranium",
    category: "Flowering Plants",
    description:
      "A colorful flowering plant that adds vibrant blooms to gardens and balconies.",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Begonia",
    category: "Flowering Plants",
    description:
      "A decorative flowering plant valued for its colorful flowers and attractive foliage.",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
];

export default plants;
