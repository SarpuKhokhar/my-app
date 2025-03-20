import productBg01 from "../assets/green.png";
import productBg02 from "../assets/Chines.png";
import productBg03 from "../assets/Kailan.png";
import productBg04 from "../assets/Caisim.png";
import Mango from "../assets/Mango.png";
import Mangosteen from "../assets/Mangosteen.png";
import Rambutan from "../assets/Rambutan.png";
import Guava from "../assets/Guava.png";
import Kale1 from "../assets/Kale1.png";
import Kale2 from "../assets/Kale2.png";
import Babyspinach from "../assets/Babyspinach.png";
import productTomato1 from "../assets/CherryTomato.png";
import productTomato2 from "../assets/snacking.png";
import productTomato3 from "../assets/beefTomato.png";
import product05Bg from "../assets/pro5.png";
import product06Bg from "../assets/pro6.png";
import p01_image from "../assets/p02.jpg";
import p02_image from "../assets/p01.jpg";
// import { HomePage } from "../Pages/Home";
// import { AboutPage } from "../Pages/About";
// import { ProductPage } from "../Pages/Product";
// import { ContactUsPage } from "../Pages/ContactUs";
import card1Img from "../assets/card1.svg";
import card2Img from "../assets/card2.svg";
import card3Img from "../assets/card3.svg";
import card1VegImg from "../assets/card1Veg.png";
import card2VegImg from "../assets/card2Veg.png";
import card3VegImg from "../assets/card3Veg.png";
import agronomyImage from "../assets/agronomy.png";
import demandImage from "../assets/demand.png";
import supportImage from "../assets/support.png";
import techImage from "../assets/tech.png";
import eco_sys_01 from "../assets/eco_sys_01.jpg";
import plantImg from "../assets/plantImg.jpeg";
import eco_sys_03 from "../assets/eco_sys_03.jpg";
import eco_sys_04 from "../assets/eco_sys_04.jpg";

import sp_aeon from "../assets/aeon.png";
import sp_boga from "../assets/boga-grp.png";
import sp_cheongdam from "../assets/Cheongdam.png";
import sp_commn from "../assets/Commn-Grnd.png";
import sp_daily from "../assets/daily-foodhall.png";
import sp_diamond from "../assets/Diamond.png";
import sp_a from "../assets/download.jpeg";
import sp_lulu from "../assets/lulu.png";
import sp_familymart from "../assets/familymart.png";
import sp_farmers from "../assets/Farmers-Market.png";
import sp_fnb from "../assets/fnb-kem-chicks.png";
import sp_food from "../assets/food-hall.png";
import sp_grabmart from "../assets/grabmart.png";
import sp_grand from "../assets/Grand-Lucky.png";
import sp_haidi from "../assets/haidi.png";
import sp_herp from "../assets/Herp.png";
import sp_hypermart from "../assets/hypermart.png";
import sp_lotte from "../assets/lotte-mart.png";
import sp_market from "../assets/market-city.png";
import sp_papaya from "../assets/papaya.png";
import sp_pepito from "../assets/pepito.png";
import sp_ranch from "../assets/ranch-market.png";
import sp_sayurbox from "../assets/sayurbox.png";
import sp_segari from "../assets/segari.png";
import sp_sesa from "../assets/sesa-id.png";
import sp_shopee from "../assets/Shopee.svg_.png";
import sp_superindo from "../assets/super.png";
import sp_tokopedia from "../assets/tokopedia.png";

import esp_carreFour from "../assets/esp carrefour.png";
import esp_coldStorage from "../assets/esp cold storage.png";
import esp_csFresh from "../assets/esp cs fresh.png";
import esp_fairPrice from "../assets/esp fair price.png";
import esp_fairPiceFinest from "../assets/esp fairprice finest.png";
import esp_fairPriceXtra from "../assets/esp fairprice-xtra-logo-left.png";
import esp_gaint from "../assets/esp giant.png"
import esp_jason from "../assets/esp jasons deli.png";
import esp_mydin from "../assets/esp mydin.png";
import esp_nsk from "../assets/esp nsk trade city.png";
import esp_redmart from "../assets/esp redmart.png";
import esp_union from "../assets/esp union_coop.png";


// Footer 
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Product from "../components/pages/Product";
import Contact from "../components/pages/Contact";
import Career from "../components/pages/Career";
// import { CareerPage } from "../Pages/Career";
// import { DetailPage } from "../Pages/Career/DetailPage";

export const salesPartners = [
  sp_tokopedia,
  sp_shopee,
  sp_sesa,
  sp_grabmart,


  sp_familymart,
  sp_segari,
  sp_sayurbox,
  sp_pepito,

  sp_hypermart,
  sp_grand,
  sp_lotte,
  sp_daily,

  sp_ranch,
  sp_farmers,
  sp_market,
  sp_food,

  sp_aeon,
  sp_lulu,
  sp_diamond,
  sp_papaya,

  sp_a,
  sp_superindo,
  sp_herp,
  sp_fnb,

  sp_commn,
  sp_boga,
  sp_cheongdam,
  sp_haidi,


];

export const exportSalesPartners = [

  esp_fairPrice,
  esp_fairPiceFinest,
  esp_fairPriceXtra,
  esp_coldStorage,


  esp_csFresh,
  esp_jason,
  esp_nsk,
  esp_mydin,

  esp_gaint,
  esp_carreFour,
  esp_union,
  esp_redmart,

];

