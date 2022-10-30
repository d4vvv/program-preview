import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { Categories } from './Categories'
import { IMDbSort } from './IMDbSort'
import { ProgramList } from './ProgramList'

export const ProgramPreview: React.FC = () => {
  const [query, setQuery] = useState('series,movie')
  const { data } = usePrograms({ query })
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
        <Categories query={query} setQuery={setQuery} />
        <ProgramList programs={data?.data} />
      </Flex>
    </div>
  )
}
