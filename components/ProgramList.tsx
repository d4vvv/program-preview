import { Flex, Spinner } from '@chakra-ui/react'
import { ProgramCard } from './ProgramCard'

interface ProgramListProps {
  programs?: any[]
}

export const ProgramList: React.FC<ProgramListProps> = ({ programs }) => {
  console.log({ programs })
  const renderProgramCards = () => {
    if (typeof programs === 'undefined') {
      return <Spinner />
    }
    return programs.map((program) => (
      <ProgramCard key={program.id} imgSrc={program.imageLandscape} />
    ))
  }
  return (
    <Flex direction="column" flex="1" gap={4}>
      {renderProgramCards()}
    </Flex>
  )
}
