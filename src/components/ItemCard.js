import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { countChange } from '../redux/moneySpendingSlice'
import Button from "./Button"

function ItemCard({item, id}) {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(countChange({count: count, id: id}))
    },
    [count])

    useEffect(()=>{
      if(item.count > 0){
        setActive(!active)
      }else{
        setActive(true)
      }
    },
    [item.count])

    const buy = ()=>{
        setCount(Number(count) + 1)
        console.log(count)
    }  
    const sell = ()=>{
        setCount(Number(count) - 1)
        console.log(count)
    } 
    
    const buyCount = (e)=>{
      setCount(e.target.value)
      console.log(count)
    }
    

  return (
    
      <div key={id} className='flex flex-col justify-center align-center p-5'> 
        <img className='w-2/5 self-center' src={item.image} alt="" />
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.cost}$</span>
        </div>
        <div className='flex justify-center'>
          <Button  disabled={active} text="Sell" onClick={sell} />
          <input value={count} onChange={buyCount}  className='border border-black mx-2 rounded-md'  />
          <Button text="Buy" onClick={buy} />
        </div>
        </div>
    
  )
}

export default ItemCard
