import React,{useState} from 'react'

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
          <button onClick={sell}  className='border border-black rounded-md px-2'>Sell</button>
          <input  className='border border-black mx-2 rounded-md'  />
          <button onClick={buy}  className='border border-black rounded-md px-2' >Buy</button>
        </div>
        </div>
    
  )
}

export default ItemCard
