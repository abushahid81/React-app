import React, { useState } from "react";

const Function = () => {
  const [brand, setbrand] = useState("Bmw");
  const [model, setmodel] = useState("Model Y");
  const [color, setcolor] = useState("Red");

  const car = () => {
    setbrand("Tesla");
    setmodel("Model x");
    setcolor("blue");
  };
  return (
    <>
      <h1>
        Brand Name : <span style={{ color: "red" }}>{brand}</span>
      </h1>
      <h1>
        Model Name : <span style={{ color: "red" }}>{model}</span>
      </h1>
      <h1>
        Color Name : <span style={{ color: "red" }}>{color}</span>
      </h1>
      <button onClick={car}>onClick change</button>
    </>
  );
};

export default Function;
