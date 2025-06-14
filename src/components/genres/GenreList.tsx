import useGenre, { type Genre } from '@/hooks/useGenre'
import { Button, Heading, HStack, Image, List, Spinner } from '@chakra-ui/react'

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenre()
  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <>
    <Heading size="2xl" margin={2}>
      Genres
    </Heading>
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
        <Button variant={'plain'} whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} padding="0" fontSize={'md'} onClick={() => onSelectGenre(genre)} >
          {genre.name}
        </Button>
      </HStack>
    </List.Item>)}
    </List.Root>
    </>
  )
}

export default GenreList