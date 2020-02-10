import React from "react";
import { connect } from "react-redux";

const DishOrigin = ({ dish }) => {
  // check for null on first run
  if (!dish) {
    return <div>Select a dish ...</div>;
  }

  return (
    <div>
      <h3>Country of origin for: </h3>
      <p>
        Dish: {dish.dish} <br />
        Country: {dish.origin}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dish: state.selectedDish
  };
};

export default connect(mapStateToProps)(DishOrigin);
