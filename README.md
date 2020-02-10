### Basic React / Redux App

Click on a dish and see what country of origin is.

- We have 3 components: App and 2 children: DishList and DishOrigin.
- App passes very little data to children directly but uses redux reducers and action creators.
- one reducer produces a list of dishes while the other one will record what currently selected dish is.

- Reducers: dishesReducer & selectedDishReducer
- Action Creator: selectDish
