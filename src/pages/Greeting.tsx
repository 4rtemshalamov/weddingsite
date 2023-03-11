import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import wedding from './../../public/wedding.jpg'

export default function Greeting() {
  return (
    <Box height="100vh">
      {/* <Image width={'auto'} src={wedding} alt="we" /> */}
      <Box>
        <Heading>Свадьба Артёма и Юли</Heading>
      </Box>
    </Box>
  )
}
