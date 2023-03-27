import { Box } from '@chakra-ui/react'
import { styWrapperCount } from './styles'

interface Props {
  number: number
  text: string
}

export function CountItem({ number, text }: Props) {
  return (
    <Box>
      <h3>{number}</h3>
      <span>{text}</span>
    </Box>
  )
}
