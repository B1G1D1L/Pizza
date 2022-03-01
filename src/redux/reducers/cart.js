const ADD_PIZZA_CART = 'ADD_PIZZA_CART' 
const CLEAR_CART = 'CLEAR_CART' 
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM' 

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalAmount = arr => arr.reduce((sum, obj) => obj.price + sum, 0)


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:{

      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload]

      const newPizza = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalAmount(currentPizzaItems)
        }
      }
      
      const items = Object.values(newPizza).map(obj => obj.items)
      const allPizzas = [].concat.apply([], items)
      const totalPrice = getTotalAmount(allPizzas)

      return {
        ...state,
        items: newPizza,
        totalCount: allPizzas.length,
        totalPrice
      };
    }

    case CLEAR_CART: 
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }

    case REMOVE_CART_ITEM: {
      const newItems = {...state.items}
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length

      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    }

    default: return state
  }
}

//Actions creator
export const addPizzaCart = (pizza) => {
  return {type: ADD_PIZZA_CART, payload: pizza}
}

export const clearCart = () => {
  return {type: CLEAR_CART}
}

export const removeCartItem = (id) => {
  return {type: REMOVE_CART_ITEM, payload: id}
}