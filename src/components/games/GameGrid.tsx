import apiClient from '@/services/apClient';
import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[]
}

const GameGrid = () => {

  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get<GameResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch((error) => setError(error.message))
  })

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