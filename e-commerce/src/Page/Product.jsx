import { Box ,Text} from '@chakra-ui/react'
import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5051/products")
        .then(e=>e.json())
        .then(e=>setData(e))
    })
  return (
    <div>
        {data.map(ele=>
           <Link to={`/product/${ele.id}`}><Text fontSize={18} color="#c8102e" _hover={{color:"blue"}} p={5} key={ele.id}>{ele.title}</Text></Link> 
        )}
    </div>
  )
}

export default Product