import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ClockCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Timeline } from 'antd'
import Link from 'next/link'

const StyledTimeline = styled(Timeline)`
  .timeline_container .ant-timeline-item-tail,
  .ant-timeline-item-head {
    width: 25px;
    height: 25px;
    /* padding-block: 0px; */
    background: #fffaf0;
  }
`

export default function Schedule() {
  return (
    <Box background="main" height="70vh">
      <Text
        color="mainFont"
        fontSize="90px"
        fontFamily="Orchidea"
        textAlign="center"
        paddingBottom="30px"
      >
        НАШ ДЕНЬ
      </Text>
      <Box>
        <Box>
          <StyledTimeline
            mode="alternate"
            items={[
              {
                children: 'Сбор гостей и фуршет в 16:30',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '25px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
              {
                children: 'Церемония в 17:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '25px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                  paddingRight: '30px',
                },
              },
              {
                children: 'Банкет в 18:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '25px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
              {
                children: 'Вечеринка с 22:00 до 00:00',
                dot: (
                  <ClockCircleOutlined
                    style={{
                      fontSize: '25px',
                      background: '#957e6c',
                      color: '#957e6c',
                      borderRadius: '50%',
                    }}
                  />
                ),
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
            ]}
          />
        </Box>
      </Box>
      <Box paddingTop="50px">
        <Text
          fontSize={'24px'}
          textAlign="center"
          fontFamily="Orchidea"
          color="font"
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
      </Box>
    </Box>
  )
}
