const ADD_PIZZA_CART = 'ADD_PIZZA_CART' 

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:{
      const newPizza = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload] 
          : [...state.items[action.payload.id], action.payload]
      };

      
      const allPizzas = [].concat.apply([], Object.values(newPizza))
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

      return {
        ...state,
        items: newPizza,
        totalCount: allPizzas.length,
        totalPrice
      };
    }

    default: return state
  }
}

//Actions creator
export const addPizzaCart = (pizza) => {
  return {type: ADD_PIZZA_CART, payload: pizza}
}