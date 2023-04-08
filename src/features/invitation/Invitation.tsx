import { Box, Button, ButtonGroup, Link, Text } from '@chakra-ui/react'

export default function Invitation() {
  return (
    <Box>
      <Text fontSize={'24px'} textAlign="center">
        Просим подтвердить свое присутствие на торжестве до 11 Июля откликом на
        сайте
      </Text>
      <ButtonGroup
        gap="4"
        display="flex"
        justifyContent="center"
        paddingTop="40px"
      >
        <Button colorScheme="blackAlpha">
          <Link href="">Подтвердить</Link>
        </Button>
        <Button colorScheme="blackAlpha">
          <Link href="">Отклонить</Link>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
