import React from 'react'
import Catigories from '../components/Catigories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

export default function Home({ pizzaList }) {
  return (
    <div>
      <div className="content__top">
        <div className="categories">
          <ul>
            <Catigories listItems={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
          </ul>
        </div>
        <SortPopup items={[
          {name: 'популярности', type: 'popular'},
          {name: 'цене', type: 'price'},
          {name: 'алфавиту', type: 'alphabet'},
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          pizzaList.map(item => {
            return <PizzaBlock key={item.id} {...item} />
          })
        }
      </div>
    </div>
  )
}
