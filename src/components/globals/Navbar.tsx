import { HStack, Text } from '@chakra-ui/react';
import { IoGameControllerOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <HStack>
        <IoGameControllerOutline size={60}/>
        <Text>GamerHub</Text>
    </HStack>
  )
}

export default Navbar