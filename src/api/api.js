import axios from "axios";

const instance  = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const pizzaAPI = {
  getPizza() {
    return instance.get('db.json').then(response => response.data);
  }
}