


export function Categoriesdata() {


  return (
    [
      {
        id: 1,
        name: "phones",
        fullname: "phones and wearables",
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
export function Categoriesdatav2() {
  return [
    {
      id: 1,
      name: "Home & Household",
      shortname: "Home",
      slug: "home",
      icon: "bi-house",
      subcategories: [
        {
          id: 2,
          name: "Furniture",
          slug: "furniture",
          subcategories: [
            { id: 21, name: "Sofas", slug: "sofas" },
            { id: 22, name: "Beds", slug: "beds" },
            { id: 23, name: "Tables", slug: "tables" },
            { id: 24, name: "Chairs", slug: "chairs" },
            { id: 25, name: "Storage Furniture", slug: "storage-furniture" }
          ]
        },
        {
          id: 3,
          name: "Kitchen",
          slug: "kitchen",
          subcategories: [
            { id: 31, name: "Cutlery", slug: "cutlery" },
            { id: 32, name: "Glasses", slug: "glasses" },
            { id: 33, name: "Cookware", slug: "cookware" },
            { id: 34, name: "Knives", slug: "knives" },
            { id: 35, name: "Kitchen Accessories", slug: "kitchen-accessories" }
          ]
        },
        {
          id: 232,
          name: "Appliances",
          slug: "appliances",
          subcategories: [
            { id: 41, name: "Coffee Makers", slug: "coffee-makers" },
            { id: 42, name: "Toasters", slug: "toasters" },
            { id: 43, name: "Blenders", slug: "blenders" },
            { id: 44, name: "Microwaves", slug: "microwaves" },
            { id: 45, name: "Vacuum Cleaners", slug: "vacuum-cleaners" }
          ]
        },
        {
          id: 232,
          name: "Appliances",
          slug: "appliances",
          subcategories: [
            { id: 41, name: "Coffee Makers", slug: "coffee-makers" },
            { id: 42, name: "Toasters", slug: "toasters" },
            { id: 43, name: "Blenders", slug: "blenders" },
            { id: 44, name: "Microwaves", slug: "microwaves" },
            { id: 45, name: "Vacuum Cleaners", slug: "vacuum-cleaners" }
          ]
        },
        {
          id: 232,
          name: "Appliances",
          slug: "appliances",
          subcategories: [
            { id: 41, name: "Coffee Makers", slug: "coffee-makers" },
            { id: 42, name: "Toasters", slug: "toasters" },
            { id: 43, name: "Blenders", slug: "blenders" },
            { id: 44, name: "Microwaves", slug: "microwaves" },
            { id: 45, name: "Vacuum Cleaners", slug: "vacuum-cleaners" }
          ]
        },

      ]
    },
    {
      id: 4,
      name: "Garden & Outdoors",
      shortname: "Garden",
      slug: "garden",
      icon: "bi-tree",
      subcategories: []
    },
    {
      id: 5,
      name: "Kids & Family",
      shortname: "Kids",
      slug: "kids",
      icon: "bi-emoji-smile",
      subcategories: []
    },
    {
      id: 6,
      name: "Toys & Hobby",
      shortname: "Toys",
      slug: "toys",
      icon: "bi-puzzle",
      subcategories: []
    },
    {
      id: 7,
      name: "Gaming & ",
      shortname: "Gaming",
      slug: "gaming",
      icon: "bi-controller",
      subcategories: []
    },
    {
      id: 8,
      name: "Computer Products",
      shortname: "Computer",
      slug: "computer",
      icon: "bi-laptop",
      subcategories: []
    },
    {
      id: 9,
      name: "Phones & Wearables",
      shortname: "Phones",
      slug: "phones",
      icon: "bi-phone",
      subcategories: [
        {
          id: 91,
          name: "Smartphones",
          slug: "smartphones",
          subcategories: [

          ]
        },
        {
          id: 92,
          name: "Smartwatches",
          slug: "smartwatches",
          subcategories: [
            { id: 921, name: "Apple Watch", slug: "apple-watch" },
            { id: 922, name: "Wear OS Watches", slug: "wear-os" }
          ]
        },
        {
          id: 93,
          name: "Phone Accessories",
          slug: "phone-accessories",
          subcategories: [
            { id: 931, name: "Chargers", slug: "chargers" },
            { id: 932, name: "Phone Cases", slug: "phone-cases" },
            { id: 933, name: "Screen Protectors", slug: "screen-protectors" }
          ]
        },
        {
          id: 94,
          name: "Fitness Trackers",
          slug: "fitness-trackers",
          subcategories: [] // no sub-subcategories here
        }
      ]
    },
    {
      id: 10,
      name: "Audio & TV",
      shortname: "Audio & TV",
      slug: "audio-tv",
      icon: "bi-speaker",
      subcategories: []
    },
    {
      id: 11,
      name: "Photo & Vedio",
      shortname: "Photo",
      slug: "photo",
      icon: "bi-camera",
      subcategories: []
    },
    {
      id: 12,
      name: "Clothes & Accessories",
      shortname: "Clothes",
      slug: "clothes",
      icon: "bi-backpack",
      subcategories: []
    },
    {
      id: 13,
      name: "Beauty & Care",
      shortname: "Care",
      slug: "care",
      icon: "bi-heart-pulse",
      subcategories: []
    },
    {
      id: 14,
      name: "DIY",
      shortname: "DIY",
      slug: "diy",
      icon: "bi-tools",
      subcategories: []
    },
    {
      id: 15,
      name: "Sport & ",
      shortname: "Sport",
      slug: "sport",
      icon: "bi-dribbble",
      subcategories: []
    },
    {
      id: 16,
      name: "Vehicles & ",
      shortname: "Vehicles",
      slug: "vehicles",
      icon: "bi-truck",
      subcategories: []
    }
  ]
}


export default function Data() {
  return (
    [
      {
        id: 1,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 432,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        name: 'Samsung Galaxy Z Flip 7 Ultra 512GB',
        shortdesc: "A foldable phone that combines style and performance in a pocket-sized powerhouse. Flip it, flex it, love it.",
        image: 'https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-gzf/blueshadow/landscape-front.png',
        thumbnails: [
          'https://example.com/images/zflip7-thumb1.png',
          'https://example.com/images/zflip7-thumb2.png',
          'https://example.com/images/zflip7-thumb3.png',
        ],
        rating: '4,6',
        reviewCount: 4132,
        price: '14990 Kr',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Samsung Galaxy Z Flip 7 Ultra" },
              { name: "Manufacturer", value: "Samsung" },
              { name: "Model Number", value: "Z Flip7 Ultra" },
              { name: "Release Date", value: "August 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "165.1 x 71.9 x 6.9 mm (unfolded)" },
              { name: "Weight", value: "183g" },
              { name: "Material(s)", value: "Aluminum, Glass" },
              { name: "Color(s)", value: "Phantom Black, Cream, Lavender" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "Foldable Dynamic AMOLED 2X" },
              { name: "Size", value: "6.9 inches (main), 3.4 inches (cover)" },
              { name: "Resolution", value: "1080 x 2640 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10+" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "CPU", value: "Octa-core" },
              { name: "GPU", value: "Adreno 800" },
              { name: "RAM", value: "12GB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "50MP (wide), 12MP (ultrawide)" },
              { name: "Front Camera", value: "10MP" },
              { name: "Video Recording", value: "4K at 60fps" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "3700mAh" },
              { name: "Charging", value: "Fast 30W, Wireless 15W" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE" },
              { name: "Wi-Fi", value: "Wi-Fi 7" },
              { name: "Bluetooth", value: "5.3" },
              { name: "USB", value: "USB-C" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IPX8" },
              { name: "Fingerprint", value: "Side-mounted" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Power',
            productUrl: 'https://www.power.se/product/zflip7-ultra',
            productName: 'Samsung Galaxy Z Flip 7 Ultra 512GB Phantom Black',
            price: '14990 kr',
            storeUrl: 'https://www.power.se',
            country: 'swe',
            storeLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Power_logo.svg'
          }
        ]
      },
      {
        id: 4,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus 13 Pro 512GB',
        shortdesc: "Flagship power meets refined design. The OnePlus 13 Pro delivers fluid performance and elite photography for less.",
        image: 'https://image01-eu.oneplus.net/media/202412/16/19774146b6cba4bdcbe55de31e3ae621.png',
        thumbnails: [
          'https://image01-eu.oneplus.net/media/202412/16/f89f33e25b3e0e34a20eec1a504d17d9.png',
          'https://example.com/images/oneplus13-thumb2.png',
          'https://example.com/images/oneplus13-thumb3.png'
        ],
        rating: '3,8',
        reviewCount: 42,
        price: '11990 Kr',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "OnePlus 13 Pro" },
              { name: "Manufacturer", value: "OnePlus" },
              { name: "Model Number", value: "OP13P" },
              { name: "Release Date", value: "March 2025" },
              { name: "Operating System", value: "OxygenOS 15 (Android 15)" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "163.2 x 74.6 x 8.8 mm" },
              { name: "Weight", value: "205g" },
              { name: "Material(s)", value: "Aluminum frame, Ceramic back" },
              { name: "Color(s)", value: "Volcanic Black, Emerald Frost" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO3 AMOLED" },
              { name: "Size", value: "6.82 inches" },
              { name: "Resolution", value: "1440 x 3216 pixels" },
              { name: "Refresh Rate", value: "120Hz" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "CPU", value: "Octa-core" },
              { name: "GPU", value: "Adreno 830" },
              { name: "RAM", value: "16GB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "64MP (wide), 48MP (ultrawide), 32MP (telephoto)" },
              { name: "Front Camera", value: "32MP" },
              { name: "Video Recording", value: "8K at 24fps, 4K at 60fps" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "5500mAh" },
              { name: "Charging", value: "100W Wired, 50W Wireless" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE" },
              { name: "Wi-Fi", value: "Wi-Fi 7" },
              { name: "Bluetooth", value: "5.4" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68" },
              { name: "Fingerprint", value: "Under-display optical" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB Volcanic Black',
            price: '11990 kr',
            storeUrl: 'https://www.elgiganten.se/',
            country: 'swe',
            storeLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Elgiganten_logo.svg'
          }
        ]
      },
      {
        id: 234,
        category: 'Phones',
        categoryId: 1,
        name: 'Apple iPhone 16 Pro Max, 256GB Desert Titanium',
        shortdesc: "A titanium-built flagship with a powerful A17 Pro chip, perfect for photography, gaming, and everyday use.",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://www.apple.com/v/iphone-15-pro/a/images/overview/hero/hero_iphone_15_pro__eqwrvy72748y_large.jpg',
          'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-15-Pro-Lineup_hero_230912_big.jpg.large.jpg',
          'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-titanium-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1692923768284'
        ],
        rating: '1,7',
        reviewCount: 2,
        price: '14490 Kr',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Apple iPhone 15 Pro Max" },
              { name: "Manufacturer", value: "Apple" },
              { name: "Model Number", value: "15 Pro Max" },
              { name: "Release Date", value: "September 2023" },
              { name: "Operating System", value: "iOS 17" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "159.9 x 76.7 x 8.3 mm" },
              { name: "Weight", value: "221g" },
              { name: "Material(s)", value: "Titanium and glass" },
              { name: "Color(s)", value: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium" },
              { name: "Storage size", value: "256GB" },
              { name: "More", value: "eSIM, Dual SIM, Dynamic Island" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "Super Retina XDR OLED" },
              { name: "Size", value: "6.7 inches" },
              { name: "Resolution", value: "1290 x 2796 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10, Dolby Vision" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Apple A17 Pro" },
              { name: "CPU", value: "Hexa-core (2 performance + 4 efficiency)" },
              { name: "GPU", value: "Apple GPU (6-core graphics)" },
              { name: "RAM", value: "8GB" },
              { name: "Storage Options", value: "256GB, 512GB, 1TB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "Triple 48MP (wide), 12MP (ultrawide), 12MP (telephoto)" },
              { name: "Zoom", value: "5x optical zoom" },
              { name: "Front Camera", value: "12MP TrueDepth" },
              { name: "Video Recording", value: "4K at 60fps, ProRes video" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "4422mAh" },
              { name: "Charging", value: "Fast charging 20W, MagSafe wireless charging 15W" },
              { name: "Battery Life", value: "Up to 29 hours talk time" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE, GSM" },
              { name: "Wi-Fi", value: "Wi-Fi 6E" },
              { name: "Bluetooth", value: "Bluetooth 5.3" },
              { name: "NFC", value: "Yes" },
              { name: "USB", value: "USB-C 3.0" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68 (up to 6m for 30 mins)" },
              { name: "Face ID", value: "Yes" },
              { name: "Stereo Speakers", value: "Yes" },
              { name: "Sensors", value: "Face ID, Accelerometer, Gyro, Proximity, Compass, Barometer" },
              { name: "Action Button", value: "Customizable shortcut button" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'NetOnNet',
            productUrl: 'https://www.netonnet.se/art/mobil/mobiltelefon/iphone-15-pro-max',
            productName: 'iPhone 15 Pro Max 256GB',
            price: '14490 kr',
            storeUrl: 'https://www.netonnet.se/',
            country: 'swe',
            storeLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Netonnet_logo.png'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/apple-iphone-15-pro-max-256gb',
            productName: 'Apple iPhone 15 Pro Max 256GB',
            price: '14490 kr',
            storeUrl: 'https://www.elgiganten.se/',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5011311273/iphone-15-pro-max',
            productName: 'iPhone 15 Pro Max 256GB Natural Titanium',
            price: '14990 kr',
            storeUrl: 'https://www.dustinhome.se/',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
          }
        ]
      },
      {
        id: 1,
        category: 'Phones',
        categoryId: 1,
        name: 'Apple iPhone 16 Pro Max, 256GB Desert Titanium, with a camera',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 22,
        price: '16090 Kr',
        desc: [
          {
            id: 421,
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        id: 13213,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 532,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        id: 131231,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 27,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        id: 199,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '0,8',
        reviewCount: 12432,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        id: 166,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 23,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        id: 11111,
        category: 'Phones',
        categoryId: 1,
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 7,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        name: 'iPhone 16 Pro Max 256GB',
        shortdesc: "this is a phone that like to have a phone phone hpne in your hand pocket and som utch more you love me so mutch that you cant to enything else",
        image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        thumbnails: [
          'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
        ],
        rating: '4,8',
        reviewCount: 432,
        price: '16090 Kr',
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
            country: 'norway',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFLnMJdLwwQrcyfAvGm0mn5iJ9nAJ69Qkg&s'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mVdlOCMx6VIBJ8SZcAHSo4_eZ7y8sZhACA&s'
          },
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 5G smartphone 256GB Natural Titanium',
            price: '16090 kr',
            storeUrl: 'https://www.elgiganten.se/product/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://coda.newjobs.com/api/imagesproxy/ms/clu/xw10/xw102828412wjlx/branding/162339/Elgiganten-AB-logo-637148335989618256.png'
          },
          {
            company: 'Dustin Home',
            productUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            productName: 'iPhone 16 Pro Max 256GB Naturligt titan',
            price: '17490 kr',
            storeUrl: 'https://www.dustinhome.se/product/5020021215/iphone-16-pro-max',
            country: 'swe',
            storeLogo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/46d752d1000064000500ebf2/0x0.png'
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
        name: 'Samsung Galaxy Z Flip 7 Ultra 512GB',
        shortdesc: "A foldable phone that combines style and performance in a pocket-sized powerhouse. Flip it, flex it, love it.",
        image: 'https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-gzf/blueshadow/landscape-front.png',
        thumbnails: [
          'https://example.com/images/zflip7-thumb1.png',
          'https://example.com/images/zflip7-thumb2.png',
          'https://example.com/images/zflip7-thumb3.png',
        ],
        rating: '4,6',
        reviewCount: 4132,
        price: '14990 Kr',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "Samsung Galaxy Z Flip 7 Ultra" },
              { name: "Manufacturer", value: "Samsung" },
              { name: "Model Number", value: "Z Flip7 Ultra" },
              { name: "Release Date", value: "August 2025" },
              { name: "Operating System", value: "Android 15" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "165.1 x 71.9 x 6.9 mm (unfolded)" },
              { name: "Weight", value: "183g" },
              { name: "Material(s)", value: "Aluminum, Glass" },
              { name: "Color(s)", value: "Phantom Black, Cream, Lavender" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "Foldable Dynamic AMOLED 2X" },
              { name: "Size", value: "6.9 inches (main), 3.4 inches (cover)" },
              { name: "Resolution", value: "1080 x 2640 pixels" },
              { name: "Refresh Rate", value: "120Hz" },
              { name: "HDR", value: "HDR10+" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "CPU", value: "Octa-core" },
              { name: "GPU", value: "Adreno 800" },
              { name: "RAM", value: "12GB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "50MP (wide), 12MP (ultrawide)" },
              { name: "Front Camera", value: "10MP" },
              { name: "Video Recording", value: "4K at 60fps" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "3700mAh" },
              { name: "Charging", value: "Fast 30W, Wireless 15W" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE" },
              { name: "Wi-Fi", value: "Wi-Fi 7" },
              { name: "Bluetooth", value: "5.3" },
              { name: "USB", value: "USB-C" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IPX8" },
              { name: "Fingerprint", value: "Side-mounted" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Power',
            productUrl: 'https://www.power.se/product/zflip7-ultra',
            productName: 'Samsung Galaxy Z Flip 7 Ultra 512GB Phantom Black',
            price: '14990 kr',
            storeUrl: 'https://www.power.se',
            country: 'swe',
            storeLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Power_logo.svg'
          }
        ]
      },
      {
        id: 4,
        category: 'Phones',
        categoryId: 1,
        name: 'OnePlus 13 Pro 512GB',
        shortdesc: "Flagship power meets refined design. The OnePlus 13 Pro delivers fluid performance and elite photography for less.",
        image: 'https://image01-eu.oneplus.net/media/202412/16/19774146b6cba4bdcbe55de31e3ae621.png',
        thumbnails: [
          'https://image01-eu.oneplus.net/media/202412/16/f89f33e25b3e0e34a20eec1a504d17d9.png',
          'https://example.com/images/oneplus13-thumb2.png',
          'https://example.com/images/oneplus13-thumb3.png'
        ],
        rating: '3,8',
        reviewCount: 42,
        price: '11990 Kr',
        desc: [
          {
            id: 1,
            name: "Information",
            data: [
              { name: "Name", value: "OnePlus 13 Pro" },
              { name: "Manufacturer", value: "OnePlus" },
              { name: "Model Number", value: "OP13P" },
              { name: "Release Date", value: "March 2025" },
              { name: "Operating System", value: "OxygenOS 15 (Android 15)" }
            ]
          },
          {
            id: 2,
            name: "Specifications",
            data: [
              { name: "Dimensions", value: "163.2 x 74.6 x 8.8 mm" },
              { name: "Weight", value: "205g" },
              { name: "Material(s)", value: "Aluminum frame, Ceramic back" },
              { name: "Color(s)", value: "Volcanic Black, Emerald Frost" },
              { name: "Storage size", value: "512GB" }
            ]
          },
          {
            id: 3,
            name: "Display",
            data: [
              { name: "Type", value: "LTPO3 AMOLED" },
              { name: "Size", value: "6.82 inches" },
              { name: "Resolution", value: "1440 x 3216 pixels" },
              { name: "Refresh Rate", value: "120Hz" }
            ]
          },
          {
            id: 4,
            name: "Performance",
            data: [
              { name: "Chipset", value: "Snapdragon 8 Gen 4" },
              { name: "CPU", value: "Octa-core" },
              { name: "GPU", value: "Adreno 830" },
              { name: "RAM", value: "16GB" }
            ]
          },
          {
            id: 5,
            name: "Camera",
            data: [
              { name: "Main Camera", value: "64MP (wide), 48MP (ultrawide), 32MP (telephoto)" },
              { name: "Front Camera", value: "32MP" },
              { name: "Video Recording", value: "8K at 24fps, 4K at 60fps" }
            ]
          },
          {
            id: 6,
            name: "Battery",
            data: [
              { name: "Capacity", value: "5500mAh" },
              { name: "Charging", value: "100W Wired, 50W Wireless" }
            ]
          },
          {
            id: 7,
            name: "Connectivity",
            data: [
              { name: "Network", value: "5G, LTE" },
              { name: "Wi-Fi", value: "Wi-Fi 7" },
              { name: "Bluetooth", value: "5.4" },
              { name: "USB", value: "USB-C 3.2" }
            ]
          },
          {
            id: 8,
            name: "Other Features",
            data: [
              { name: "Water Resistance", value: "IP68" },
              { name: "Fingerprint", value: "Under-display optical" }
            ]
          }
        ],
        url: '/categorys/product.html',
        pricelist: [
          {
            company: 'Elgiganten',
            productUrl: 'https://www.elgiganten.se/product/oneplus-13-pro',
            productName: 'OnePlus 13 Pro 512GB Volcanic Black',
            price: '11990 kr',
            storeUrl: 'https://www.elgiganten.se/',
            country: 'swe',
            storeLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Elgiganten_logo.svg'
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





