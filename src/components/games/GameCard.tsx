import type { Game } from "@/hooks/useGame";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
        <Image src={game.background_image}/>
      <Card.Body>
        <Heading fontSize="2xl" >{game.name}</Heading>
        <PlatformList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
    </Card.Root>
  )
}

export default GameCard