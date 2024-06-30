import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Flex justifyContent="space-between" gap={10} width="100%" backgroundColor="#c8102e" p={5}>
            <Box>
                <Flex gap={10}>
     <Link to='/'><Text fontSize={25} fontWeight={500}>Home</Text></Link>
     <Link to='/product' ><Text fontSize={25} fontWeight={500}>Product</Text></Link>
     <Link to='/cart'><Text fontSize={25} fontWeight={500}>Cart</Text></Link>
     </Flex>
     </Box>
     <Link to='/login'><Text fontSize={25} fontWeight={500}>Log In</Text></Link>
        </Flex>
    </div>
  )
}

export default Navbar