import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Catigories from '../components/Catigories';
import Preloader from '../components/common/Preloader';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { setCategory, setFilter } from '../redux/reducers/filters';
import { fetchPizzas } from '../redux/reducers/pizzas';
import { addPizzaCart } from '../redux/reducers/cart';



export default function Home() {
  const pizzas = useSelector(state => state.pizzas.items);
  const isLoading = useSelector(state => state.pizzas.isLoading);
  const category = useSelector(state => state.filters.category);
  const sortBy = useSelector(state => state.filters.sortBy);
  const cartItems = useSelector(({cart}) => cart.items)
  const dispatch = useDispatch();
  
  // При выборе кагерии
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [category])
  
  // При выборе фильтра
  const onSelectFilter = useCallback((obj) => {
    dispatch(setFilter(obj));
  }, [sortBy])

  // Добавление пиццы в корзину
  const onAddPizza = (pizza) => {
    dispatch(addPizzaCart(pizza))
  }

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy])

  return (
    <div>
        {/* Категории и сортировка */}
      <div className="content__top">
        <div className="categories">
          <ul>
            <Catigories onSelectCategory={onSelectCategory} />
          </ul>
        </div>
        <SortPopup 
          onSelectFilter={onSelectFilter} 
          sortBy={sortBy}
        />
      </div>

      {/* Пиццы */}
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading && !pizzas.length
          ? Array(12).fill(0).map( (_, index) => <Preloader key={index} />)  
          : pizzas.map(item => (
            <PizzaBlock 
              key={item.id}
              onAddClickPizza={onAddPizza}
              addedCount={cartItems[item.id] && cartItems[item.id].items.length}
              {...item}
             />
          ))
        }
      </div>
    </div>
  )
}
