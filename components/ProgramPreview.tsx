import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { ProgramTypeSelector } from './ProgramTypeSelector'
import { IMDbSort } from './IMDbSort'
import { ProgramList } from './ProgramList'
import { ProgramTypes } from '../types/ProgramTypes'
import { Program } from '../types/Program'

export const ProgramPreview: React.FC = () => {
  const [query, setQuery] = useState([ProgramTypes.MOVIE, ProgramTypes.SERIES])
  const { data, error } = usePrograms({ query })
  const [displayedPrograms, setDisplayedPrograms] = useState<[] | Program[]>([])
  useEffect(() => setDisplayedPrograms(data?.data), [data])

  const renderProgramList = () => {
    if (
      (typeof data === 'undefined' ||
        typeof displayedPrograms === 'undefined') &&
      !error
    ) {
      return <Spinner />
    }
    if (error) {
      return <Text>An error has occured while fetching the data.</Text>
    }
    return <ProgramList programs={displayedPrograms} />
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
        {data && (
          <IMDbSort programs={data.data} onSortChange={setDisplayedPrograms} />
        )}
      </Flex>
      <Flex direction={['column', 'column', 'row']} gap="4" w="100%">
        <ProgramTypeSelector query={query} onSelectionChange={setQuery} />
        {renderProgramList()}
      </Flex>
    </div>
  )
}
