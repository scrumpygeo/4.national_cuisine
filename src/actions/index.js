export const selectDish = dish => {
  // return an action
  return {
    type: "DISH_SELECTED",
    payload: dish
  };
};
