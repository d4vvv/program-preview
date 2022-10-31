import { Box, Flex, Hide, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Program } from '../../types/Program'

const maxImageSize = 250

interface ProgramCardProps {
  program: Program
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const playProvidersList =
    program.playProviders.length === 0
      ? 'No data'
      : program.playProviders.map((provider) => provider.name).join(', ')

  const filterDuplicateGenres = (genres: string[]) =>
    genres.filter((genre, idx) => program.genres.indexOf(genre) === idx)

  const getImageWithSize = (width: number) => {
    return (
      <Image
        alt={`Image of ${program.title} movie`}
        fill
        sizes={`${width}px`}
        style={{ objectFit: 'cover' }}
        src={`${program.imageLandscape}?width=${width}`}
      />
    )
  }

  return (
    <Flex
      gap={6}
      minW="100%"
      boxShadow="lg"
      p="4"
      rounded="md"
      data-testid="programCard"
    >
      <Box
        w={['150px', '250px']}
        position="relative"
        h={['85px', '140px']}
        minW={['150px', '250px']}
      >
        {getImageWithSize(maxImageSize)}
      </Box>
      <Flex direction="column" width="100%">
        <Flex
          align={['start', 'start', 'end']}
          direction={['column', 'column', 'row']}
          justify="space-between"
        >
          <Text fontSize={['xl', '3xl']} fontWeight="500">
            {program.title}
          </Text>
          <Text>
            <Text as="span" fontWeight="700">
              {program.imdb?.rating ?? 'Unknown'}
            </Text>{' '}
            IMDb
          </Text>
        </Flex>
        <Hide below="lg">
          <Text textTransform="uppercase">
            {filterDuplicateGenres(program.genres).join(', ')}
          </Text>
          <Text pt={[0, 0, 4]} fontSize="lg">
            Streaming: {playProvidersList}
          </Text>
        </Hide>
      </Flex>
    </Flex>
  )
}
