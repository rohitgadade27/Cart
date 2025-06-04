const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "data:image/jpeg;base64,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",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
];

export default function handler(req, res) {
  // Block all caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Vary', '*');
  
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(products);
  } catch (error) {
    console.error('Error serving products:', error);
    res.status(500).json({ 
      error: 'Failed to serve products data',
      details: error.message
    });
  }
} 