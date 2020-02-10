// Reducer 1 for list
const dishesReducer = () => {
  // static array of objects - just for this exercise
  return [
    { dish: "Pizza", origin: "Italy" },
    { dish: "Teriyaki", origin: "Japan" },
    { dish: "Haggis and Chips", origin: "Scotland" },
    { dish: "Borscht", origin: "Ukraine" },
    { dish: "Poi", origin: "Hawaii" }
  ];
};

// Reducer 2 for selected dish
const selectedDishReducer = (selectedDish = null, action) => {
    if action.type === "DISH_SELECTED" {
        return action.payload;
    }

    // otherwise not interested
    return selectedDish;
}