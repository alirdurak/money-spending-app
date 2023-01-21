import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { countChange } from '../redux/moneySpendingSlice'
import Button from "./Button"

function ItemCard({item, id}) {
    const [count, setCount] = useState(0)
    const [activeSell, setActiveSell] = useState(true)
    const [activeBuy, setActiveBuy] = useState()
    const dispatch = useDispatch()
    const totalMoney = useSelector(state => state.moneySpending.totalMoney)

    useEffect(()=>{
      dispatch(countChange({count: count, id: id}))
      
    },
    [count,dispatch,id])

    useEffect(()=>{
      if(item.count > 0){
        setActiveSell(false)
      }else{
        setActiveSell(true)
      }
    },
    [item.count])

    useEffect(()=>{
      if(item.cost < totalMoney ){
        setActiveBuy(false)
      }else{
        setActiveBuy(true)
      }
    },
    [totalMoney,item.cost])

    const buy = ()=>{
        setCount(Number(count) + 1)
    }  
    const sell = ()=>{
        setCount(Number(count) - 1)
    } 
    const buyCount = (value)=>{
      const maxCount = Math.floor(totalMoney / item.cost) + count
      if(value && value > 0)
      {
        if(value > maxCount && totalMoney >= 0)
        {
          setCount(maxCount)
        }else{
          setCount(value)
        }
      }else{
        setCount(0)
      }
      
  } 
    

  return (
    
      <div key={id} className='flex flex-col justify-center align-center py-6'> 
        <img className=' self-center' src={item.image} alt="" />
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.cost.toLocaleString("en-US")}$</span>
        </div>
        <div className='flex justify-center mt-4'>
          <Button  disabled={activeSell} text="Sell" onClick={sell} />
          <input value={count} onChange={(e)=>buyCount(parseInt(e.target.value))}  className='border border-black mx-2 rounded-md'  />
          <Button disabled={activeBuy} text="Buy" onClick={buy} />
        </div>
        </div>
    
  )
}

export default ItemCard
