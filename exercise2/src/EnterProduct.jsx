import { useState } from "react";
import ProductList from "./ProductList";
import InputButton from "./InputButton";
import 'animate.css'

export default function EnterProduct() {
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    priority: "low-prior",
  });

  const [isValid, setIsValid] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const [inputConfig, setInputConfig] = useState({
    type: "text",
    
    
  });
  const [textImportant, setTextImportant] = useState(false);

  function handleIsValid(event) {
    if (event.target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function handleTextImportant(event) {
    if (event.target.value === "true") {
      setTextImportant(true);
      setInputConfig((prevData) => ({...prevData, placeholder: "Enter Your Name"}));
    } else if (event.target.value == "false") {
      setTextImportant(false);
      setInputConfig((prevData) => ({...prevData, placeholder: ""}))
    }
  }

  function handleIsRecommended(event) {
    if (event.target.value === "true") {
      setIsRecommended(true);
    } else if (event.target.value == "false") {
      setIsRecommended(false);
    }
  }

  function nameEnterHandler(event) {
    setNewProduct((prevData) => ({
      name: event.target.value,
      price: prevData.price,
      priority: prevData.priority,
    }));
  }

  function priceEnterHandler(event) {
    setNewProduct((prevData) => ({
      id: prevData.id,
      name: prevData.name,
      price: event.target.value,
      priority: prevData.priority,
    }));
  }

  function priorityHandler(event) {
    setNewProduct((prevData) => ({
      id: Math.floor(Math.random() * 1000),
      name: prevData.name,
      price: prevData.price,
      priority: event.target.value,
    }));
  }

  return (
    <div>
      <h1 className="animate__animated animate__pulse animate__repeat-2">Enter Product</h1>
      <input
        type="text"
        onChange={nameEnterHandler}
        placeholder="Enter Product Name"
      />
      <input
        type="number"
        onChange={priceEnterHandler}
        placeholder="Enter Product Price"
      />
      <br />
      <select onChange={priorityHandler}>
        <option value="low-prior">Low priority</option>
        <option value="high-prior">High priority</option>
      </select>
      <br />
      <input
        type="text"
        onChange={handleIsValid}
        placeholder="Enter Your Name"
      />
      <select onChange={handleIsRecommended}>
        <option value="true">Recommended</option>
        <option value="false">Not Recommended</option>
      </select>
      <br />
      <select name="Is Important" onChange={handleTextImportant}>
        <option value="true">Important</option>
        <option value="false">Not Important</option>
      </select>
      <InputButton
        isRecommended={isRecommended}
        isValid={isValid}
        inputConfig={inputConfig}
        textImportant={textImportant}
      />
      <p className={newProduct.priority}>
        {newProduct.name} {newProduct.price}
      </p>
      <br />
      <ProductList newProduct={newProduct} />
    </div>
  );
}
