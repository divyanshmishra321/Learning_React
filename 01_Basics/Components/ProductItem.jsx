import React,{useState} from 'react';
import "./ProductItem.css";
import ItemDate from "./ItemDate";



function ProductItem(props) {
  
   const [Title, setTitle] = useState(props.Title);


  function clickHandler() {
    setTitle("PopCorn");
    console.log("Clicked");
  }

  return (
    <div className="ProductItem_Tile">
      <ItemDate
        day={props.day}
        month={props.month}
        year={props.year}
        Title={Title}
      ></ItemDate>

      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
