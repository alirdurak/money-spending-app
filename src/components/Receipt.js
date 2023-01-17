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
    <div className='flex flex-col' >
      <h2>Receipt</h2>
      <div className='my-5 flex justify-center '>
          
          <table className='flex flex-col ml-20  justify-center w-1/2  border-b-2 border-slate-300  '>
        {filtered.map(item =>      
              <tr className='w-full flex  justify-start'>
                <td className='w-1/3 mr-5 text-start'>Product Name:{item.name}</td>
                <td className='w-1/3 text-start'>Count:{item.count}</td>
                <td className='w-1/3 text-start'>Cost:{Number(item.count*item.cost).toLocaleString("en-US")}$</td>
              </tr>
        )}
        </table>
        </div>
        <div>
        <span className=" bg-blue-400/75 text-[40px] rounded-lg " >Total:{spended.toLocaleString("en-US")}$</span>
        </div>
    </div>
  )
}

export default Receipt
