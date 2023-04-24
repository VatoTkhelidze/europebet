<!-- კოდი ChatGPT - დან. -->


import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

function App() {
  const [currentComponent, setCurrentComponent] = useState("component1");

  const handleClick1 = () => setCurrentComponent("component1");
  const handleClick2 = () => setCurrentComponent("component2");
  const handleClick3 = () => setCurrentComponent("component3");

  const renderComponent = () => {
    switch (currentComponent) {
      case "component1":
        return <Component1 />;
      case "component2":
        return <Component2 />;
      case "component3":
        return <Component3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={handleClick1}>Component 1</button>
      <button onClick={handleClick2}>Component 2</button>
      <button onClick={handleClick3}>Component 3</button>
      {renderComponent()}
    </div>
  );
}

export default App;
