
import usePlatform from "@/hooks/usePlatform"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
    const { data, error } = usePlatform()
    if (error) return null
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" as={'button'} size="sm">
                    Select Platform
                    <BsChevronDown />  
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map(platform => <Menu.Item key={platform.id} value={platform.name}>{platform.name}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )

}

export default PlatformSelector