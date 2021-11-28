import { ImageProps } from "components/Carousel";

export const NAV_LINKS = [
  { linkId: "mainHeader", content: "Главная" },
  // { linkId: "aboutUs", content: "О нас" },
  { linkId: "ourServices", content: "Услуги" },
  { linkId: "products", content: "Товары" },
  { linkId: "contacts", content: "Контакты" },
];

export const PRODUCTS_TYPES = {
  coffins: { name: "Гробы" },
  crosses: { name: "Кресты" },
  wreathes: { name: "Венки" },
  wreathes_baskets: { name: "Корзинки" },
  ritual_accessories: { name: "Ритуальные принадлежности" },
};

/**
 * Lists images of products. In src name and alt for image. Use CAROUSEL_IMAGES_PATH for get full path to images
 */
export const IMAGES_OF_PRODUCTS: Record<
  keyof typeof PRODUCTS_TYPES | "funural_service_shop",
  ImageProps[]
> = {
  funural_service_shop: [
    {
      src: "funural_service_shop.jpg",
      alt: "Магазин похоронной службы «Милосердие»",
    },
  ],
  // new Array(count of images in folder)
  coffins: new Array(16).fill(1).map((_, index) => ({
    src: `coffin${index + 1}.jpeg`,
    alt: `Гроб ${index + 1}`,
  })),
  crosses: new Array(11).fill(1).map((_, index) => ({
    src: `cross${index + 1}.jpeg`,
    alt: `Крест ${index + 1}`,
  })),
  wreathes: new Array(66).fill(1).map((_, index) => ({
    src: `wreath${index + 1}.jpeg`,
    alt: `Венок ${index + 1}`,
  })),
  wreathes_baskets: new Array(7).fill(1).map((_, index) => ({
    src: `wreath_basket${index + 1}.jpeg`,
    alt: `Венок корзина ${index + 1}`,
  })),
  ritual_accessories: [
    {
      alt: "Лампадка",
      src: "лампадка.jpg",
    },
    {
      alt: "Наволочка атлас",
      src: "наволочка атлас.jpg",
    },
    {
      alt: "Наволочка с кружевами",
      src: "наволочка с кружевами.jpg",
    },
    {
      alt: "Наволочка",
      src: "наволочка.jpg",
    },
    {
      alt: "Покрывало церковное в гроб атлас",
      src: "покрывало церковное в гроб атлас.jpg",
    },
    {
      alt: "Покрывало церковное в гроб тюль",
      src: "покрывало церковное в гроб тюль.jpg",
    },
    {
      alt: "Покрывало церковное в гроб тюль",
      src: "покрывало церковное в гроб тюль (вариант 2).jpg",
    },
    {
      alt: "Рушник",
      src: "рушник.jpg",
    },
    {
      alt: "Рушник",
      src: "рушник (2).jpg",
    },
    {
      alt: "Табличка на крест",
      src: "табличка на крест.jpg",
    },
    {
      alt: "Табличка на крест",
      src: "табличка на крест (2).jpg",
    },
    {
      alt: "Табличка на крест овал",
      src: "табличка на крест овал.jpg",
    },
    {
      alt: "Погребальный набор",
      src: "погребальный набор.jpg",
    },
  ],
};

/**
 * Full path to images
 */
export const PRODUCTS_IMAGES_PATH = "images/products";

export const CAROUSEL_IMAGES: ImageProps[] = Object.entries(IMAGES_OF_PRODUCTS)
  .map((entry) =>
    // For every product type select first 3 products
    entry[1].slice(0, 2).map((product) => ({
      ...product,
      src: `${PRODUCTS_IMAGES_PATH}/${entry[0]}/${product.src}`,
    }))
  )
  .flat(1);
