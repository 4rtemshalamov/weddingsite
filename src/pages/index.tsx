import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'
import Greeting from '../features/greering/Greeting'
import Schedule from '@/features/schedule/Schedule'
import Invitation from '@/features/invitation/Invitation'
import Contacts from '@/features/contacts/Contacts'
import Details from '@/features/details/Details'
import Gifts from '@/features/gifts/Gifts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Свадьба Артёма и Юли</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SimpleGrid columns={1}>
          <Greeting />
          <Schedule />
          {/* <Invitation /> */}
          <Details />
          <Gifts />
          {/* <Contacts /> */}
        </SimpleGrid>
      </main>
    </>
  )
}
