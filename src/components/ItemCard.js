import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { countChange,addingItems } from '../redux/moneySpendingSlice'
import Button from "./Button"

function ItemCard({item, id}) {
    const [count, setCount] = useState(0)
    const [activeSell, setActiveSell] = useState(true)
    const [activeBuy, setActiveBuy] = useState()
    const dispatch = useDispatch()
    const totalMoney = useSelector(state => state.moneySpending.totalMoney)

    useEffect(()=>{
      dispatch(countChange({count: count, id: id}))
      dispatch(addingItems())
    },
    [count])

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
    [totalMoney])

    const buy = ()=>{
        setCount(Number(count) + 1)
    }  
    const sell = ()=>{
        setCount(Number(count) - 1)
    } 
    const buyCount = (e)=>{
      setCount(e.target.value)
    }
    

  return (
    
      <div key={id} className='flex flex-col justify-center align-center p-5'> 
        <img className='w-2/5 self-center' src={item.image} alt="" />
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.cost.toLocaleString("en-US")}$</span>
        </div>
        <div className='flex justify-center'>
          <Button  disabled={activeSell} text="Sell" onClick={sell} />
          <input value={count} onChange={buyCount}  className='border border-black mx-2 rounded-md'  />
          <Button disabled={activeBuy} text="Buy" onClick={buy} />
        </div>
        </div>
    
  )
}

export default ItemCard
