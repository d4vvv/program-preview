import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { ProgramPreview } from '../components/program-preview/ProgramPreview'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Program Preview</title>
        <meta name="description" content="Program preview app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxW="1200px" m="auto" py={4}>
          <ProgramPreview />
        </Container>
      </main>
    </div>
  )
}
