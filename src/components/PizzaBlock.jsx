import classNames from 'classnames';
import React, {  useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../templates/Button';

export default function PizzaBlock(props) {

  const { id, name, imageUrl, price, types, sizes, onAddClickPizza, addedCount } = props;
  const [inProp, setInProp] = useState(false);

  const availableNames =['тонкое', 'традиционное'];
  const availableSize = [26, 30, 40];

  const [selectType, setSelectItem] = useState(types[0]);
  const [selectSize, setSelectSize] = useState(sizes[0]);

  // Выбор категории 
  const onSelectedType = (index) => {
    setSelectItem(index);
  }

  // Выбор размера пиццы
  const onSelectSize = (index) => {
    setSelectSize(index);
  }

  // Добавление пиццы в корзину
  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,   
      price,
      size: selectSize,
      type: availableNames[selectType]
    }

    onAddClickPizza(obj)
  }

  // Анимация после монитрование
  useEffect(() => {
    setInProp(true);
  }, [])


  return (
    <div className="pizza-block">
      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames='pizza-img'
        mountOnEnter
      >
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt={name}
        />
      </CSSTransition>
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">

        {/* Толщина пиццы */}
        <ul>
          {availableNames.map( (item, index) => (
            <li 
              key={index}
              onClick={() => onSelectedType(index)}
              className={classNames({
                active: selectType === index,
                disabled: !types.includes(index)
              })}
            >
              {item}
            </li>
          ))}
        </ul>
        
        {/* Размер пиццы */}
        <ul>
          {availableSize.map((size, index) => (
            <li
              key={index}
              onClick={() => onSelectSize(size)}
              className={classNames({
                active: selectSize === size,
                disabled: !sizes.includes(size)
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      {/* Цена, корзина */}
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--add" onClick={onAddPizza} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  )
}
