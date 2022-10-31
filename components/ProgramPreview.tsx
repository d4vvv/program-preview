import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { IMDbSortType } from '../types/IMDbSortType'
import { ProgramType } from '../types/ProgramType'
import { IMDbSort } from './IMDbSort'
import { ProgramList } from './ProgramList'
import { ProgramTypeSelector } from './ProgramTypeSelector'

export const ProgramPreview: React.FC = () => {
  const [selectedProgramTypes, setSelectedProgramTypes] = useState([
    ProgramType.MOVIE,
    ProgramType.SERIES,
  ])
  const [programSort, setProgramSort] = useState(IMDbSortType.NONE)
  const { data, error } = usePrograms({
    query: selectedProgramTypes,
    sort: programSort,
  })
  const isLoading = typeof data === 'undefined'
  const renderProgramList = () => {
    if (error) {
      return <Text>An error has occured while fetching the data.</Text>
    }
    if (isLoading) {
      return <Spinner />
    }
    return <ProgramList programs={data} />
  }

  return (
    <div>
      <Flex
        align={['start', 'end']}
        direction={['column', 'row']}
        justify="space-between"
      >
        <Text fontSize="4xl" pb={[2, 4]}>
          Program preview
        </Text>
        <IMDbSort
          sort={programSort}
          onSortChange={setProgramSort}
          isDisabled={isLoading}
        />
      </Flex>
      <Flex direction={['column', 'column', 'row']} gap="4" w="100%">
        <ProgramTypeSelector
          query={selectedProgramTypes}
          onSelectionChange={setSelectedProgramTypes}
        />
        {renderProgramList()}
      </Flex>
    </div>
  )
}
