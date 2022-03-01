const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
  category: null,
  sortBy: {
    type: 'price',
    order: 'desc'
  }
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: 
      return {
        ...state,
        category: action.payload
      }
    
    case SET_SORT_BY: 
      return {
        ...state,
        sortBy: {
          ...state.sortBy, 
          type: action.payload.type, 
          order: action.payload.order
        }
      }

    default : return state
  }
}

// Action creators
export const setFilter = (obj) => {
  return ({type: SET_SORT_BY, payload: obj})
}

export const setCategory = (catIndex) => {
  return {type: SET_CATEGORY, payload: catIndex}
}
