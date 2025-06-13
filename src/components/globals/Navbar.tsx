import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack } from '@chakra-ui/react';
import { IoGameControllerOutline } from "react-icons/io5";
import Search from "./Search";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const Navbar = ({ onSearch }: Props) => {

    return (
        <HStack justifyContent="space-between" p={'10px'}>
            <IoGameControllerOutline size={60} />
            <Search onSearch={onSearch} />
            <ColorModeButton />
        </HStack>
    )
}

export default Navbar