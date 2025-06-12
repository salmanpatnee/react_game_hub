
import type { GameQuery } from '@/App';
import useGame from '@/hooks/useGame';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {

  const { data, error, isLoading } = useGame(gameQuery);

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={3}>
        {isLoading && Array.from({ length: 10 }).map((_, index) => (
          <GameCardSkeleton key={index} />
        ))}
        {data.map(game => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>

    </>
  )
}

export default GameGrid