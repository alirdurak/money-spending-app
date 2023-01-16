import React from 'react'

import { useSelector } from 'react-redux'

function Receipt() {
    const productItems = useSelector(state => state.moneySpending.productItems)
    const filtered = productItems.filter(item => item.count > 0)
    let spended = 0

    filtered.forEach(item => 
      spended += item.cost*item.count  
    );

  return (
    <div >
      <div>
        {filtered.map(item =>      
            <table className='flex justify-center gap-1 '>
              <tr className='w-1/2 flex justify-center'>
                <td className='w-1/3'>{item.name}</td>
                <td className='w-1/3'>{item.count}</td>
                <td className='w-1/3'>{Number(item.count*item.cost).toLocaleString("en-US")}$</td>
              </tr>
            </table>
        )}
        </div>
        <span>Total:{spended.toLocaleString("en-US")}$</span>
    </div>
  )
}

export default Receipt
