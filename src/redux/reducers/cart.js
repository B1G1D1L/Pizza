const ADD_PIZZA_CART = 'ADD_PIZZA_CART'; 
const CLEAR_CART = 'CLEAR_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const MINUS_PIZZA = 'MINUS_PIZZA';
const PLUS_PIZZA = 'PLUS_PIZZA';

const  initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
};


const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_PIZZA_CART:{
      const  currentPizzaItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload]

      const  newPizza = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        },
      };
      
      const  totalCount = Object.keys(newPizza).reduce(
        (sum, key) => newPizza[key].items.length + sum, 0
      )
      const  totalPrice = Object.keys(newPizza).reduce(
        (sum, key) => newPizza[key].totalPrice + sum, 0
      )


      return {
        ...state,
        items: newPizza,
        totalCount,
        totalPrice
      };
    }

    case CLEAR_CART: {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      }
    }

    case DELETE_ITEM: {
      const newItems = {...state.items};
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentPizzaItems = newItems[action.payload].items.length;

      delete newItems[action.payload];


      return {
        ...state, 
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentPizzaItems
      }
    }

    case PLUS_PIZZA: {
      const newItem = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]

      const newItems = {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItem,
            totalPrice: getTotalPrice(newItem)
          }
        },
      }

      const totalPrice = Object
        .values(newItems.items)
        .reduce(( sum, obj ) => obj.totalPrice + sum , 0);

      const totalCount = Object
        .values(newItems.items)  
        .reduce( (sum, obj) => obj.items.length + sum , 0 )

      return {
        ...newItems,
        totalPrice,
        totalCount
      }
    }

    case MINUS_PIZZA: {
      const oldItems = state.items[action.payload].items
      const newItem = oldItems.length > 1 
        ?  state.items[action.payload].items.slice(1) 
        : oldItems;

      const newItems = {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItem,
            totalPrice: getTotalPrice(newItem)
          }
        },
      }

      const totalPrice = Object
        .values(newItems.items)
        .reduce(( sum, obj ) => obj.totalPrice + sum , 0);

      const totalCount = Object
        .values(newItems.items)  
        .reduce( (sum, obj) => obj.items.length + sum , 0 )

      return {
        ...newItems,
        totalPrice,
        totalCount
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
  return { type: CLEAR_CART }
}

export const deleteItem = (id) => {
  return { type: DELETE_ITEM, payload: id }
}

export const minusPizza = (id) => {
  return { type: MINUS_PIZZA, payload: id }
}

export const plusPizza = (id) => {
  return { type: PLUS_PIZZA, payload: id }
}