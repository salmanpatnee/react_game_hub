
import usePlatform, { type Platform } from "@/hooks/usePlatform"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatform()
    if (error) return null
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" as={'button'} size="sm">
                    {selectedPlatform ? selectedPlatform.name : 'Select Platform'} 
                    <BsChevronDown />  
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map(platform => <Menu.Item onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.name}>{platform.name}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )

}

export default PlatformSelector