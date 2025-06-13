import type { Game } from "@/hooks/useGame";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Image src={game.background_image} />
        <Card.Body>
          <HStack justifyContent="space-between" marginY={2}>
            <PlatformList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl" >{game.name}</Heading>
        </Card.Body>
      </Card.Root>
    </GameCardContainer>

  )
}

export default GameCard