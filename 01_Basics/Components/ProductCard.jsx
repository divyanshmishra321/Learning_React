import "./ProductCard.css";
import ProductItem from "./ProductItem";

function ProductCard() {
  return (
    <div className="ProductCard">
      
      <ProductItem
        day="01"
        month="January"
        year="2023"
        Title="Nirma"
      ></ProductItem>

      <ProductItem
        day="02"
        month="Feb"
        year="2023"
        Title="SurfExcel"
      ></ProductItem>

      <ProductItem
        day="03"
        month="March"
        year="2023"
        Title="Fena"
      ></ProductItem>

      <ProductItem
        day="04"
        month="April"
        year="2023"
        Title="555"
      ></ProductItem>

    </div>
  );
}

export default ProductCard;
