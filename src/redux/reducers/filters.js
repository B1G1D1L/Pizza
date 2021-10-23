const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
  category: 0,
  sortBy: 'popular'
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: 
      return {
        ...state,
        sortBy: action.payload
      }

    case SET_CATEGORY: 
      return {
        ...state,
        category: action.payload
      }

    default : return state
  }
}

// Action creators
export const setFilter = (sortBy) => {
  return ({type: SET_SORT_BY, payload: sortBy})
}

export const setCategory = (catIndex) => {
  return {type: SET_CATEGORY, payload: catIndex}
}
