import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';
    return (
        <Badge variant="outline" colorPalette={color} paddingX={2} fontSize={'14px'}>
            {score}
        </Badge>

    )
}

export default CriticScore