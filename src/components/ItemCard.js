import React,{useState} from 'react'
import Button from "./Button"

function ItemCard({item, key}) {
    const [count, setCount] = useState(0)
    const buy = ()=>{
        setCount(Number(count) + 1)
        console.log(count)
    }  
    const sell = ()=>{
        setCount(Number(count) - 1)
        console.log(count)
    } 
    
    

  return (
    
      <div key={key} className='flex flex-col justify-center align-center p-5'> 
        <img className='w-2/5 self-center' src={item.image} alt="" />
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.cost}$</span>
        </div>
        <div className='flex justify-center'>
          <Button text="Sell" onClick={sell} />
          <input  className='border border-black mx-2 rounded-md'  />
          <Button text="Buy" onClick={buy} />
        </div>
        </div>
    
  )
}

export default ItemCard
