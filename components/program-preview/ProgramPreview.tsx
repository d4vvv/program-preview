import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { usePrograms } from '../../hooks/usePrograms'
import { IMDbSortType } from '../../types/IMDbSortType'
import { Program } from '../../types/Program'
import { ProgramType } from '../../types/ProgramType'
import { IMDbSort } from '../IMDb-sort/IMDbSort'
import { ProgramList } from '../program-list/ProgramList'
import { ProgramTypeSelector } from '../program-type-selector/ProgramTypeSelector'

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
  const isLoading = typeof data === 'undefined' && !error
  const renderProgramList = () => {
    if (isLoading) {
      return <Spinner />
    }
    if (error) {
      return <Text>An error has occured while fetching the data.</Text>
    }
    return <ProgramList programs={data as Program[]} />
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
          onSelectionChange={setSelectedProgramTypes}
          selectedProgramTypes={selectedProgramTypes}
        />
        {renderProgramList()}
      </Flex>
    </div>
  )
}
