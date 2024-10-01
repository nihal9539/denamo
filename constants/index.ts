export const products: ProductType[] = [
  {
    id: 1,
    title: "Application Tape",
    price: 450,
    Category: "Vinyl",
    description:
      "Application Tape is a versatile tool used for transferring vinyl decals, graphics, and stickers. It's easy to handle and provides a strong adhesive grip without leaving residue, making it essential for any vinyl installation project.",
    img: [
      "/products/application-tape.png",
      "/products/application-tape-1.png",
      "/products/application-tape-2.png",
    ],
    keyFeatures: [
      "Clear and easy-to-apply adhesive",
      "Ideal for vinyl graphics and decals",
      "Leaves no residue",
      "Flexible and durable",
    ],
    sizes: ["15cm x 10m", "30cm x 10m", "50cm x 10m"],
    sizeUnit: "meter",
    offerPrice: 400,
    offerPercentage: Math.round(((450 - 400) / 450) * 100), // 11% off
    categoryUrl: "/vinyl",
  },
  {
    id: 2,
    title: "Blow Lamp Torch",
    price: 450,
    Category: "Machines",
    description:
      "The Blow Lamp Torch is a powerful and efficient tool for various heating applications, including plumbing, soldering, and DIY projects. Its compact design ensures easy handling while delivering high-intensity flame.",
    img: ["/products/blow-lamp-torch.jpg"],
    keyFeatures: [
      "High-intensity flame for efficient heating",
      "Compact and portable design",
      "Adjustable flame control",
      "Suitable for multiple applications",
    ],
    sizes: ["Small", "Medium", "Large"],
    sizeUnit: "piece",
    offerPrice: 425,
    offerPercentage: Math.round(((450 - 425) / 450) * 100), // 6% off
    categoryUrl: "/machines",
  },
  {
    id: 3,
    title: "Curved Sign Frames",
    price: 450,
    Category: "Manufacturing Items",
    description:
      "Curved Sign Frames are ideal for displaying signage in a sleek, modern format. These frames are designed to enhance the visual appeal of any advertisement, making them perfect for professional environments.",
    img: ["/products/curved-sign-frames.jpg"],
    keyFeatures: [
      "Elegant curved design",
      "Durable construction",
      "Easy to install and replace signs",
      "Available in multiple finishes",
    ],
    sizes: ["A4", "A3", "A2"],
    sizeUnit: "frame",
    offerPrice: 430,
    offerPercentage: Math.round(((450 - 430) / 450) * 100), // 4% off
    categoryUrl: "/manufacturing-items",
  },
  {
    id: 4,
    title: "Mobile Holder",
    price: 450,
    Category: "Gift Items",
    description:
      "The Mobile Holder is a practical and stylish accessory, perfect for keeping your mobile device secure and accessible. Its versatile design allows it to be used in cars, on desks, or as a handy stand.",
    img: ["/products/mobile-holder.jpg"],
    keyFeatures: [
      "Universal compatibility",
      "Adjustable viewing angles",
      "Sturdy and stable design",
      "Compact and portable",
    ],
    sizes: ["10cm", "15cm", "20cm"],
    sizeUnit: "centimeter",
    offerPrice: 420,
    offerPercentage: Math.round(((450 - 420) / 450) * 100), // 7% off
    categoryUrl: "/gift-items",
  },
  {
    id: 5,
    title: "Portable Heat Press",
    price: 450,
    Category: "Machines",
    description:
      "The Portable Heat Press is a must-have for DIY enthusiasts and small businesses. This compact machine is perfect for transferring designs onto various surfaces like t-shirts, mugs, and more.",
    img: ["/products/portable-heat-press.jpg"],
    keyFeatures: [
      "Compact and lightweight",
      "Easy-to-use interface",
      "Suitable for multiple materials",
      "Even heat distribution",
    ],
    sizes: ["20cm x 30cm", "25cm x 35cm", "30cm x 40cm"],
    sizeUnit: "centimeter",
    offerPrice: 410,
    offerPercentage: Math.round(((450 - 410) / 450) * 100), // 9% off
    categoryUrl: "/machines",
  },
  {
    id: 6,
    title: "Resin",
    price: 450,
    Category: "Manufacturing Items",
    description:
      "Resin is a versatile material used in various industries for casting, coating, and laminating. It's known for its durability and clear finish, making it ideal for creating high-quality products.",
    img: ["/products/resin.jpg"],
    keyFeatures: [
      "High clarity and gloss",
      "Durable and long-lasting",
      "Easy to mix and pour",
      "Suitable for casting and coating",
    ],
    sizes: ["500ml", "1L", "5L"],
    sizeUnit: "liter",
    offerPrice: 440,
    offerPercentage: Math.round(((450 - 440) / 450) * 100), // 2% off
    categoryUrl: "/manufacturing-items",
  },
  {
    id: 7,
    title: "Sublimation Stone",
    price: 450,
    Category: "Gift Items",
    description:
      "Sublimation Stone is an elegant way to showcase your favorite photos or designs. Ideal for personalized gifts, it offers a unique and durable surface for high-quality prints.",
    img: ["/products/sublimation-stone.jpg"],
    keyFeatures: [
      "Smooth, polished surface",
      "Durable and long-lasting",
      "Perfect for personalized gifts",
      "Available in various shapes and sizes",
    ],
    sizes: ["Small", "Medium", "Large"],
    sizeUnit: "piece",
    offerPrice: 415,
    offerPercentage: Math.round(((450 - 415) / 450) * 100), // 8% off
    categoryUrl: "/gift-items",
  },
  {
    id: 8,
    title: "Table Signages",
    price: 450,
    Category: "Stationary Items",
    description:
      "Table Signages are perfect for displaying information, directions, or branding on desks and counters. These compact signs are easy to set up and change, making them ideal for professional environments.",
    img: ["/products/table-signages.jpg"],
    keyFeatures: [
      "Clear and professional design",
      "Durable and long-lasting",
      "Easy to set up and replace",
      "Ideal for offices, hotels, and events",
    ],
    sizes: ["10cm x 15cm", "15cm x 20cm", "20cm x 25cm"],
    sizeUnit: "centimeter",
    offerPrice: 430,
    offerPercentage: Math.round(((450 - 430) / 450) * 100), // 4% off
    categoryUrl: "/stationary-items",
  },
  {
    id: 9,
    title: "Tablet Holder",
    price: 450,
    Category: "Gift Items",
    description:
      "The Tablet Holder is a versatile stand that holds your tablet securely in place, offering adjustable viewing angles for optimal comfort. It's perfect for use at home, in the office, or on the go.",
    img: ["/products/tablet-holder.jpg"],
    keyFeatures: [
      "Adjustable viewing angles",
      "Sturdy and stable design",
      "Lightweight and portable",
      "Compatible with most tablets",
    ],
    sizes: ["Small", "Medium", "Large"],
    sizeUnit: "piece",
    offerPrice: 425,
    offerPercentage: Math.round(((450 - 425) / 450) * 100), // 6% off
    categoryUrl: "/gift-items",
  },
  {
    id: 10,
    title: "Wooden Screen Printing Frame",
    price: 450,
    Category: "Manufacturing Items",
    description:
      "The Wooden Screen Printing Frame is an essential tool for creating detailed prints on various surfaces. Its sturdy construction ensures durability and precision, making it a reliable choice for screen printing projects.",
    img: ["/products/wooden-screen-printing.jpg"],
    keyFeatures: [
      "High-quality wood frame",
      "Durable and long-lasting",
      "Perfect for detailed prints",
      "Easy to set up and clean",
    ],
    sizes: ["30cm x 40cm", "40cm x 50cm", "50cm x 60cm"],
    sizeUnit: "centimeter",
    offerPrice: 435,
    offerPercentage: Math.round(((450 - 435) / 450) * 100), // 3% off
    categoryUrl: "/manufacturing-items",
  },
];
