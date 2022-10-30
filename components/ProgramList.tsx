import { Flex } from '@chakra-ui/react'
import { ProgramCard } from './ProgramCard'

export const ProgramList: React.FC = () => {
  return (
    <Flex>
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </Flex>
  )
}
