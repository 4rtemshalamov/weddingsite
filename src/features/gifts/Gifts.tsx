import { Box, Flex, Text } from '@chakra-ui/react'

export default function Gifts() {
  return (
    <Box background="main">
      <Flex alignItems="center" flexDirection="column" color="mainFont">
        <Text textAlign="center" fontSize="90px" fontFamily="Orchidea">
          ПОДАРКИ
        </Text>
        <Text
          paddingTop="30px"
          color="font"
          fontSize="24px"
          fontFamily="Orchidea"
        >
          Дорогие наши гости! Мы с огромной радостью приглашаем вас на нашу
          свадьбу и очень ценим ваше присутствие. Однако, мы хотели бы попросить
          вас не дарить нам цветы, так как они быстро увядают и не оставляют
          долговременных воспоминаний. Вместо этого, мы будем очень благодарны
          за любые денежные или ценные подарки, которые помогут нам начать новую
          жизнь вместе. Но самое главное для нас - ваше присутствие на нашем
          особенном дне. Спасибо за понимание и с нетерпением ждем вашего
          приезда!
        </Text>
      </Flex>
    </Box>
  )
}
