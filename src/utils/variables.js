import icon1 from '@/assets/icon/vip_01.png'
import icon2 from '@/assets/icon/vip_02.png'
import icon3 from '@/assets/icon/vip_03.png'
import icon4 from '@/assets/icon/vip_04.png'
import icon5 from '@/assets/icon/point_1.png'
import icon6 from '@/assets/icon/point_2.png'
import icon7 from '@/assets/icon/point_3.png'

import { v4 as uuidv4 } from 'uuid'

export const headerLinks = []

export const QAs = [
  {
    id: 0,
    title: '我可以不設選菜範圍 / 條件嗎 ?',
    content:
      '我們提供了預設與自訂模式，不論您想快速開始體驗，或是想打造個人化的選菜系統，在這裡您都能得到滿足。'
  },
  {
    id: 1,
    title: '營養比例是什麼 ?',
    content:
      '我們會盡力讓生成的便當菜色的澱粉比例:蛋白質比例:蔬菜比例符合 1:1:2 讓您慢慢地改善飲食習慣。'
  },
  {
    id: 3,
    title: '菜色健康分數是什麼 ?',
    content:
      '依照原料、料理方式、營養價值等，估算出菜色的健康分數，1分為最差，5分為最好，以0.5分為間距。'
  },
  {
    id: 4,
    title: '放縱日是什麼 ? 如何設定放縱日 ?',
    content:
      '不在意營養比例與健康分數，純粹以您的偏好分數進行配菜(此功能加入會員即可使用)。'
  },
  {
    id: 5,
    title: '每次使用都需要重新設定嗎 ?',
    content:
      '即使不登入會員也不需要重複設定，每個裝置只有首次使用時須要做偏好設置。'
  },
  {
    id: 6,
    title: '不同裝置間可以保存，取用紀錄嗎 ?',
    content:
      '只要加入會員，我們可以為您保存飲食紀錄，並隨時取用。'
  }
]

export const memberOptions = [
  {
    id: uuidv4(),
    icon: icon1,
    title: '跨裝置存取',
    content1: '只要加入會員',
    content2: '我們將保存您的飲食紀錄',
    content3: '不用擔心切換裝置'
  },
  {
    id: uuidv4(),
    icon: icon2,
    title: '便當日記系統',
    content1: '專屬個人的月曆',
    content2: '記錄您每一天的菜色',
    content3: '更清楚知道您每天吃了些什麼'
  },
  {
    id: uuidv4(),
    icon: icon3,
    title: '許願菜色',
    content1: '想吃的菜色不在列表中 ?',
    content2: '透過許願表單向我們提議新菜色吧 !'
  },
  {
    id: uuidv4(),
    icon: icon4,
    title: '設定放縱日',
    content1: '在營養均衡的同時',
    content2: '選個日子解開所有束縛',
    content3: '偶爾來點小確幸吧'
  }
]

export const provideOptions = [
  {
    id: uuidv4(),
    icon: icon5,
    title: '菜色拉霸',
    content:
      '我們提供了一種拉霸式的視覺化功能，只需輕觸一下，即可生成出完整的便當。此外，還有自選菜色及喜好度記錄功能，打造您個人化的選菜系統。'
  },
  {
    id: uuidv4(),
    icon: icon6,
    title: '內建健康指數',
    content:
      '點擊自助餐菜色的卡片，您可以檢視菜色的詳細資訊，包含營養比例與菜色健康分數，讓您無需再擔心吃的健不健康。'
  },
  {
    id: uuidv4(),
    icon: icon7,
    title: '專屬便當日記(會員限定)',
    content:
      '打造您專屬的個人飲食月曆功能，記錄您每一天所挑選的菜色，未來將不用再努力回想您吃了些什麼，在這裡您可以隨時查詢飲食紀錄。'
  }
]

export const items= [
  {
    id: uuidv4(),
    title: "炒高麗菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    imgUrl: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    images:[
      "https://res.cloudinary.com/dfvtounam/image/upload/v1707713396/-_Pan-fried_Sausage_mjczxu.png",
      "https://res.cloudinary.com/dfvtounam/image/upload/v1707713522/%E7%A7%8B%E8%91%B5_aip9qo.jpg"
    ],
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類", 
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒花椰菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },
  {
    id: uuidv4(),
    title: "炒清江菜",
    engTitle: "Stir-Fried Cauliflower",
    category: "配菜類",
    healthLevel: "4.5",
    starchPortion: "0",
    proteinPortion: "0.25",
    vegetablePortion: "0.25",
    img: "https://res.cloudinary.com/dfvtounam/image/upload/v1707713425/-_Stir-Fried_Cauliflower_ibhm07.jpg",
    noBgImg: ""
  },



]
