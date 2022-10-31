import { Flex, Text } from '@chakra-ui/react'
import { Program } from '../../types/Program'
import { ProgramCard } from '../program-card/ProgramCard'

interface ProgramListProps {
  programs: Program[]
}

export const ProgramList: React.FC<ProgramListProps> = ({ programs }) => {
  const renderProgramCards = () => {
    if (programs.length === 0) {
      return <Text>No results were found</Text>
    }
    return programs.map((program) => (
      <ProgramCard key={program.id} program={program} />
    ))
  }
  return (
    <Flex direction="column" w="100%" gap={4}>
      {renderProgramCards()}
    </Flex>
  )
}
