import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack } from '@chakra-ui/react';
import { IoGameControllerOutline } from "react-icons/io5";


const Navbar = () => {

    return (
        <HStack justifyContent="space-between" p={'10px'}>
            <IoGameControllerOutline size={60} />
            <ColorModeButton />
        </HStack>
    )
}

export default Navbar