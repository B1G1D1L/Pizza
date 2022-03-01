import React, { useState } from 'react'

const listItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default React.memo(
  function Catigories(props) {
    const [activeItem, setActiveItem] = useState(null);

    const onCliclItem = (index) => {
      setActiveItem(index);
      props.onSelectCategory(index);
    }

    return (<>
      <li
        className={activeItem === null ? 'active' : ''}
        onClick={() => onCliclItem(null)}
      >
        Все
      </li>
      {
        listItems.map((item, index) => {
          return (
            <li
              className={index === activeItem ? 'active' : ''}
              onClick={() => onCliclItem(index)}
              key={index}
            >
              {item}
            </li>
          )
        })
      }
    </>)
  }
)