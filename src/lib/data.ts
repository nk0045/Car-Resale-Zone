export type Car = {
  id: number;
  brand: string;
  name: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  yearsUsed: number;
  kilometers: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  owners: number;
  location: string;
  description: string;
  additionalImages: string[];
};

export const carData: Car[] = [
  // Keep existing 6 cars
  {
    id: 1,
    brand: "Hyundai",
    name: "Verna",
    model: "SX",
    year: 2021,
    price: 1200000, // 12 Lakhs
    imageUrl: "https://imgd.aeplcdn.com/642x336/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 25000,
    mileage: 18.5,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Coimbatore",
    description: "Well-maintained Hyundai Verna SX with single owner. Regular service history available.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmArJu_-hZ6_8kLNJNbNqkWQPUYFlTuJoEbg&s",
      "https://images10.gaadi.com/usedcar_image/4525411/original/processed_bb3752387e1f61ce122ba7d526642a0a.jpg?imwidth=320"
    ]
  },
  {
    id: 2,
    brand: "Maruti Suzuki",
    name: "Swift",
    model: "ZXi",
    year: 2020,
    price: 750000, // 7.5 Lakhs
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 35000,
    mileage: 22.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Fuel-efficient and reliable Maruti Swift in excellent condition with all service records.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2tPpnI7DCxXnEY8ThCjC37I07w4LU3Ke7A&s",
      "https://apollo.olx.in/v1/files/i9d4eki11gd3-ADVIN/image"
    ]
  },
  {
    id: 3,
    brand: "Toyota",
    name: "Fortuner",
    model: "4x4 AT",
    year: 2019,
    price: 3500000, // 35 Lakhs
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
    yearsUsed: 4,
    kilometers: 45000,
    mileage: 12.5,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Madurai",
    description: "Premium Toyota Fortuner with full service history and excellent condition.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVjj7rzDM3_kB8QtV-gc6FZaCr-Ui1CeGFg&s",
      "https://manage.toyotautrust.in/Inventory-Images/desk/2025/1/c9880079-85fb-4be9-bc12-04400fdcd3b4/48294/1-big.jpg"
    ]
  },
  {
    id: 4,
    brand: "Honda",
    name: "City",
    model: "ZX CVT",
    year: 2020,
    price: 1100000, // 11 Lakhs
    imageUrl: "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2024/3/23/honda-city-2024-1-ad16-171116521478291114749-0-0-539-862-crop-17111652986111414755405.png",
    yearsUsed: 3,
    kilometers: 30000,
    mileage: 20.2,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Salem",
    description: "Well-maintained Honda City with premium features and low mileage.",
    additionalImages: [
      "https://images.hondaautoterrace.com/stock_image/22983/22983__used_car_21983_1706156573_wm.jpg?v=1706157031",
      "https://www.bajajfinserv.in/prod/hello-ar/dev/uploads/6805e702851d12cb59b9448c/85067475-1c9d-4217-9342-b2c67f97fbe4/slot/1-Front.jpg"
    ]
  },
  {
    id: 5,
    brand: "Kia",
    name: "Seltos",
    model: "GTX Plus",
    year: 2021,
    price: 1450000, // 14.5 Lakhs
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 22000,
    mileage: 16.8,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Coimbatore",
    description: "Feature-packed Kia Seltos with panoramic sunroof and advanced driver assistance systems.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3947140_140685_2_1746190758049.jpg?q=80",
      "https://5.imimg.com/data5/ANDROID/Default/2022/8/PZ/QK/BF/135105608/product-jpeg-500x500.jpg"
    ]
  },
  {
    id: 6,
    brand: "BMW",
    name: "3 Series",
    model: "320d Sport",
    year: 2018,
    price: 3200000, // 32 Lakhs
    imageUrl: "https://images8.alphacoders.com/833/833705.jpg",
    yearsUsed: 5,
    kilometers: 40000,
    mileage: 18.5,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Luxury BMW sedan with sporty handling and premium features.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLnSvws_oNDnrWlwi7mDCKAknMTPD2rQlNQ&s",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3927574_56858_1744957564991.jpeg?q=80"
    ]
  },
  {
    id: 7,
    brand: "Hyundai",
    name: "Creta",
    model: "SX(O)",
    year: 2021,
    price: 1550000,
    imageUrl: "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 19000,
    mileage: 16.8,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Premium Hyundai Creta with panoramic sunroof and all the bells and whistles.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3919295_146091_1744432062548.jpg?q=80",
      "https://img.autocarindia.com/ExtraImages/20180615040643_Hyundai-Creta-used-front-st.jpg?w=700&c=1"
    ]
  },
  {
    id: 8,
    brand: "Tata",
    name: "Nexon",
    model: "XZ+",
    year: 2022,
    price: 980000,
    imageUrl: "https://media.cars24.com/hello-ar/dev/uploads/no_bg/e8e2f76c-138e-11f0-bd36-02ede2007fbe/67f38c262ba85833d15af99a/f8adeea2-340c-4b8a-92b6-afb2c5baa604/slot/10713445719-7ec65c9d42df427ca9c19b4c33c72056-Exterior-7.png",
    yearsUsed: 1,
    kilometers: 12000,
    mileage: 19.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Safe and reliable Tata Nexon with 5-star safety rating and impeccable maintenance.",
    additionalImages: [
      "https://5.imimg.com/data5/ANDROID/Default/2024/5/422858079/JS/TJ/RG/10698679/product-jpeg-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gK5moSsFubisyzQiAlGtxBNycVFfLMUpHA&s"
    ]
  },
  {
    id: 9,
    brand: "Mahindra",
    name: "XUV700",
    model: "AX7L",
    year: 2022,
    price: 2100000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    yearsUsed: 1,
    kilometers: 15000,
    mileage: 14.5,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Madurai",
    description: "Feature-rich Mahindra XUV700 with advanced driver assistance systems and premium sound system.",
    additionalImages: [
      "https://apollo.olx.in/v1/files/solzeydqegnu1-IN/image",
      "https://imgd-ct.aeplcdn.com/300x225/vimages/202503/3874540_26327_1_1741753854187.jpg?q=40"
    ]
  },
  {
    id: 10,
    brand: "Toyota",
    name: "Innova Crysta",
    model: "VX",
    year: 2020,
    price: 1950000,
    imageUrl: "https://imgd.aeplcdn.com/642x336/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 45000,
    mileage: 13.5,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Spacious and comfortable Toyota Innova with impeccable maintenance record.",
    additionalImages: [
      "https://www.xdrivecars.com/assets/images/car_images/Used-cars-in-trivandrum--1112202492151.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AgesmaG0ERcNcVKGfV2kHVwdxGqyz7IdtA&s"
    ]
  },
  {
    id: 11,
    brand: "Honda",
    name: "Amaze",
    model: "VX CVT",
    year: 2020,
    price: 780000,
    imageUrl: "https://img.autocarindia.com/model/uploads/modelimages/Honda-Amaze-061220241739.jpg?w=750&h=500&q=90&c=1",
    yearsUsed: 3,
    kilometers: 32000,
    mileage: 21.3,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Compact yet spacious Honda Amaze with CVT transmission for smooth city commuting.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4511021/original/c381edc0966996ebd3541d1fdf347555.JPG?imwidth=420",
      "https://images10.gaadi.com/usedcar_image/4521739/original/243b90e1cf95362af05ff27670bfc620.jpg?imwidth=420"
    ]
  },
  {
    id: 12,
    brand: "Mercedes-Benz",
    name: "C-Class",
    model: "C220d",
    year: 2019,
    price: 4200000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    yearsUsed: 4,
    kilometers: 38000,
    mileage: 15.8,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Elegant Mercedes C-Class with premium interiors and comprehensive service history.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4491362/original/processed_07dfe0e53731c7d244c8320026a97e70.jpeg?imwidth=420",
      "https://imgd-ct.aeplcdn.com/640X480/image/used/aviuopw0ukik.jpg?q=80"
    ]
  },
  {
    id: 13,
    brand: "Volkswagen",
    name: "Polo",
    model: "GT TSI",
    year: 2019,
    price: 820000,
    imageUrl: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80&q=80",
    yearsUsed: 4,
    kilometers: 35000,
    mileage: 16.5,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Salem",
    description: "Sporty Volkswagen Polo GT with turbocharged engine and excellent handling.",
    additionalImages: [
      "https://d308ljkq6e62o1.cloudfront.net/img/ExP79UTwRtuHfFUn0bwpbA/file.JPG",
      "https://apollo.olx.in/v1/files/buu4nhoyu3e93-IN/image"
    ]
  },
  {
    id: 14,
    brand: "Maruti Suzuki",
    name: "Baleno",
    model: "Alpha",
    year: 2021,
    price: 850000,
    imageUrl: "https://imgd.aeplcdn.com/1056x594/n/9herrua_1559465.jpg?q=80",
    yearsUsed: 2,
    kilometers: 22000,
    mileage: 23.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Madurai",
    description: "Premium Maruti Baleno with all the features and excellent fuel efficiency.",
    additionalImages: [
      "https://www.xdrivecars.com/assets/images/products/Used-cars-in-trivandrum--170120255718.webp",
      "https://media.cars24.com/hello-ar/dev/uploads/68172ebc6c59305ab664cba6/9452162e-c50b-4dd5-bef3-ec4f7b3057c0/slot/2-Right-Front-Diagonal.jpg"
    ]
  },
  {
    id: 15,
    brand: "Kia",
    name: "Sonet",
    model: "HTX",
    year: 2021,
    price: 1100000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 19000,
    mileage: 18.2,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Feature-packed Kia Sonet with all the modern amenities and excellent build quality.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3940062_150510_1_1745731544889.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202503/3897319_144309_1_1743062461761.jpg"
    ]
  },
  {
    id: 16,
    brand: "Tata",
    name: "Harrier",
    model: "XZ+",
    year: 2020,
    price: 1750000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 28000,
    mileage: 14.6,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Bold and spacious Tata Harrier with premium interiors and commanding road presence.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysEzmaiIRdt0sOezcC79DPBIaKauN4dha_g&s",
      "https://images10.gaadi.com/usedcar_image/4524444/original/processed_c88f64ec43b7816dd208f25762fd43c5.jpg?imwidth=320"
    ]
  },
  {
    id: 17,
    brand: "Hyundai",
    name: "i20",
    model: "Asta",
    year: 2021,
    price: 920000,
    imageUrl: "https://imgd.aeplcdn.com/642x336/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 18000,
    mileage: 21.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Premium Hyundai i20 with excellent fit and finish and loaded with features.",
    additionalImages: [
      "https://d308ljkq6e62o1.cloudfront.net/img/EOzTUJ8fT6W7Y38nbeucXQ/file.JPG",
      "https://5.imimg.com/data5/ANDROID/Default/2023/5/311664635/JD/MT/IT/38692988/product-jpeg.jpg"
    ]
  },
  {
    id: 18,
    brand: "Toyota",
    name: "Glanza",
    model: "V",
    year: 2020,
    price: 750000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 24000,
    mileage: 23.8,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Madurai",
    description: "Reliable Toyota Glanza with excellent fuel efficiency and low maintenance costs.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70yPXvO3i2_0y24erFxU3NoCN3283wfrIIg&s",
      "https://d308ljkq6e62o1.cloudfront.net/img/QU0Z0E3OQ7mOkXZ1z7xQjg/file.JPG"
    ]
  },
  {
    id: 19,
    brand: "Mahindra",
    name: "Thar",
    model: "LX",
    year: 2021,
    price: 1850000,
    imageUrl: "https://imgd.aeplcdn.com/1056x594/n/rskpp0b_1638613.jpg?q=80",
    yearsUsed: 2,
    kilometers: 21000,
    mileage: 13.5,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Iconic Mahindra Thar with excellent off-road capabilities and modern features.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4467527/original/processed_649156babac67e3fa02cfb7002f258aa.jpeg?imwidth=320",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfx36AR5sz4CFwCjgUwXdlNKnwf8v9aciQSA&s"
    ]
  },
  {
    id: 20,
    brand: "Honda",
    name: "Jazz",
    model: "VX",
    year: 2019,
    price: 720000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/46891/jazz-exterior-right-front-three-quarter.jpeg?q=80",
    yearsUsed: 4,
    kilometers: 36000,
    mileage: 18.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Spacious Honda Jazz with versatile seating configurations and excellent reliability.",
    additionalImages: [
      "https://img-in-2.trovit.com/1kU91WNY1p1l/1kU91WNY1p1l.1_11.jpg",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3907408_150510_2_1744173585962.jpg?q=80"
    ]
  },
  {
    id: 21,
    brand: "Audi",
    name: "A4",
    model: "Premium Plus",
    year: 2019,
    price: 3500000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
    yearsUsed: 4,
    kilometers: 32000,
    mileage: 14.2,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Elegant Audi A4 with premium interiors and comprehensive service history.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3942971_128283_1_1745918629116.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3946407_34604_5_1746477201164.jpg?q=80"
    ]
  },
  {
    id: 22,
    brand: "Tata",
    name: "Altroz",
    model: "XZ+",
    year: 2021,
    price: 850000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/32597/tata-altroz-right-front-three-quarter20.jpeg?q=80",
    yearsUsed: 2,
    kilometers: 19000,
    mileage: 22.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Premium Tata Altroz with 5-star safety rating and excellent build quality.",
    additionalImages: [
      "https://www.xdrivecars.com/assets/images/car_images/Used-cars-in-trivandrum--1306202474905.webp",
      "https://images10.gaadi.com/usedcar_image/4529111/original/44597eb5ec3d27f9628c9bbd22bae2ab.JPG?imwidth=420"
    ]
  },
  {
    id: 23,
    brand: "Skoda",
    name: "Rapid",
    model: "Monte Carlo",
    year: 2020,
    price: 980000,
    imageUrl: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1648457794.jpg?width=420&q=60?w=420&q=60",
    yearsUsed: 3,
    kilometers: 26000,
    mileage: 16.8,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Madurai",
    description: "Sporty Skoda Rapid with excellent build quality and precise handling.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTur_ekdFlK3g1Sjvq5tARiJNL4C-x0PSixbQ&s",
      "https://spn-sta.spinny.com/blog/20230623154033/spinny-assured-skoda-rapid-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6"
    ]
  },
  {
    id: 24,
    brand: "Mahindra",
    name: "Scorpio",
    model: "S11",
    year: 2020,
    price: 1450000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 32000,
    mileage: 14.2,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Rugged Mahindra Scorpio with commanding road presence and powerful performance.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3912969_150510_1_1744179075937.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3926228_56858_1744875159502.jpeg"
    ]
  },
  {
    id: 25,
    brand: "Maruti Suzuki",
    name: "Ciaz",
    model: "Alpha",
    year: 2020,
    price: 920000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 28000,
    mileage: 20.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Comfortable Maruti Ciaz with spacious interiors and excellent fuel efficiency.",
    additionalImages: [
      "https://indususedcars.com/uploads/cars/422714_Veh1_55%20(4).jpg",
      "https://mda.spinny.com/sp-file-system/public/2025-04-04/29343d3e45d54571abfba8c5b55b5dcc/raw/file.JPG"
    ]
  },
  {
    id: 26,
    brand: "Hyundai",
    name: "Venue",
    model: "SX",
    year: 2021,
    price: 980000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 18000,
    mileage: 17.5,
    fuelType: "Petrol",
    transmission: "DCT",
    owners: 1,
    location: "Salem",
    description: "Feature-rich Hyundai Venue with dual-clutch transmission and connected car features.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4397042/original/df2d4645c32b275248deadaef7a909df.JPG?imwidth=420",
      "https://media.cars24.com/hello-ar/dev/uploads/67f136a07705518eddb8c22e/c3118453-4bb3-4768-8059-e8abb8b2f7ff/slot/16408929761-2621a635ba424ba88a542f9339f6d2f5-Exterior-7.jpg"
    ]
  },
  // Add as many more car entries as needed until we reach 46 total (including the original 6)
  {
    id: 27,
    brand: "Toyota",
    name: "Yaris",
    model: "VX",
    year: 2019,
    price: 820000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/32943/yaris-exterior-right-front-three-quarter.jpeg?q=80",
    yearsUsed: 4,
    kilometers: 32000,
    mileage: 17.8,
    fuelType: "Petrol",
    transmission: "CVT",
    owners: 1,
    location: "Madurai",
    description: "Safe and reliable Toyota Yaris with 7 airbags and excellent build quality.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iqftGYr6b_KrJafI8RXugTe9eD7F6cZAGw&s",
      "https://marketplace-cdn.cars24.com/production/17413044777/main%20image/2025-04-04/car_replace_bg_cc5a05cc-3997-4f59-bcdf-b1a0fbe8cd97.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto"
    ]
  },
  {
    id: 28,
    brand: "Volkswagen",
    name: "Vento",
    model: "Highline Plus",
    year: 2020,
    price: 950000,
    imageUrl: "https://imgd.aeplcdn.com/642x336/cw/ec/26563/Volkswagen-Vento-Right-Front-Three-Quarter-169094.jpg?wm=0&q=80",
    yearsUsed: 3,
    kilometers: 26000,
    mileage: 16.2,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Coimbatore",
    description: "Solid Volkswagen Vento with excellent build quality and refined engine.",
    additionalImages: [
      "https://dko949vgsquyj.cloudfront.net/dms-stock-images/951134/1/1732949051WhatsApp%20Image%202024-11-30%20at%2012.07.25%20PM.jpeg",
      "https://spn-sta.spinny.com/blog/20220228142331/Spinny-Assured-VW-Vento-header.jpg"
    ]
  },
  {
    id: 29,
    brand: "Honda",
    name: "WR-V",
    model: "VX",
    year: 2021,
    price: 880000,
    imageUrl: "https://imgd-ct.aeplcdn.com/1280x720/cw/ec/25833/Honda-WRV-Exterior-118956.jpg?wm=0&q=80",
    yearsUsed: 2,
    kilometers: 19000,
    mileage: 18.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Versatile Honda WR-V with sunroof and excellent ground clearance.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3938682_156993_1745650487938.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3938682_156993_1745650487904.jpg?q=80"
    ]
  },
  {
    id: 30,
    brand: "Maruti Suzuki",
    name: "Ertiga",
    model: "ZXI Plus",
    year: 2021,
    price: 1050000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 22000,
    mileage: 19.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Spacious Maruti Ertiga with 7-seater layout and excellent fuel efficiency.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4476098/original/processed_9263eb15-caff-480a-a627-603c5a048182.jpg?imwidth=320",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQTHm2Y39yBeHuQYuc2aKuoK1exkn5JJpww&s"
    ]
  },
  {
    id: 31,
    brand: "Tata",
    name: "Safari",
    model: "XZ+",
    year: 2021,
    price: 1850000,
    imageUrl: "https://imgd.aeplcdn.com/1056x594/n/ff8nqbb_1693421.jpg?q=80",
    yearsUsed: 2,
    kilometers: 24000,
    mileage: 14.5,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Madurai",
    description: "Luxurious Tata Safari with three-row seating and premium features.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3919640_56858_1744443879826.jpeg",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3919640_56858_1744443913108.jpeg?q=80"
    ]
  },
  {
    id: 32,
    brand: "Kia",
    name: "Carnival",
    model: "Prestige",
    year: 2020,
    price: 2850000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-front-three-quarter-19.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 32000,
    mileage: 13.9,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Premium Kia Carnival with luxurious captain seats and spacious interiors.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3939195_8366_2_1745662296565.jpg?q=80",
      "https://images10.gaadi.com/usedcar_image/4502317/original/processed_13dd20feb2d8a20fab76cfd1d019b2a9.jpg?imwidth=320"
    ]
  },
  {
    id: 33,
    brand: "Renault",
    name: "Triber",
    model: "RXZ",
    year: 2021,
    price: 680000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/renault-triber-night-day-edition1726481534769.jpg?q=80",
    yearsUsed: 2,
    kilometers: 18000,
    mileage: 19.8,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Spacious Renault Triber with modular seating and excellent versatility.",
    additionalImages: [
      "https://d308ljkq6e62o1.cloudfront.net/img/uAYxLU8_Sc6LhIq1QDC7Dw/file.JPG",
      "https://imgd.aeplcdn.com/640X480/vimages/202502/3855279_141309_1_1740670385718.jpg?q=80"
    ]
  },
  {
    id: 34,
    brand: "Ford",
    name: "EcoSport",
    model: "Titanium",
    year: 2019,
    price: 850000,
    imageUrl: "https://imgd.aeplcdn.com/642x336/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0&q=80",
    yearsUsed: 4,
    kilometers: 36000,
    mileage: 17.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Sturdy Ford EcoSport with excellent dynamics and good build quality.",
    additionalImages: [
      "https://d308ljkq6e62o1.cloudfront.net/img/_2MhrZpyRseS2D60yh9hkg/file.JPG",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXva4GBXJ3WJWV9kYYxr9rvn7TKlxSkTOjHQ&s"
    ]
  },
  {
    id: 35,
    brand: "Nissan",
    name: "Magnite",
    model: "XV Premium",
    year: 2022,
    price: 950000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    yearsUsed: 1,
    kilometers: 12000,
    mileage: 19.5,
    fuelType: "Petrol",
    transmission: "CVT",
    owners: 1,
    location: "Madurai",
    description: "Feature-packed Nissan Magnite with good ground clearance and modern features.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMU1vHSCRoJ8bperMYElJuADSpGqtsbaBqA&s",
      "https://media.cars24.com/hello-ar/dev/uploads/6819bb9cc9626de7f15926a4/0ae227da-7822-48a0-a669-714593c42c8f/slot/13725247783-b90fd0dac0204220b1152de021d5b3fa-Exterior-7.jpg"
    ]
  },
  {
    id: 36,
    brand: "MG",
    name: "Hector",
    model: "Sharp",
    year: 2020,
    price: 1650000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-86.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 28000,
    mileage: 14.8,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Chennai",
    description: "Feature-rich MG Hector with connected car technology and panoramic sunroof.",
    additionalImages: [
      "https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/d52e100aa/5ac9e5bd-9238-472d-ae25-596034cf4694.jpg?imwidth=420",
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3946377_6459_1_1746170372774.jpg?q=80"
    ]
  },
  {
    id: 37,
    brand: "Jeep",
    name: "Compass",
    model: "Longitude",
    year: 2019,
    price: 1850000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-83.jpeg?isig=0&q=80",
    yearsUsed: 4,
    kilometers: 38000,
    mileage: 14.2,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: 1,
    location: "Coimbatore",
    description: "Premium Jeep Compass with excellent build quality and off-road capabilities.",
    additionalImages: [
      "https://images10.gaadi.com/usedcar_image/4469920/original/d7f1dedee3b60d96ab469d927cb0fa3f.jpg?imwidth=420",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3934172_151713_1_1745388235787.jpg"
    ]
  },
  {
    id: 38,
    brand: "Skoda",
    name: "Kushaq",
    model: "Style",
    year: 2022,
    price: 1450000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/175993/kushaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    yearsUsed: 1,
    kilometers: 11000,
    mileage: 17.2,
    fuelType: "Petrol",
    transmission: "DSG",
    owners: 1,
    location: "Salem",
    description: "Modern Skoda Kushaq with European build quality and advanced features.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3934726_84710_1745403165774.jpeg",
      "https://imgd-ct.aeplcdn.com/640X480/vimages/202504/3934726_84710_1745403166294.jpeg?q=80"
    ]
  },
  {
    id: 39,
    brand: "Maruti Suzuki",
    name: "S-Cross",
    model: "Alpha",
    year: 2020,
    price: 980000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/46482/s-cross-petrol-exterior-right-front-three-quarter.jpeg?q=80",
    yearsUsed: 3,
    kilometers: 26000,
    mileage: 18.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Madurai",
    description: "Reliable Maruti S-Cross with sturdy construction and good ground clearance.",
    additionalImages: [
      "https://mda.spinny.com/sp-file-system/public/2025-04-02/a3ff263878e24bbeb272d57fd8c0edf6/raw/file.JPG?q=85&w=350",
      "https://imgd.aeplcdn.com/300x225/image/used/y307wyrorxhd.jpg?q=80"
    ]
  },
  {
    id: 40,
    brand: "Toyota",
    name: "Urban Cruiser",
    model: "Premium",
    year: 2021,
    price: 950000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter-61.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 19000,
    mileage: 17.8,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: 1,
    location: "Chennai",
    description: "Reliable Toyota Urban Cruiser with good ground clearance and premium features.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3906355_141309_1_1743667622312.jpg",
      "https://imgd.aeplcdn.com/640X480/vimages/202503/3899732_84710_1743155121505.jpeg?q=80"
    ]
  },
  {
    id: 41,
    brand: "Hyundai",
    name: "Alcazar",
    model: "Prestige",
    year: 2022,
    price: 1850000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-facelift-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
    yearsUsed: 1,
    kilometers: 14000,
    mileage: 14.5,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: 1,
    location: "Coimbatore",
    description: "Premium Hyundai Alcazar with six captain seats and panoramic sunroof.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3931371_143666_1_1745215929621.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/image/used/46yji0mpjl1l.jpg?q=80"
    ]
  },
  {
    id: 42,
    brand: "Mahindra",
    name: "XUV300",
    model: "W8 Optional",
    year: 2020,
    price: 980000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148709.jpeg?isig=0&q=80",
    yearsUsed: 3,
    kilometers: 25000,
    mileage: 16.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Salem",
    description: "Safe Mahindra XUV300 with 5-star safety rating and premium features.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3944903_56858_1746079717009.jpeg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3944903_56858_1746079727345.jpeg?q=80"
    ]
  },
  {
    id: 43,
    brand: "Tata",
    name: "Tigor",
    model: "XZ Plus",
    year: 2021,
    price: 750000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-22.jpeg?isig=0&q=80",
    yearsUsed: 2,
    kilometers: 18000,
    mileage: 20.5,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: 1,
    location: "Madurai",
    description: "Stylish Tata Tigor with excellent boot space and good build quality.",
    additionalImages: [
      "https://media.cars24.com/hello-ar/dev/uploads/no_bg/bed299ce-2a7b-11f0-bd37-02ede2007fbe/681a095362e42f9b798a26bb/a973fe21-ca21-40d1-ac0d-71362be25069/slot/21632741777-c7a1fa9a7704467190ebe1c391d58f99-Exterior-7.png?w=240&format=auto&dpr=2&pad=48,0,0,0&trim-color=auto",
      "https://images10.gaadi.com/usedcar_image/4397087/original/507f1404d155684699fcd4a438e28f9c.JPG?imwidth=420"
    ]
  },
  {
    id: 44,
    brand: "Renault",
    name: "Kiger",
    model: "RXZ",
    year: 2022,
    price: 850000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141857/kiger-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    yearsUsed: 1,
    kilometers: 12000,
    mileage: 20.2,
    fuelType: "Petrol",
    transmission: "CVT",
    owners: 1,
    location: "Chennai",
    description: "Feature-rich Renault Kiger with modern styling and good ground clearance.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3925173_56858_1744801035772.jpg?q=80",
      "https://imgd.aeplcdn.com/300x225/vimages/202505/3958665_5956_1746872364495.jpeg?q=80"
    ]
  },
  {
    id: 45,
    brand: "Honda",
    name: "Civic",
    model: "ZX",
    year: 2019,
    price: 1450000,
    imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80",
    yearsUsed: 4,
    kilometers: 32000,
    mileage: 16.5,
    fuelType: "Petrol",
    transmission: "CVT",
    owners: 1,
    location: "Coimbatore",
    description: "Premium Honda Civic with excellent driving dynamics and spacious interiors.",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhpWtSjTzigphJmkvUBWEKc7rl1yN610Niw&s",
      "https://images10.gaadi.com/usedcar_image/4079551/original/processed_7d7803a5eab2f61e373cf0935819cde1.jpg?imwidth=420"
    ]
  },
  {
    id: 46,
    brand: "Volkswagen",
    name: "T-Roc",
    model: "TSI",
    year: 2020,
    price: 1850000,
    imageUrl: "https://imgd.aeplcdn.com/642x336/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=80",
    yearsUsed: 3,
    kilometers: 26000,
    mileage: 15.8,
    fuelType: "Petrol",
    transmission: "DSG",
    owners: 1,
    location: "Salem",
    description: "Premium Volkswagen T-Roc with panoramic sunroof and German build quality.",
    additionalImages: [
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3922485_13981_1_1745659164462.jpg",
      "https://imgd.aeplcdn.com/300x225/vimages/202504/3860618_140768_2_1744009699138.jpg?q=80"
    ]
  }
];

export const locations = ["Coimbatore", "Salem", "Madurai", "Chennai"];

export const formatPrice = (price: number): string => {
  if (price >= 10000000) { // 1 crore or more
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) { // 1 lakh or more
    return `₹${(price / 100000).toFixed(2)} L`;
  } else {
    return `₹${price.toLocaleString()}`;
  }
};

export const calculateEMI = (
  principal: number,
  interestRate: number,
  tenure: number // in months
): number => {
  const monthlyInterest = interestRate / 12 / 100;
  const emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / 
              (Math.pow(1 + monthlyInterest, tenure) - 1);
  return Math.round(emi);
};

export const sampleStaffData = [
  { 
    id: 1, 
    name: "Rajesh Kumar",
    username: "rajesh@nk.ac.in",
    password: "staff123",
    experience: "5 years",
    role: "Senior Sales Consultant"
  },
  { 
    id: 2, 
    name: "Priya Singh",
    username: "priya@nk.ac.in",
    password: "staff123",
    experience: "3 years",
    role: "Sales Executive"
  }
];
