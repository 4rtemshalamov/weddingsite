import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'
import Greeting from '../features/greering/Greeting'
import Schedule from '@/features/schedule/Schedule'
import Details from '@/features/details/Details'
import Gifts from '@/features/gifts/Gifts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Свадьба Артёма и Юлии</title>
        <meta name="description" content="Свадьба Артёма и Юлии Шаламовых" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/wedding-ring.ico" />
      </Head>
      <main>
        <SimpleGrid columns={1}>
          <Greeting />
          <Schedule />
          <Gifts />
          <Details />
        </SimpleGrid>
      </main>
    </>
  )
}
