import React, {  useState } from 'react'

export default function Catigories(props) {
  const [activeItem, setActiveItem] = useState(null);

  const onCliclItem = (index) => {
    setActiveItem(index)
  }

  return (<>
      <li
        className={ activeItem === null ? 'active' : ''} 
        onClick={() => onCliclItem(null)}
      >
        Все
      </li>
    {
      props.listItems.map((item, index) => {
        return(
          <li 
            className={index === activeItem  ? 'active' : ''}
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



// export default class Catigories extends Component {
//   state = {
//     activeItem: 3
//   }

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index
//     })
//   }

//   render() {
//     return ( <>
//       {
//         this.props.listItems.map((item, index) => {
//           return(
//             <li 
//               className={this.state.activeItem === index ? 'active' : ''}
//               key={index}
//               onClick={() => this.onSelectItem(index)}  
//             >
//               {item}
//             </li>
//           )
//         })
//       }
//     </>)
//   }
// }



