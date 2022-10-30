import { Box, Flex, Hide, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { Program } from '../types/Program'

const maxImageSize = 250

interface ProgramCardProps {
  program: Program
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const playProvidersList =
    program.playProviders.length === 0
      ? 'No data'
      : program.playProviders.join(', ')

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
    <Flex gap={6} minW="100%" boxShadow="lg" p="4" rounded="md">
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
          <Text textTransform="uppercase">{program.genres.join(', ')}</Text>
          <Text fontSize="lg">Streaming: {playProvidersList}</Text>
        </Hide>
      </Flex>
    </Flex>
  )
}
