import { Box, Button, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import weddingLogo from './../../../public/weddingLogo.png'

export default function Greeting() {
  return (
    <Box position="relative">
      <Box height="50vh">
        <Box position="absolute" bottom="27%" left="0" right="0">
          <Flex alignItems="center" flexDirection="column" textAlign="center">
            <Image src={weddingLogo} width={80} height={80} alt="weddingLogo" />
            <Text fontSize={'4xl'}>The Wedding of</Text>
            <Text fontSize={'6xl'}>Artem and Julie</Text>
          </Flex>
          <Flex display="flex" justifyContent="center" alignItems="center">
            <Flex alignItems="center">
              <Box textAlign="center">
                <Text
                  width="200px"
                  fontSize={'3xl'}
                  borderTop="2px solid"
                  borderBottom="2px solid"
                >
                  Friday
                </Text>
              </Box>
              <Flex flexDirection="column" textAlign="center">
                <Text fontSize={'3xl'}>August</Text>
                <Text fontSize={'3xl'}>11</Text>
                <Text fontSize={'3xl'}>2023</Text>
              </Flex>
              <Box textAlign="center">
                <Text
                  borderTop="2px solid"
                  borderBottom="2px solid"
                  width="200px"
                  fontSize={'3xl'}
                >
                  AT 16:30 PM
                </Text>
              </Box>
            </Flex>
          </Flex>
          <ButtonGroup
            gap="4"
            display="flex"
            justifyContent="center"
            paddingTop="40px"
          >
            <Button colorScheme="whiteAlpha">
              <Link href="https://go.2gis.com/qn192">Маршрут в 2ГИС</Link>
            </Button>
            <Button colorScheme="blackAlpha">
              <Link href="https://yandex.ru/navi/?from=navi&lang=ru&ll=65.108603%2C57.258798&mode=poi&poi%5Bpoint%5D=65.108544%2C57.258835&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D149507664224&z=21">
                Маршрут в Яндекс Картах
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box backgroundColor={'green'} height="50vh"></Box>
    </Box>
  )
}
