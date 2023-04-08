import { Box, Flex, Text } from '@chakra-ui/react'
import { Steps, Timeline } from 'antd'

export default function Schedule() {
  return (
    <Box background="main">
      <Text
        color="mainFont"
        fontSize="70px"
        textAlign="center"
        paddingBottom="30px"
      >
        Расписание
      </Text>
      <Box>
        <Box>
          <Timeline
            mode="right"
            items={[
              {
                children: 'Сбор гостей, фуршет',
                color: '',
                style: { fontSize: '16px', color: '#545F55' },
                label: '16:30',
              },
              {
                children: 'Церемония',
                style: { fontSize: '16px', color: '#545F55' },
                label: '17:00',
              },
              {
                children: 'Банкет',
                style: { fontSize: '16px', color: '#545F55' },
                label: '18:00',
              },
              {
                children: 'Вечеринка',
                style: { fontSize: '16px', color: '#545F55' },
                label: 'с 22:00 до 00:00',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}
