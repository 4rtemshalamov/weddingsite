import { Avatar, Box, Input, Text, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function Contacts() {
  return (
    <Box background="main">
      <Text fontSize="24px" textAlign="center" fontFamily="Orchidea">
        Контакты организатора
      </Text>
      <WrapItem justifyContent="center">
        <Avatar size="2xl" name="Юлия" src="https://bit.ly/sage-adebayo" />
      </WrapItem>
      <Text textAlign="center">
        <Link href="tel:+79995402963">+7(999)-540-29-63</Link>
      </Text>
    </Box>
  )
}
