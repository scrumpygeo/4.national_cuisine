import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDish } from "../actions";

class DishList extends Component {
  renderList() {
    // helper function to loop thru list and return jsx
    return this.props.dishes.map(dish => {
      return (
        // React wants unique key so here just use name (dish)
        <div className="item" key={dish.dish}>
          <div className="right floated content">
            <button className="ui green button">Discover</button>
          </div>
          <div className="content">{dish.dish}</div>
        </div>
      );
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

export default connect(mapStateToProps, {
  selectDish: selectDish
})(DishList);
