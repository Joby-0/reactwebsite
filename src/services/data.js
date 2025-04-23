import React from 'react'


export function Categoriesdata() {


  return (
    [
      {
        id: 1,
        name: "phones",
        icon: "",
        subCat: [
          {
            id: 111,
            name: "Smartphones",
            desc: "Smartphones are powerful handheld devices used for communication, browsing, and entertainment.",
            
          },
          {
            id: 112,
            name: "Phonecases",
            desc: "Phone cases provide protection and style for your smartphone.",
            subSubCat: [
              { id: 13, name: "MagSafe" },
              { id: 14, name: "No case" },
              { id: 15, name: "Rugged" },
              { id: 16, name: "Clear" }
            ]
          },
          {
            id: 113,
            name: "Chargers",
            desc: "Chargers and adapters to power your devices efficiently.",
            subSubCat: [
              { id: 17, name: "Wireless" },
              { id: 18, name: "USB-C" },
              { id: 19, name: "Lightning" }
            ]
          },
          {
            id: 114,
            name: "Powerbanks",
            desc: "Portable power banks to charge your devices on the go."
          },
          {
            id: 115,
            name: "Screen Protectors",
            desc: "Protective films and tempered glass for your phone screens.",
            subSubCat: [
              { id: 20, name: "Privacy" },
              { id: 21, name: "Tempered Glass" }
            ]
          }
        ]
      }
      ,
      {
        id: 2,
        name: "computer",
        icon: "",
        subCat: [
          {
            id: 221,
            name: "Computercomponents",
            desc: "Gaming consoles like PlayStation, Xbox, and Nintendo Switch."
          },
          {
            id: 222,
            name: "Computers",
            desc: "Desktops, laptops, and components built for PC gaming."
          },
          {
            id: 223,
            name: "accessories",
            desc: "Gaming accessories including controllers, headsets, and keyboards."
          },
          {
            id: 224,
            name: "Network",
            desc: "Video games for various platforms and genres."
          }
        ]
      },
      {
        id: 3,
        name: "toys",
        icon: "",
        subCat: [
          {
            id: 331,
            name: "educational",
            desc: "Toys designed to help children learn and develop skills."
          },
          {
            id: 332,
            name: "actionfigures",
            desc: "Action figures and collectibles from popular movies and series."
          },
          {
            id: 333,
            name: "buildingblocks",
            desc: "LEGO and other building sets for creativity and construction."
          }
        ]
      },
      {
        id: 4,
        name: "audioandtv",
        icon: "",
        subCat: [
          {
            id: 441,
            name: "speakers",
            desc: "Home and portable speakers with high-quality sound."
          },
          {
            id: 442,
            name: "headphones",
            desc: "Wired and wireless headphones for immersive listening."
          },
          {
            id: 443,
            name: "televisions",
            desc: "LED, OLED, and QLED TVs from various brands."
          },
          {
            id: 444,
            name: "soundbars",
            desc: "Soundbars that enhance your home theater experience."
          }
        ]
      },
      {
        id: 5,
        name: "computers",
        icon: "",
        subCat: [
          {
            id: 551,
            name: "laptops",
            desc: "Portable computers for work, gaming, and general use."
          },
          {
            id: 552,
            name: "desktops",
            desc: "Desktop PCs for home, office, or gaming setups."
          },
          {
            id: 553,
            name: "monitors",
            desc: "HD and 4K monitors for all types of users."
          },
          {
            id: 554,
            name: "components",
            desc: "PC parts like GPUs, CPUs, RAM, and SSDs."
          }
        ]
      },
      {
        id: 6,
        name: "homeappliances",
        icon: "",
        subCat: [
          {
            id: 661,
            name: "refrigerators",
            desc: "Energy-efficient fridges from top brands."
          },
          {
            id: 662,
            name: "microwaves",
            desc: "Microwave ovens for fast and convenient cooking."
          },
          {
            id: 663,
            name: "vacuumcleaners",
            desc: "Powerful vacuums including robotic and cordless models."
          },
          {
            id: 664,
            name: "coffee",
            desc: "Coffee machines and accessories for home baristas."
          }
        ]
      },
      {
        id: 7,
        name: "smarttech",
        icon: "",
        subCat: [
          {
            id: 771,
            name: "smartwatches",
            desc: "Wearables to track health, fitness, and notifications."
          },
          {
            id: 772,
            name: "smarthome",
            desc: "Smart bulbs, thermostats, and assistants for automation."
          },
          {
            id: 773,
            name: "security",
            desc: "Cameras, sensors, and alarms for home security."
          }
        ]
      },
      {
        id: 8,
        name: "office",
        icon: "",
        subCat: [
          {
            id: 881,
            name: "printers",
            desc: "Inkjet and laser printers for home and office use."
          },
          {
            id: 882,
            name: "stationery",
            desc: "Notebooks, pens, and supplies for productive work."
          },
          {
            id: 883,
            name: "furniture",
            desc: "Desks, chairs, and ergonomic accessories."
          }
        ]
      }
    ]

  )
}


