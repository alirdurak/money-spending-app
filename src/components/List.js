import React,{useState,useEffect} from 'react'
import {items} from "../items"
import ItemCard from './ItemCard'

function List() {
  

  return (
    <div className=' grid grid-cols-3 p-10  '>
        {items.map((item,key)=>{
        return <ItemCard key={key} item={item} /> 
        }
        )}
    </div>
  )
}

export default List
