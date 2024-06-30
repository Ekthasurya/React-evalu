import { Box ,Flex,Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const[data1,setData1]=useState({})
    const{Id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:5051/products/${Id}`)
        .then(e=>e.json())
        .then(e=>setData1(e))
    })
  return (
    <div>
        <Flex flexDirection="column" gap={5}>
        <Text>{data1?.title}</Text>
      <Box><img style={{width:"300px"}} src={data1?.image} alt="" /></Box>
      <Text>Description:{data1?.description}</Text>
      <Text>Price:{data1?.price}</Text>
      </Flex>
    </div>
  )
}

export default ProductDetail