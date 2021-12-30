const ADD_PIZZA_CART = 'ADD_PIZZA_CART' 

const initialState = {
  items: {},
  totalPrice: 0
}


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: 
      return {
        ...state,
        items: {...state.items, action}
      }

    default: return state
  }
}

const addPizzaCart = (pizza) => {
  return {type: ADD_PIZZA_CART, payload: pizza}
}