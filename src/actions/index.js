export const selectDish = () => {
  // return an action
  return {
    type: "DISH_SELECTED",
    payload: dish
  };
};
