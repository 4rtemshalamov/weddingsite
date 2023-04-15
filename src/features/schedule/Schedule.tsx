import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { ClockCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Timeline } from 'antd'
import Link from 'next/link'
import useDeviceDetect from '@/hooks/useDeviceDetect'

const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-content {
    height: 70px;
    inset-block-start: -13px;
  }

  .timeline_container .ant-timeline-item-tail,
  .ant-timeline-item-head {
    width: 20px;
    height: 20px;
    background: #fffaf0;
  }
`

export default function Schedule() {
  const { isMobile } = useDeviceDetect()
  const [isLargerThan375] = useMediaQuery('(max-width: 375px)', {
    ssr: true,
    fallback: false,
  })
  return (
    <Box background="main">
      <Text
        color="mainFont"
        fontSize={isMobile ? '65px' : '90px'}
        fontFamily="Orchidea"
        textAlign="center"
        paddingBottom="50px"
        marginTop={isLargerThan375 ? '40px' : 0}
      >
        НАШ ДЕНЬ
      </Text>
      <Box>
        <Box>
          <StyledTimeline
            mode="alternate"
            items={[
              {
                children: 'Сбор гостей в 16:30',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '20px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                      position: 'relative',
                      top: '-6px',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                  paddingLeft: isMobile ? '6px' : '20px',
                },
              },
              {
                children: 'Церемония в 17:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '20px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                      position: 'relative',
                      top: '-6px',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                  paddingRight: '20px',
                },
              },
              {
                children: 'Банкет в 18:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '20px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                      position: 'relative',
                      top: '-6px',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                  paddingLeft: isMobile ? '6px' : '20px',
                },
              },
              {
                children: 'Вечеринка с 22:00 до 00:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '20px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                      position: 'relative',
                      top: '-6px',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                  paddingRight: '20px',
                },
              },
            ]}
          />
        </Box>
      </Box>
      <Flex alignItems="center" flexDirection="column" marginTop="50px">
        <Text
          fontSize={'24px'}
          textAlign="justify"
          fontFamily="Orchidea"
          color="font"
          width={isMobile ? '330px' : '700px'}
        >
          Просим подтвердить свое присутствие на торжестве до 11 июля откликом
          на сайте
        </Text>
        <Flex justifyContent="center" paddingTop="40px">
          <Button
            w="250px"
            h="60px"
            fontSize="24px"
            fontFamily="Orchidea"
            borderRadius="20px"
            background="mainFont"
            colorScheme="blackAlpha"
          >
            <Link href="">Подтвердить</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
