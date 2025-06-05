import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer'

const GameCardSkeleton = () => {
    return (
        <GameCardContainer>
            <Card.Root>
                <Skeleton height="200px" width="100%" />
                <Card.Body>
                    <SkeletonText noOfLines={2} width="80%" />
                </Card.Body>
            </Card.Root>
        </GameCardContainer>
    )
}

export default GameCardSkeleton