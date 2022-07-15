import { initStore } from "./store";

const defaultProducts = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

const configureStore = () => {
  const actions = {
    toggleFav: (curStore, id) => {
      curStore.products.map((product) => {
        if (product.id === id)
          return { ...product, isFavorite: !product.isFavorite };
        else return product;
      });
    },
  };
  initStore(actions, { products: defaultProducts });
};

export default configureStore;
