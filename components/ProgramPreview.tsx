import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { ProgramTypeSelector } from './ProgramTypeSelector'
import { IMDbSort } from './IMDbSort'
import { ProgramList } from './ProgramList'
import { ProgramTypesEnum } from '../types/ProgramTypesEnum'

export const ProgramPreview: React.FC = () => {
  const [query, setQuery] = useState([
    ProgramTypesEnum.MOVIE,
    ProgramTypesEnum.SERIES,
  ])
  const { data, error } = usePrograms({ query })
  const renderProgramList = () => {
    if (typeof data === 'undefined' && !error) {
      return <Spinner />
    }
    if (error) {
      return <Text>An error has occured while fetching the data.</Text>
    }
    return <ProgramList programs={data.data} />
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
        <IMDbSort />
      </Flex>
      <Flex direction={['column', 'column', 'row']} gap="4" w="100%">
        <ProgramTypeSelector query={query} onSelectionChange={setQuery} />
        {renderProgramList()}
      </Flex>
    </div>
  )
}
