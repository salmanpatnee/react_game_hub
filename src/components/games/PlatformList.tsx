import type { Platform } from "@/hooks/usePlatform"
import { HStack, Icon } from "@chakra-ui/react"
import type { IconType } from "react-icons"
import { BsGlobe } from "react-icons/bs"
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"

interface Props {
    platforms: Platform[]
}
type IconMap = {
    [key: string]: IconType
}

const PlatformList = ({ platforms }: Props) => {
    const iconMap: IconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginBlock={2}>
            {platforms.map((platform) => (
                <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.id}/>
            ))}
        </HStack>
    )
}

export default PlatformList