import React, { Component } from "react";
import { connect } from "react-redux";

class DishList extends Component {
  renderList() {
    // helper function to loop thru list and return jsx
    return this.props.dishes.map(dish => {
      return <div key={dish.dish}>{dish.dish}</div>;
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { dishes: state.dishes };
};

export default connect(mapStateToProps)(DishList);
