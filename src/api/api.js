import axios from "axios";

const instance  = axios.create({
  baseURL: 'http://localhost:3001/'
});

export const pizzaAPI = { 
  getPizza(category, sortBy) {
    return instance.get(
      `pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`
    ).then(response => response.data);
  }
}