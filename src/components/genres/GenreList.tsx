import useGenre from '@/hooks/useGenre'
import { HStack, Image, List, Spinner, Text } from '@chakra-ui/react'

const GenreList = () => {
  const { data, isLoading, error } = useGenre()
  if(error) return null
  if(isLoading) return <Spinner/>
  
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