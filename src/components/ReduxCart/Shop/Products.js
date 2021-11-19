import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = () => {
  const products = useSelector((state) => state.products.productsItems);
  
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
