import { useSelector } from 'react-redux'

import ItemCard from './ItemCard'

function List() {
  const items = useSelector(state => state.moneySpending.productItems)
  

  return (
    <div className=' grid grid-cols-3 p-10  '>
        {items.map((item)=>{
        return(
          <div key={item.id}>
            <ItemCard id={item.id} item={item} /> 
          </div>
        )
        }
        )}
    </div>
  )
}

export default List
