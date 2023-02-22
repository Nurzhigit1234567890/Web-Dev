export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128Gb черный',
    price: 372770,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3095 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg"
  },
  {
    id: 2,
    name: 'Apple iPhone 11 128Gb Slim Box черный',
    price: 292490,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A13 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3110 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
  },
  {
    id: 3,
    name: 'Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 692800,
    description: `технология NFC: Да
    цвет: фиолетовый
    тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    диагональ: 6.7 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A16 Bionic
    объем встроенной памяти: 256 ГБ
    емкость аккумулятора: 3095 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
  },
  {
    id: 4,
    name: "Apple iPhone 14 128Gb черный",
    price: 420000,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3279 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h47/hc8/63072540065822/apple-iphone-14-128gb-cernyj-106363023-1.jpg",
  },
  {
    id: 5,
    name: "Apple iPhone 14 Pro 256Gb фиолетовый",
    price: 624700,
    description: `технология NFC: Да
    цвет: фиолетовый
    тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A16 Bionic
    объем встроенной памяти: 256 ГБ
    емкость аккумулятора: 3125 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
  },
  {
    id: 6,
    name: "Apple iPhone 13 128Gb белый",
    price: 369800,
    description:  `технология NFC: Да
    цвет: белый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3095 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h27/hc9/46392664162334/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg",
  },
  {
    id: 7,
    name: "Apple iPhone 11 64Gb Slim Box черный",
    price: 256199,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A13 Bionic
    объем встроенной памяти: 64 ГБ
    емкость аккумулятора: 3110 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4c/h6b/32690569838622/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg",
  },
  {
    id: 8,
    name: "Apple iPhone 13 128Gb синий",
    price: 375360,
    description: `технология NFC: Да
    цвет: синий
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3095 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4f/h4b/46392661671966/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg",
  },
  {
    id: 9,
    name: "Apple iPhone 14 Pro 128Gb фиолетовый",
    price: 578800,
    description: `технология NFC: Да
    цвет: фиолетовый
    тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A16 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3125 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1d/h69/62948389683230/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg",
  },
  {
    id: 10,
    name: "Apple iPhone 11 128Gb Slim Box белый",
    price: 295870,
    description: `технология NFC: Да
    цвет: белый
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A13 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3110 мАч`,
    rating: 5,
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hd6/hf8/33208262066206/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg",
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/