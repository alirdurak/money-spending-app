import React from 'react'
import { useSelector } from 'react-redux'

function Money() {
    const money = useSelector(state => state.moneySpending.totalMoney)
  return (
    <div className='flex justify-center p-4 mt-10
    sticky top-5 '>
     <h1 className=' rounded-lg py-2 px-10 text-[60px] bg-blue-400/75 '>{money.toLocaleString("en-US")}$</h1>  
    </div>
  )
}

export default Money
