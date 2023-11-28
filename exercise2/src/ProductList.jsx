import { useState } from "react";
import Button from "./ButtonComponent";

const productList = [
  { id: 1, name: "Ihtiandr", price: 100, priority: "low-prior" },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];

export default function ProductList(props) {
  const [listToDisplay, setListToDisplay] = useState(productList);
  const [style, setStyle] = useState({ backgroundColor: "green" });

  function showProductList() {
    return listToDisplay.map((item, index) => {
      index = item.id;
      return (
        <li className={item.priority} key={index} >
          {index} {item.name} ${item.price}
        </li>
      );
    });
  }

  function addProduct() {
    setListToDisplay((curListToDisplay) => [
      ...curListToDisplay,
      props.newProduct,
    ]);
  }

  function hoverStyle() {
    setStyle({ color: "red", backgroundColor: "yellow", fontWeight: "bold" });
  }

  return (
    <div>
      <h1 >Product List</h1>
      <section>
        <Button className={'btn-alert'} onClick={addProduct} children={'ADD Product'}/>
        <ul>{showProductList()}</ul>
      </section>
    </div>
  );
}
