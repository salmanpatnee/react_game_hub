
import useGame from '@/hooks/useGame';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';


const GameGrid = () => {

  const { games, error } = useGame()

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={6}>
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>

    </>
  )
}

export default GameGrid