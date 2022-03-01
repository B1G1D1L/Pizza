import axios from "axios";

export const pizzaAPI = { 
  getPizza(category, sortBy) {
    return axios.get(
      `pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`
    ).then(response => response.data);
  }
}