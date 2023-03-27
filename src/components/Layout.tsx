import { Box } from '@chakra-ui/react'

export default function Layout({ children }: any) {
  return (
    <Box bg="tomato" height="100vh">
      <main>{children}</main>
    </Box>
  )
}
