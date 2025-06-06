import useGenre, { type Genre } from '@/hooks/useGenre'
import { Button, HStack, Image, List, Spinner } from '@chakra-ui/react'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre()
  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <List.Root variant={'plain'}>{data.map(genre => <List.Item key={genre.id} paddingY={'5px'}>
      <HStack>
        <List.Indicator asChild>
          <Image
            src={genre.image_background}
            alt={genre.name}
            boxSize="40px"
            borderRadius="full"
            objectFit="cover" />
        </List.Indicator>
        <Button variant={'plain'} onClick={() => onSelectGenre(genre)} padding="0" fontSize={'lg'}>
          {genre.name}
        </Button>
      </HStack>
    </List.Item>)}
    </List.Root>
  )
}

export default GenreList