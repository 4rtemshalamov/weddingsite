import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { Steps, Timeline } from 'antd'
import Link from 'next/link'

const style = css`
  div.timeline_container div.ant-timeline-item-label {
    width: calc(18% - 12px) !important;
  }

  div.timeline_container div.ant-timeline-item-content {
    left: calc(19% - 4px) !important;
    width: calc(79% - 4px) !important;
  }

  div.timeline_container div.ant-timeline-item-tail,
  div.ant-timeline-item-head {
    left: 19% !important;
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
          <Timeline
            mode="alternate"
            items={[
              {
                children: 'Сбор гостей и фуршет в 16:30',
                color: '#957e6c',
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
              {
                children: 'Церемония в 17:00',
                color: '#957e6c',
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
              {
                children: 'Банкет в 18:00',
                color: '#957e6c',
                style: {
                  fontSize: '24px',
                  color: '#545F55',
                  fontFamily: 'Orchidea',
                },
              },
              {
                children: 'Вечеринка с 22:00 до 00:00',
                color: '#957e6c',
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
