import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
  return (
    <div>
      <div>Name/Price</div>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}
