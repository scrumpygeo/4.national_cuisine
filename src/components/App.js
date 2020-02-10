import React from "react";
import DishList from "./DishList";
import DishOrigin from "./DishOrigin";

const App = () => {
  return (
    <div>
      <div>
        <DishList />
      </div>
      <div>
        <DishOrigin />
      </div>
    </div>
  );
};

export default App;