export const ecoSystemList = [
  [
    {
      id: 1,
      icon: techImage,
      bg: eco_sys_01,
      height: "h-[555px]",
      p1: "Farm",
      p2: "Infrastructure &  Technology",
      desc: "SupportRetrofit",
    },
    {
      id: 2,
      icon: supportImage,
      bg: plantImg,
      height: "h-[389px]",
      p1: "Input",
      p2: "Support",
      desc: "ProvideFarmers",
    },
  ],
  [
    {
      id: 3,
      icon: agronomyImage,
      bg: eco_sys_03,
      height: "h-[461px]",
      p1: "Beleaf OS",
      p2: "Agronomy Support",
      desc: "EnToEnd",
    },
    {
      id: 4,
      icon: demandImage,
      bg: eco_sys_04,
      height: "h-[483px]",
      p1: "",
      p2: "Demand",
      desc: "OfftakeAgreements",
    },
  ],
];

export const lsEssentailList = [
  {
    id: 1,
    bgImg: card1Img,
    vegImag: card1VegImg,
    title: "Environmental Sustainability",
    list: [
      "Less Water",
      "Less Land",
      "Less Waste",
      "No Soil Degradation",
      "Lower Carbon Footprint",
      "No Pesticide Residue",
    ],
  },
  {
    id: 2,
    bgImg: card2Img,
    vegImag: card2VegImg,
    title: "Consistency",
    list: [
      "Planned Harvest Schedule",
      "Sufficient Nutrition",
      "Farming Tech",
      "Sustainable Pricing",
      "Cold Chain End to End",
      "Crop Surveillance",
    ],
  },
  {
    id: 3,
    bgImg: card3Img,
    vegImag: card3VegImg,
    title: "Better Quality",
    list: [
      "Right Variety",
      "Right Packaging",
      "Longer Shelf Life",
      "More Nutritious",
      "Closer to Customers",
      "Right Handling",
    ],
  },
];

export const lsBeleafeForPeople = [
  {
    id: 1,
    name: "Become Our Farm Partner",
    btn: "Contact Us",
    image: p01_image,
    desc: "We are a home",
  },
  {
    id: 2,
    name: "For Buyers",
    btn: "Inquire Now",
    image: p02_image,
    desc: "Our mission is to bring",
  },
];

export function handleApplyButton() {
  window.open('https://www.google.com/')
}

export const localStorageNavOptions = [
  { id: 1, name: "home", path: "/", element: <Home/> },
  { id: 2, name: "About", path: "/about", element: <About/> },
  { id: 3, name: "Products", path: "/products", element: <Product /> },
  { id: 4, name: "Contact", path: "/contactUs", element: <Contact/> },
  { id: 5, name: "Career", path: "/career", element: <Career/> },
  // { id: 6, name: "Detail", path: "/detail", element: <DetailPage /> },
];

export const localStorageProductsList = [
  {
    id: 1,
    heading: "Premium Hydroponic",
    heading2: "Asian Leafy Greens",
    bgColor: "bg-[#F491A3]",
    productImage1: productBg01,
    productImage2: productBg02,
    productImage3: productBg03,
    productImage4: productBg04,
    list: ["Shanghai Green", "Chinese Spinach", "HK Kailan", "HK Caisim"],
    textColor: "text-white",
    dotColor: "bg-white",

  },
  {
    id: 2,
    heading: "Premium Hydroponic",
    heading2: "Western Leafy Greens",
    bgColor: "bg-[#DFFFE2]",
    productImage1: Kale1,
    productImage2: Kale2,
    productImage3: Babyspinach,
    list: ["Lettuce", "Kale", "Baby Leaf",],
    textColor: "text-black",
    dotColor: "bg-black",
  },
  {
    id: 3,
    textColor: "text-white",
    dotColor: "bg-white",
    heading: "Premium Hydroponic",
    heading2: "Tomatoes",
    bgColor: "bg-[#40AE49]",
    productImage1: productTomato1,
    productImage2: productTomato2,
    productImage3: productTomato3,
    list: [
      "Beef Tomatoes",
      "Snacking Tomatoes",
      "Cherry Tomatoes", ,
    ],
  },
  {
    id: 4,
    textColor: "text-white",
    dotColor: "bg-white",
    heading: "Tropical",
    heading2: "Fruits",
    bgColor: "bg-[#12312B]",
    productImage1: Mango,
    productImage2: Mangosteen,
    productImage3: Guava,
    productImage4: Rambutan,
    list: ["Mangoes", "Mangosteen", "Guavas", "Papayas", "Other Exotic Tropical Fruits"],
  },
  {
    id: 5,
    textColor: "text-black",
    dotColor: "bg-black",
    heading: "Premium Root",
    heading2: "Vegetables",
    bgColor: "bg-[#FFC3CE]",
    productImage: product05Bg,
    list: [
      "Curry Potato",
      "Gem Potato",
      "Honey Sweet Potato",
      "Purple Sweet Potato",
      "Orange Sweet Potato",
    ],
  },
  {
    id: 6,
    textColor: "text-black",
    dotColor: "bg-black",
    heading: "Grow-It-Yourself",
    heading2: "Pots",
    bgColor: "bg-[#D7EFD9]",
    productImage: product06Bg,
    list: ["Herbs Pots", "Flower Pots", "Fruity Vegetable Pots", "Leafy Vegetable Pots"],
  },
  // {
  //   id: 7,
  //   textColor: "text-white",
  //   dotColor: "bg-white",
  //   heading: "Seikat",
  //   heading2: "",
  //   bgColor: "bg-[#40AE49]",
  //   productImage: product07Bg,
  //   list: ["Vegetables", "Herbs"],
  // }
];
