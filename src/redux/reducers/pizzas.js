const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADING = 'SET_LOADING';

const initialState = {
  items: [],
  isLoading: false,
}

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PIZZAS: 
      return {
        ...state,
        items: action.payload
      }

    case SET_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      }

    default : return state
  }
}

// Action creators
export const setPizzas = (items) => {
  return ({type: SET_PIZZAS, payload: items})
}

export const setLoading = (loading) => {
  return ({type: SET_LOADING, payload: loading})
}