export default function Data() {
  return (
    [
      {
        id: 1,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 2,
        category: 'Phones',
        categoryId: 1,
        name: 'Samsung-Galaxy-S25-Ultra-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_front_phantom_black.png',
        thumbnails: [
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_side_phantom_black.png',
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_back_phantom_black.png',
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_angled_phantom_black.png',
        ],
        rating: 624,
        price: '17990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Samsung Galaxy S25 Ultra" },
              { name: "Manufacturer", value: "Samsung" },
              { name: "Model Number", value: "S25 Ultra" },
              { name: "Release Date", value: "February 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "163.4 x 78.1 x 8.9 mm" },
              { name: "Weight", value: "233g" },
              { name: "Material(s)", value: "Aluminum, Gorilla Glass Victus 3" },
              { name: "Color(s)", value: "Phantom Black, Green, Cream, Lavender" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "Dynamic AMOLED 2X" },
              { name: "Size", value: "6.8 inches" },
              { name: "Resolution", value: "1440 x 3200 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10+" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'MediaMarkt',
            productUrl: 'https://www.mediamarkt.se/product/samsung-galaxy-s25-ultra',
            productName: 'Samsung Galaxy S25 Ultra 5G 512GB Phantom Black',
            price: '17990 kr',
            storeUrl: 'https://www.mediamarkt.se/product/samsung-galaxy-s25-ultra'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/s25-ultra-512',
            productName: 'Galaxy S25 Ultra 512GB Svart',
            price: '18490 kr',
            storeUrl: 'https://www.dustinhome.se/product/s25-ultra-512'
          }
        ]
      },
      {
        id: 3,
        category: 'Phones',
        categoryId: 1,
        name: 'Google-Pixel-9-Pro-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://store.google.com/product/pixel_9_pro_image.png',
        thumbnails: [
          'https://store.google.com/product/pixel_9_pro_image_side.png',
          'https://store.google.com/product/pixel_9_pro_image_back.png',
          'https://store.google.com/product/pixel_9_pro_image_top.png'
        ],
        rating: 412,
        price: '13990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Google Pixel 9 Pro" },
              { name: "Manufacturer", value: "Google" },
              { name: "Model Number", value: "G9P-256" },
              { name: "Release Date", value: "October 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO OLED" },
              { name: "Size", value: "6.7 inches" },
              { name: "Resolution", value: "1344 x 2992 pixels" },
              { name: "Refresh Rate", value: "120Hz" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "50MP + 48MP + 48MP" },
              { name: "Zoom", value: "5x optical" },
              { name: "Video", value: "4K 60fps" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Google Store',
            productUrl: 'https://store.google.com/pixel_9_pro',
            productName: 'Pixel 9 Pro 256GB Obsidian',
            price: '13990 kr',
            storeUrl: 'https://store.google.com/pixel_9_pro'
          }
        ]
      },
      {
        id: 4,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus-13-Pro-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.oneplus.com/13-pro-image.png',
        thumbnails: [
          'https://www.oneplus.com/13-pro-image-side.png',
          'https://www.oneplus.com/13-pro-image-back.png'
        ],
        rating: 368,
        price: '12990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "OnePlus 13 Pro" },
              { name: "Manufacturer", value: "OnePlus" },
              { name: "Model Number", value: "OP13P" },
              { name: "Release Date", value: "August 2025" },
              { name: "Operating System", value: "OxygenOS 15" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "RAM", value: "12GB" },
              { name: "Storage Options", value: "256GB, 512GB" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "5000mAh" },
              { name: "Charging", value: "100W SuperVOOC" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'NetOnNet',
            productUrl: 'https://www.netonnet.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 5G 512GB Emerald Green',
            price: '12990 kr',
            storeUrl: 'https://www.netonnet.se/product/oneplus-13-pro'
          }
        ]
      },
      {
        id: 5,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus-13-Pro-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://image01.oneplus.net/ebp/202501/13-pro-front.png',
        thumbnails: [
          'https://image01.oneplus.net/ebp/202501/13-pro-side.png',
          'https://image01.oneplus.net/ebp/202501/13-pro-back.png',
          'https://image01.oneplus.net/ebp/202501/13-pro-angle.png'
        ],
        rating: 389,
        price: '11290 sek',
        desc: [
          {
            id: 1,
            name: 'Information',
            data: [
              { name: 'Name', value: 'OnePlus 13 Pro' },
              { name: 'Manufacturer', value: 'OnePlus' },
              { name: 'Model Number', value: 'OP13P512' },
              { name: 'Release Date', value: 'January 2025' },
              { name: 'Operating System', value: 'OxygenOS 15 (Android 15)' }
            ]
          },
          {
            id: 2,
            name: 'Specifications',
            data: [
              { name: 'Dimensions', value: '163 x 74.2 x 8.9 mm' },
              { name: 'Weight', value: '204g' },
              { name: 'Material(s)', value: 'Aluminum, Gorilla Glass' },
              { name: 'Color(s)', value: 'Emerald Green, Matte Black' },
              { name: 'Storage size', value: '512GB' },
              { name: 'More', value: 'Hasselblad Camera Collaboration' }
            ]
          },
          {
            id: 3,
            name: 'Display',
            data: [
              { name: 'Type', value: 'Fluid AMOLED' },
              { name: 'Size', value: '6.82 inches' },
              { name: 'Resolution', value: '1440 x 3168 pixels' },
              { name: 'Refresh Rate', value: '120Hz' },
              { name: 'HDR', value: 'HDR10+' }
            ]
          },
          {
            id: 4,
            name: 'Performance',
            data: [
              { name: 'Chipset', value: 'Snapdragon 8 Gen 4' },
              { name: 'CPU', value: 'Octa-core' },
              { name: 'GPU', value: 'Adreno 780' },
              { name: 'RAM', value: '16GB' },
              { name: 'Storage Options', value: '256GB, 512GB' }
            ]
          },
          {
            id: 5,
            name: 'Camera',
            data: [
              { name: 'Main Camera', value: '50MP wide + 48MP ultrawide + 64MP telephoto' },
              { name: 'Zoom', value: '6x optical, 60x digital' },
              { name: 'Front Camera', value: '32MP' },
              { name: 'Video Recording', value: '8K at 24fps, 4K at 60fps' }
            ]
          },
          {
            id: 6,
            name: 'Battery',
            data: [
              { name: 'Capacity', value: '5500mAh' },
              { name: 'Charging', value: '100W wired, 50W wireless' },
              { name: 'Battery Life', value: 'Up to 2 days' }
            ]
          },
          {
            id: 7,
            name: 'Connectivity',
            data: [
              { name: 'Network', value: '5G, LTE' },
              { name: 'Wi-Fi', value: 'Wi-Fi 7' },
              { name: 'Bluetooth', value: 'Bluetooth 5.4' },
              { name: 'NFC', value: 'Yes' },
              { name: 'USB', value: 'USB-C 3.2' }
            ]
          },
          {
            id: 8,
            name: 'Other Features',
            data: [
              { name: 'Fingerprint', value: 'In-display optical' },
              { name: 'Cooling', value: 'Vapor Chamber Cooling System' },
              { name: 'Speakers', value: 'Stereo Dual Speakers' },
              { name: 'Alert Slider', value: 'Yes' },
              { name: 'Water Resistance', value: 'IP68' }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'OnePlus Store',
            productUrl: 'https://www.oneplus.com/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB Emerald Green',
            price: '11290 kr',
            storeUrl: 'https://www.oneplus.com/product/oneplus-13-pro'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB',
            price: '11490 kr',
            storeUrl: 'https://www.elgiganten.se/product/oneplus-13-pro'
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#'
          }
        ]
      },
      {
        id: 6,
        category: 'Phones',
        categoryId: 1,
        name: 'Sony-Xperia-1-VI-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.sony.com/image/xperia-1-vi-front.jpg',
        thumbnails: [
          'https://www.sony.com/image/xperia-1-vi-side.jpg',
          'https://www.sony.com/image/xperia-1-vi-back.jpg',
          'https://www.sony.com/image/xperia-1-vi-angle.jpg'
        ],
        rating: 204,
        price: '12990 sek',
        desc: [
          {
            id: 1,
            name: 'Information',
            data: [
              { name: 'Name', value: 'Sony Xperia 1 VI' },
              { name: 'Manufacturer', value: 'Sony' },
              { name: 'Model Number', value: 'XQ-DS54' },
              { name: 'Release Date', value: 'May 2025' },
              { name: 'Operating System', value: 'Android 15' }
            ]
          },
          {
            id: 2,
            name: 'Specifications',
            data: [
              { name: 'Dimensions', value: '165 x 71 x 8.3 mm' },
              { name: 'Weight', value: '187g' },
              { name: 'Material(s)', value: 'Metal & Corning Gorilla Glass Victus' },
              { name: 'Color(s)', value: 'Black, Silver, Blue' },
              { name: 'Storage size', value: '256GB' },
              { name: 'More', value: 'Pro camera interface' }
            ]
          },
          {
            id: 3,
            name: 'Display',
            data: [
              { name: 'Type', value: 'OLED' },
              { name: 'Size', value: '6.5 inches' },
              { name: 'Resolution', value: '1644 x 3840 pixels (4K)' },
              { name: 'Refresh Rate', value: '120Hz' },
              { name: 'Aspect Ratio', value: '21:9 CinemaWide' }
            ]
          },
          {
            id: 4,
            name: 'Performance',
            data: [
              { name: 'Chipset', value: 'Snapdragon 8 Gen 3' },
              { name: 'CPU', value: 'Octa-core' },
              { name: 'GPU', value: 'Adreno 740' },
              { name: 'RAM', value: '12GB' },
              { name: 'Storage Options', value: '256GB, 512GB' }
            ]
          },
          {
            id: 5,
            name: 'Camera',
            data: [
              { name: 'Main Camera', value: '48MP wide + 12MP telephoto + 12MP ultrawide' },
              { name: 'Zoom', value: 'Up to 5.2x optical' },
              { name: 'Front Camera', value: '12MP' },
              { name: 'Video Recording', value: '4K at 120fps, Cinema Pro Mode' }
            ]
          },
          {
            id: 6,
            name: 'Battery',
            data: [
              { name: 'Capacity', value: '5000mAh' },
              { name: 'Charging', value: '30W wired, 15W wireless' },
              { name: 'Battery Life', value: 'Up to 20 hours video playback' }
            ]
          },
          {
            id: 7,
            name: 'Connectivity',
            data: [
              { name: 'Network', value: '5G, LTE' },
              { name: 'Wi-Fi', value: 'Wi-Fi 6E' },
              { name: 'Bluetooth', value: 'Bluetooth 5.2' },
              { name: 'NFC', value: 'Yes' },
              { name: 'USB', value: 'USB-C 3.1' }
            ]
          },
          {
            id: 8,
            name: 'Other Features',
            data: [
              { name: 'Headphone Jack', value: 'Yes (3.5mm)' },
              { name: 'Pro Modes', value: 'Photo Pro, Video Pro, Cinema Pro' },
              { name: 'Water Resistance', value: 'IP65/IP68' },
              { name: 'Speakers', value: 'Stereo Front-Facing' },
              { name: 'Fingerprint', value: 'Side-mounted' }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Sony Store',
            productUrl: 'https://www.sony.se/electronics/mobiltelefoner/xperia-1-vi',
            productName: 'Sony Xperia 1 VI 256GB Black',
            price: '12990 kr',
            storeUrl: 'https://www.sony.se/electronics/mobiltelefoner/xperia-1-vi'
          },
          {
            company: 'NetOnNet',
            productUrl: 'https://www.netonnet.se/art/sony-xperia-1-vi',
            productName: 'Xperia 1 VI 256GB',
            price: '13290 kr',
            storeUrl: 'https://www.netonnet.se/art/sony-xperia-1-vi'
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#'
          }
        ]
      },
      {
        id: 7,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 8,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 9,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [/* ... */],
        rating: 542,
        price: '16090 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 10,
        category: 'Phones',
        categoryId: 1,
        name: 'Samsung-Galaxy-S25-Ultra-512GB',
        shortdesc: "The next-gen Android powerhouse with unmatched camera quality and speed.",
        image: 'https://images.samsung.com/is/image/samsung/p6pim/se/sm-s928bzageub/gallery/se-galaxy-s25-ultra-5g-sm-s928-sm-s928bzageub-538420637?$650_519_PNG$',
        thumbnails: [/* ... */],
        rating: 487,
        price: '14990 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 11,
        category: 'Phones',
        categoryId: 1,
        name: 'Google-Pixel-9-Pro-256GB',
        shortdesc: "Google’s clean Android with stellar photography and AI features.",
        image: 'https://store.google.com/product-image.png',
        thumbnails: [/* ... */],
        rating: 413,
        price: '13990 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 12,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus-13-Pro-512GB',
        shortdesc: "Speed meets design in OnePlus’ latest flagship killer.",
        image: 'https://image01.oneplus.net/ebp/202312/13/1-m00-21-e4-rb8bwmx9nbmakztkaadrr2w-lqc660_840_840.png',
        thumbnails: [/* ... */],
        rating: 398,
        price: '13490 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 13,
        category: 'Phones',
        categoryId: 1,
        name: 'Sony-Xperia-1-V-256GB',
        shortdesc: "Sony’s flagship with 4K HDR OLED and pro camera features.",
        image: 'https://m.media-amazon.com/images/I/71pzB7Tb5uL._AC_SL1500_.jpg',
        thumbnails: [/* ... */],
        rating: 356,
        price: '14490 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 14,
        category: 'Phones',
        categoryId: 1,
        name: 'Motorola-Edge-50-Ultra-512GB',
        shortdesc: "Balanced performance and battery life in a clean design.",
        image: 'https://motorolaus.vtexassets.com/arquivos/ids/159842/Motorola-Edge-50-Ultra.png',
        thumbnails: [/* ... */],
        rating: 322,
        price: '11990 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 15,
        category: 'Phones',
        categoryId: 1,
        name: 'Nothing-Phone-3-256GB',
        shortdesc: "Minimalist design meets functional transparency and lighting.",
        image: 'https://www.nothing.tech/global-assets/phone3.png',
        thumbnails: [/* ... */],
        rating: 278,
        price: '9990 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 16,
        category: 'Phones',
        categoryId: 1,
        name: 'Xiaomi-14-Ultra-1TB',
        shortdesc: "Top-tier hardware with Leica lenses and a massive battery.",
        image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-14-ultra/overview.jpg',
        thumbnails: [/* ... */],
        rating: 341,
        price: '15490 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 17,
        category: 'Phones',
        categoryId: 1,
        name: 'Asus-ROG-Phone-8-Pro-1TB',
        shortdesc: "A gaming beast with air triggers and RGB cooling.",
        image: 'https://dlcdnrog.asus.com/rog/media/1689808799468.webp',
        thumbnails: [/* ... */],
        rating: 379,
        price: '16490 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      },
      {
        id: 18,
        category: 'Phones',
        categoryId: 1,
        name: 'Huawei-Mate-60-Pro-512GB',
        shortdesc: "Sleek design, great camera, and HarmonyOS inside.",
        image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/mate60-pro/images/gallery/white/mate60-pro-white-1.png',
        thumbnails: [/* ... */],
        rating: 301,
        price: '14290 sek',
        desc: [/* ... */],
        url: '/categorys/product.html',
        pricelist: [/* ... */],
      }
      // Add more products as needed
    ]
  )
}



export function PopularProducts() {
  return (
    [
      {
        id: 1,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 2,
        category: 'Phones',
        categoryId: 1,
        name: 'Samsung-Galaxy-S25-Ultra-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_front_phantom_black.png',
        thumbnails: [
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_side_phantom_black.png',
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_back_phantom_black.png',
          'https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s25-ultra_angled_phantom_black.png',
        ],
        rating: 624,
        price: '17990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Samsung Galaxy S25 Ultra" },
              { name: "Manufacturer", value: "Samsung" },
              { name: "Model Number", value: "S25 Ultra" },
              { name: "Release Date", value: "February 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "163.4 x 78.1 x 8.9 mm" },
              { name: "Weight", value: "233g" },
              { name: "Material(s)", value: "Aluminum, Gorilla Glass Victus 3" },
              { name: "Color(s)", value: "Phantom Black, Green, Cream, Lavender" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "Dynamic AMOLED 2X" },
              { name: "Size", value: "6.8 inches" },
              { name: "Resolution", value: "1440 x 3200 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10+" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'MediaMarkt',
            productUrl: 'https://www.mediamarkt.se/product/samsung-galaxy-s25-ultra',
            productName: 'Samsung Galaxy S25 Ultra 5G 512GB Phantom Black',
            price: '17990 kr',
            storeUrl: 'https://www.mediamarkt.se/product/samsung-galaxy-s25-ultra'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/s25-ultra-512',
            productName: 'Galaxy S25 Ultra 512GB Svart',
            price: '18490 kr',
            storeUrl: 'https://www.dustinhome.se/product/s25-ultra-512'
          }
        ]
      },
      {
        id: 3,
        category: 'Phones',
        categoryId: 1,
        name: 'Google-Pixel-9-Pro-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://store.google.com/product/pixel_9_pro_image.png',
        thumbnails: [
          'https://store.google.com/product/pixel_9_pro_image_side.png',
          'https://store.google.com/product/pixel_9_pro_image_back.png',
          'https://store.google.com/product/pixel_9_pro_image_top.png'
        ],
        rating: 412,
        price: '13990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Google Pixel 9 Pro" },
              { name: "Manufacturer", value: "Google" },
              { name: "Model Number", value: "G9P-256" },
              { name: "Release Date", value: "October 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO OLED" },
              { name: "Size", value: "6.7 inches" },
              { name: "Resolution", value: "1344 x 2992 pixels" },
              { name: "Refresh Rate", value: "120Hz" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "50MP + 48MP + 48MP" },
              { name: "Zoom", value: "5x optical" },
              { name: "Video", value: "4K 60fps" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Google Store',
            productUrl: 'https://store.google.com/pixel_9_pro',
            productName: 'Pixel 9 Pro 256GB Obsidian',
            price: '13990 kr',
            storeUrl: 'https://store.google.com/pixel_9_pro'
          }
        ]
      },
      {
        id: 4,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus-13-Pro-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.oneplus.com/13-pro-image.png',
        thumbnails: [
          'https://www.oneplus.com/13-pro-image-side.png',
          'https://www.oneplus.com/13-pro-image-back.png'
        ],
        rating: 368,
        price: '12990 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "OnePlus 13 Pro" },
              { name: "Manufacturer", value: "OnePlus" },
              { name: "Model Number", value: "OP13P" },
              { name: "Release Date", value: "August 2025" },
              { name: "Operating System", value: "OxygenOS 15" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "RAM", value: "12GB" },
              { name: "Storage Options", value: "256GB, 512GB" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "5000mAh" },
              { name: "Charging", value: "100W SuperVOOC" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'NetOnNet',
            productUrl: 'https://www.netonnet.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 5G 512GB Emerald Green',
            price: '12990 kr',
            storeUrl: 'https://www.netonnet.se/product/oneplus-13-pro'
          }
        ]
      },
      {
        id: 5,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus-13-Pro-512GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://image01.oneplus.net/ebp/202501/13-pro-front.png',
        thumbnails: [
          'https://image01.oneplus.net/ebp/202501/13-pro-side.png',
          'https://image01.oneplus.net/ebp/202501/13-pro-back.png',
          'https://image01.oneplus.net/ebp/202501/13-pro-angle.png'
        ],
        rating: 389,
        price: '11290 sek',
        desc: [
          {
            id: 1,
            name: 'Information',
            data: [
              { name: 'Name', value: 'OnePlus 13 Pro' },
              { name: 'Manufacturer', value: 'OnePlus' },
              { name: 'Model Number', value: 'OP13P512' },
              { name: 'Release Date', value: 'January 2025' },
              { name: 'Operating System', value: 'OxygenOS 15 (Android 15)' }
            ]
          },
          {
            id: 2,
            name: 'Specifications',
            data: [
              { name: 'Dimensions', value: '163 x 74.2 x 8.9 mm' },
              { name: 'Weight', value: '204g' },
              { name: 'Material(s)', value: 'Aluminum, Gorilla Glass' },
              { name: 'Color(s)', value: 'Emerald Green, Matte Black' },
              { name: 'Storage size', value: '512GB' },
              { name: 'More', value: 'Hasselblad Camera Collaboration' }
            ]
          },
          {
            id: 3,
            name: 'Display',
            data: [
              { name: 'Type', value: 'Fluid AMOLED' },
              { name: 'Size', value: '6.82 inches' },
              { name: 'Resolution', value: '1440 x 3168 pixels' },
              { name: 'Refresh Rate', value: '120Hz' },
              { name: 'HDR', value: 'HDR10+' }
            ]
          },
          {
            id: 4,
            name: 'Performance',
            data: [
              { name: 'Chipset', value: 'Snapdragon 8 Gen 4' },
              { name: 'CPU', value: 'Octa-core' },
              { name: 'GPU', value: 'Adreno 780' },
              { name: 'RAM', value: '16GB' },
              { name: 'Storage Options', value: '256GB, 512GB' }
            ]
          },
          {
            id: 5,
            name: 'Camera',
            data: [
              { name: 'Main Camera', value: '50MP wide + 48MP ultrawide + 64MP telephoto' },
              { name: 'Zoom', value: '6x optical, 60x digital' },
              { name: 'Front Camera', value: '32MP' },
              { name: 'Video Recording', value: '8K at 24fps, 4K at 60fps' }
            ]
          },
          {
            id: 6,
            name: 'Battery',
            data: [
              { name: 'Capacity', value: '5500mAh' },
              { name: 'Charging', value: '100W wired, 50W wireless' },
              { name: 'Battery Life', value: 'Up to 2 days' }
            ]
          },
          {
            id: 7,
            name: 'Connectivity',
            data: [
              { name: 'Network', value: '5G, LTE' },
              { name: 'Wi-Fi', value: 'Wi-Fi 7' },
              { name: 'Bluetooth', value: 'Bluetooth 5.4' },
              { name: 'NFC', value: 'Yes' },
              { name: 'USB', value: 'USB-C 3.2' }
            ]
          },
          {
            id: 8,
            name: 'Other Features',
            data: [
              { name: 'Fingerprint', value: 'In-display optical' },
              { name: 'Cooling', value: 'Vapor Chamber Cooling System' },
              { name: 'Speakers', value: 'Stereo Dual Speakers' },
              { name: 'Alert Slider', value: 'Yes' },
              { name: 'Water Resistance', value: 'IP68' }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'OnePlus Store',
            productUrl: 'https://www.oneplus.com/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB Emerald Green',
            price: '11290 kr',
            storeUrl: 'https://www.oneplus.com/product/oneplus-13-pro'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB',
            price: '11490 kr',
            storeUrl: 'https://www.elgiganten.se/product/oneplus-13-pro'
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#'
          }
        ]
      },
      {
        id: 6,
        category: 'Phones',
        categoryId: 1,
        name: 'Sony-Xperia-1-VI-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.sony.com/image/xperia-1-vi-front.jpg',
        thumbnails: [
          'https://www.sony.com/image/xperia-1-vi-side.jpg',
          'https://www.sony.com/image/xperia-1-vi-back.jpg',
          'https://www.sony.com/image/xperia-1-vi-angle.jpg'
        ],
        rating: 204,
        price: '12990 sek',
        desc: [
          {
            id: 1,
            name: 'Information',
            data: [
              { name: 'Name', value: 'Sony Xperia 1 VI' },
              { name: 'Manufacturer', value: 'Sony' },
              { name: 'Model Number', value: 'XQ-DS54' },
              { name: 'Release Date', value: 'May 2025' },
              { name: 'Operating System', value: 'Android 15' }
            ]
          },
          {
            id: 2,
            name: 'Specifications',
            data: [
              { name: 'Dimensions', value: '165 x 71 x 8.3 mm' },
              { name: 'Weight', value: '187g' },
              { name: 'Material(s)', value: 'Metal & Corning Gorilla Glass Victus' },
              { name: 'Color(s)', value: 'Black, Silver, Blue' },
              { name: 'Storage size', value: '256GB' },
              { name: 'More', value: 'Pro camera interface' }
            ]
          },
          {
            id: 3,
            name: 'Display',
            data: [
              { name: 'Type', value: 'OLED' },
              { name: 'Size', value: '6.5 inches' },
              { name: 'Resolution', value: '1644 x 3840 pixels (4K)' },
              { name: 'Refresh Rate', value: '120Hz' },
              { name: 'Aspect Ratio', value: '21:9 CinemaWide' }
            ]
          },
          {
            id: 4,
            name: 'Performance',
            data: [
              { name: 'Chipset', value: 'Snapdragon 8 Gen 3' },
              { name: 'CPU', value: 'Octa-core' },
              { name: 'GPU', value: 'Adreno 740' },
              { name: 'RAM', value: '12GB' },
              { name: 'Storage Options', value: '256GB, 512GB' }
            ]
          },
          {
            id: 5,
            name: 'Camera',
            data: [
              { name: 'Main Camera', value: '48MP wide + 12MP telephoto + 12MP ultrawide' },
              { name: 'Zoom', value: 'Up to 5.2x optical' },
              { name: 'Front Camera', value: '12MP' },
              { name: 'Video Recording', value: '4K at 120fps, Cinema Pro Mode' }
            ]
          },
          {
            id: 6,
            name: 'Battery',
            data: [
              { name: 'Capacity', value: '5000mAh' },
              { name: 'Charging', value: '30W wired, 15W wireless' },
              { name: 'Battery Life', value: 'Up to 20 hours video playback' }
            ]
          },
          {
            id: 7,
            name: 'Connectivity',
            data: [
              { name: 'Network', value: '5G, LTE' },
              { name: 'Wi-Fi', value: 'Wi-Fi 6E' },
              { name: 'Bluetooth', value: 'Bluetooth 5.2' },
              { name: 'NFC', value: 'Yes' },
              { name: 'USB', value: 'USB-C 3.1' }
            ]
          },
          {
            id: 8,
            name: 'Other Features',
            data: [
              { name: 'Headphone Jack', value: 'Yes (3.5mm)' },
              { name: 'Pro Modes', value: 'Photo Pro, Video Pro, Cinema Pro' },
              { name: 'Water Resistance', value: 'IP65/IP68' },
              { name: 'Speakers', value: 'Stereo Front-Facing' },
              { name: 'Fingerprint', value: 'Side-mounted' }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Sony Store',
            productUrl: 'https://www.sony.se/electronics/mobiltelefoner/xperia-1-vi',
            productName: 'Sony Xperia 1 VI 256GB Black',
            price: '12990 kr',
            storeUrl: 'https://www.sony.se/electronics/mobiltelefoner/xperia-1-vi'
          },
          {
            company: 'NetOnNet',
            productUrl: 'https://www.netonnet.se/art/sony-xperia-1-vi',
            productName: 'Xperia 1 VI 256GB',
            price: '13290 kr',
            storeUrl: 'https://www.netonnet.se/art/sony-xperia-1-vi'
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#'
          }
        ]
      },
      {
        id: 7,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 8,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      },
      {
        id: 9,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone-16-Pro-Max-256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: 542,
        price: '16090 sek',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 16 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "16 Pro Max" },
              { name: "Release Date", value: "September 2025" },
              { name: "Operating System", value: "iOS 19" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
              { name: "Weight", value: "240g" },
              { name: "Material(s)", value: "Titanium" },
              { name: "Color(s)", value: "Space Black, Silver, Gold, Deep Blue" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "123" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO Super Retina XDR OLED" },
              { name: "Size", value: "6.9 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A19 Pro" },
              { name: "CPU", value: "Hexa-core (2x + 4x efficiency)" },
              { name: "GPU", value: "Apple-designed 6-core GPU" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom, up to 30x digital" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, Cinematic Mode" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4500mAh (typical)" },
              { name: "Charging", value: "Fast charging 35W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 28 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM, CDMA" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 dust/water resistant (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Emergency SOS", value: "Via Satellite" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
          },
          {
            company: 'Company name/logo',
            productUrl: '#',
            productName: 'Länk till produkt med namn på produkt',
            price: null,
            storeUrl: '#',
          }
        ]
      }
    ]
  )
}





