import { Box, Button, ButtonGroup, Link, Text } from '@chakra-ui/react'

export default function Invitation() {
  return (
    <Box background="main">
      <Text fontSize={'24px'} textAlign="center" color="font">
        Просим подтвердить свое присутствие на торжестве до 11 июля откликом на
        сайте
      </Text>
      <ButtonGroup
        gap="4"
        display="flex"
        justifyContent="center"
        paddingTop="40px"
      >
        <Button background="mainFont">
          <Link fontFamily="Orchidea" fontSize="20px" href="">
            ПОДТВЕРДИТЬ
          </Link>
        </Button>
      </ButtonGroup>
    </Box>
  )
}
