import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card.Root borderRadius={10} overflow="hidden" width="300px">
            <Skeleton height="200px" width="100%" />
            <Card.Body>
                <SkeletonText noOfLines={2} width="80%" />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCardSkeleton