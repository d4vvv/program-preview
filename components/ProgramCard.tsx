import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

interface ProgramCardProps {
  imgSrc: string
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ imgSrc }) => {
  return (
    <Flex>
      <Box w="250px" position="relative" h="140px">
        <Image
          alt="image of movie"
          fill
          objectFit="cover"
          src={`${imgSrc}?width=500`}
        />
      </Box>
    </Flex>
  )
}
