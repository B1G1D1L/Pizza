import axios from "axios";

const instance  = axios.create({
  baseURL: 'http://localhost:3001/'
});

export const pizzaAPI = {
  getPizza(category, sortBy, order) {
    return instance.get(
      `pizzas?
      ${category !== null ? `category=${category}` : ''}
      &_sort=${sortBy}&_order=${order}`
    ).then(response => response.data);
  }
}