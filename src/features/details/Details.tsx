import useDeviceDetect from '@/hooks/useDeviceDetect'
import { Flex, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import avatar from './../../../public/photo.jpg'
import styled from '@emotion/styled'

const ImageStyled = styled(Image)`
  border-radius: 50%;
`

export default function Details() {
  const { isMobile } = useDeviceDetect()

  return (
    <Box background="main" marginTop="50px">
      <Flex alignItems="center" flexDirection="column" color="mainFont">
        <Text
          textAlign="center"
          fontSize={isMobile ? '65px' : '90px'}
          fontFamily="Orchidea"
        >
          ДЕТАЛИ
        </Text>
        <Text
          paddingTop="30px"
          color="font"
          fontSize="24px"
          fontFamily="Orchidea"
          textAlign="center"
          width={isMobile ? '330px' : '700px'}
        >
          На все вопросы, связанные с торжеством, с радостью ответит организатор
          нашей свадьбы - Юлия.
        </Text>
        <Box paddingTop={'30px'}>
          <ImageStyled src={avatar} alt="avatar" width="200" height="200" />
        </Box>
        <Text
          paddingTop="24px"
          fontFamily="Orchidea"
          fontSize="24px"
          textAlign="center"
        >
          <Link href="tel:+79995402963">+7(999)-540-29-63</Link>
        </Text>
      </Flex>
    </Box>
  )
}
