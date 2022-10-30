import { Box, Flex, Hide, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface ProgramCardProps {
  imgSrc: string
  title: string
  genres: string[]
  playProviders: string[]
  imdbRating?: number
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  imgSrc,
  title,
  genres,
  playProviders,
  imdbRating,
}) => {
  const playProvidersList =
    playProviders.length === 0 ? 'No data' : playProviders.join(', ')

  return (
    <Flex gap={6} minW="100%" boxShadow="lg" p="4" rounded="md">
      <Box
        w={['150px', '250px']}
        position="relative"
        h={['85px', '140px']}
        minW={['150px', '250px']}
      >
        <Image
          alt="image of movie"
          fill
          sizes="250px"
          style={{ objectFit: 'cover' }}
          src={`${imgSrc}?width=500`}
        />
      </Box>
      <Flex direction="column" width="100%">
        <Flex
          align={['start', 'start', 'end']}
          direction={['column', 'column', 'row']}
          justify="space-between"
        >
          <Text fontSize={['xl', '3xl']} fontWeight="500">
            {title}
          </Text>
          <Text>
            <Text as="span" fontWeight="700">
              {imdbRating ?? 'Unknown'}
            </Text>{' '}
            IMDb
          </Text>
        </Flex>
        <Hide below="lg">
          <Text textTransform="uppercase">{genres.join(', ')}</Text>
          <Text fontSize="lg">Streaming: {playProvidersList}</Text>
        </Hide>
      </Flex>
    </Flex>
  )
}
