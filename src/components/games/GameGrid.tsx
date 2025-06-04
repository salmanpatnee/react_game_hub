
import useGame from '@/hooks/useGame';
import { Text } from '@chakra-ui/react';


const GameGrid = () => {

  const { games, error } = useGame()

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games && games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid