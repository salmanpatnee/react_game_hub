import useGenre from '@/hooks/useGenre'
import { HStack, Image, List, Text } from '@chakra-ui/react'

const GenreList = () => {
  const { data } = useGenre()

  return (
    <List.Root variant={'plain'}>{data.map(genre => <List.Item paddingY={'5px'}>
      <HStack>
        <List.Indicator asChild>
          <Image
            src={genre.image_background}
            alt={genre.name}
            boxSize="40px"
            borderRadius="full"
            objectFit="cover" />
        </List.Indicator>
        <Text fontSize={'lg'}>{genre.name}</Text>  
      </HStack>
    </List.Item>)}
    </List.Root>
  )
}

export default GenreList