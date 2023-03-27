import React from 'react'
import { CountItem } from './CountItem'
import { Box } from '@chakra-ui/react'
import useDateCountdown from '@/hooks/useDateCountDown'

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } =
    useDateCountdown()

  return (
    <Box display="flex">
      <CountItem text="Days" number={days} />
      <CountItem text="Hours" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Seconds" number={seconds} />
    </Box>
  )
}

export default CountContainer
