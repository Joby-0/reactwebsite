import React from 'react'


export function Categoriesdata() {
    const cData = [
        {
            id: 1,
            cName: "phones",
            underC: [
                {
                    id: 111,
                    uCName: "smartphones",
                    uCDesc: "Smartphones are powerful handheld devices used for communication, browsing, and entertainment."
                },
                {
                    id: 112,
                    uCName: "phonecases",
                    uCDesc: "Phone cases provide protection and style for your smartphone."
                },
                {
                    id: 113,
                    uCName: "chargers",
                    uCDesc: "Chargers and adapters to power your devices efficiently."
                }
            ]
        },
        {
            id: 2,
            cName: "gaming",
            underC: [
                {
                    id: 221,
                    uCName: "consoles",
                    uCDesc: "Gaming consoles like PlayStation, Xbox, and Nintendo Switch."
                },
                {
                    id: 222,
                    uCName: "pcgaming",
                    uCDesc: "Desktops, laptops, and components built for PC gaming."
                },
                {
                    id: 223,
                    uCName: "accessories",
                    uCDesc: "Gaming accessories including controllers, headsets, and keyboards."
                },
                {
                    id: 224,
                    uCName: "games",
                    uCDesc: "Video games for various platforms and genres."
                }
            ]
        },
        {
            id: 3,
            cName: "toys",
            underC: [
                {
                    id: 331,
                    uCName: "educational",
                    uCDesc: "Toys designed to help children learn and develop skills."
                },
                {
                    id: 332,
                    uCName: "actionfigures",
                    uCDesc: "Action figures and collectibles from popular movies and series."
                },
                {
                    id: 333,
                    uCName: "buildingblocks",
                    uCDesc: "LEGO and other building sets for creativity and construction."
                }
            ]
        },
        {
            id: 4,
            cName: "audioandtv",
            underC: [
                {
                    id: 441,
                    uCName: "speakers",
                    uCDesc: "Home and portable speakers with high-quality sound."
                },
                {
                    id: 442,
                    uCName: "headphones",
                    uCDesc: "Wired and wireless headphones for immersive listening."
                },
                {
                    id: 443,
                    uCName: "televisions",
                    uCDesc: "LED, OLED, and QLED TVs from various brands."
                },
                {
                    id: 444,
                    uCName: "soundbars",
                    uCDesc: "Soundbars that enhance your home theater experience."
                }
            ]
        }
    ];

    return cData;
}


export default function Data() {
  return (
    [
        {
          id: 1,
          category: 'Phones',
          name: 'iPhone 16 Pro Max, 256GB',
          image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          thumbnails: [
            'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
            'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
            'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
          ],
          rating: 542,
          price: '16090 sek',
          desc:[
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
          name: 'Samsung Galaxy S23 Ultra',
          image: 'https://example.com/product2.jpg',
          rating: 350,
          price: '12990 sek',
          url: '/categorys/product2.html'
        },
        {
          id: 3,
          category: 'Phones',
          name: 'OnePlus 11 Pro',
          image: 'https://example.com/product3.jpg',
          rating: 300,
          price: '11990 sek',
          url: '/categorys/product3.html'
        },
        {
          id: 4,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 5,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 6,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        ,
        {
          id: 8,
          category: 'Phones',
          name: 'Google Pixel 8 Pro',
          image: 'https://example.com/product4.jpg',
          rating: 100,
          price: '14990 sek',
          url: '/categorys/product4.html'
        }
        // Add more products as needed
      ]
  )
}


export function Productdata() {
    

    return (
        [
            {
                id: 1001,
                pName: "Apple iPhone 16 Pro Max, 256GB",
                rating: 4.5,
                lowersPrice: "16090 kr",
                image: 'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
                thumbnails: [
                    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium_AV1_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NW9lRVVkRmJ5ZE03VysydEdnMXpSNEIwMUtnLzBpRitTOTN1SmJ4bU1Ma3JvNVA5M0N2RTZaVllVQ29BYjdEajZhV2hqd1JsL3h2amVwdmE3TWNmbWpaWWNmaysybmtiNU9od3gxY1JjSEE1Q1Q2ZTVQclFvTi9BaFdTUkQwZEsw&traceId=1',
                    'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
                    'https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75',
                ],
                desc: [
                    {
                        id: 1,
                        name: "Information",
                        data: [
                            { name: "Name", value: "Apple iPhone 16 Pro Max" },
                            { name: "Manufacturer", value: "Apple" },
                            { name: "Model Number", value: "16 pro max" }
                        ]
                    },
                    {
                        id: 2,
                        name: "Specifications",
                        data: [
                            { name: "Dimensions", value: "160.8 x 78.1 x 7.65 mm" },
                            { name: "Weight", value: "240g" },
                            { name: "Material(s)", value: "Titanium" }
                        ]
                    }
                ],
                stores: [
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
                id: 1002,
                pName: "Samsung Galaxy S24 Ultra, 512GB",
                rating: 4.7,
                lowersPrice: "15999 kr",
                desc: [
                    {
                        id: 1,
                        name: "Information",
                        data: [
                            { name: "Name", value: "Samsung Galaxy S24 Ultra" },
                            { name: "Manufacturer", value: "Samsung" },
                            { name: "Model Number", value: "S24U" }
                        ]
                    },
                    {
                        id: 2,
                        name: "Specifications",
                        data: [
                            { name: "Dimensions", value: "162.3 x 79.0 x 8.6 mm" },
                            { name: "Weight", value: "234g" },
                            { name: "Material(s)", value: "Aluminum & Glass" }
                        ]
                    }
                ],
                stores: [
                    {
                        name: "Samsung Store",
                        price: "15999 kr",
                        stock: true,
                        link: "https://samsung.com/s24-ultra"
                    },
                    {
                        name: "Elgiganten",
                        price: "16299 kr",
                        stock: true,
                        link: "https://elgiganten.se/s24-ultra"
                    }
                ]
            }
        ]
    )
}
