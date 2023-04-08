import { Avatar, Box, Input, Text, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function Contacts() {
  return (
    <Box>
      <Text fontSize="24px" textAlign="center">
        Контакты организатора
      </Text>
      <WrapItem justifyContent="center">
        <Avatar
          size="2xl"
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />{' '}
      </WrapItem>
      <Text textAlign="center">
        <Link href="tel:+79995402963">+7(999)-540-29-63</Link>
      </Text>
    </Box>
  )
}
