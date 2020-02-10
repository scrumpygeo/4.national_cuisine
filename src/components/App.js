import React from "react";
import DishList from "./DishList";
import DishOrigin from "./DishOrigin";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <DishList />
        </div>
        <div className="column eight wide">
          <DishOrigin />
        </div>
      </div>
    </div>
  );
};

export default App;
