import ProductsSearch from "./ProductsSearch/ProductsSearch";
import ProductsView from "./ProductsView/ProductsView";
import styles from "./style.module.css";
const { products } = styles;
const ProductsSection = () => {
  return (
    <div className={products}>
      <ProductsSearch />
      <ProductsView />
    </div>
  );
};

export default ProductsSection;
