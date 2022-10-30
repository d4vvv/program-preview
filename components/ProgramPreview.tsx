import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { Categories } from './Categories'
import { ProgramList } from './ProgramList'

export const ProgramPreview: React.FC = () => {
  const [query, setQuery] = useState('series,movie')
  const { data } = usePrograms({ query, page: 1 })
  return (
    <div>
      <Text fontSize="3xl" pb={4}>
        Program preview
      </Text>
      <Flex direction={['column', 'column', 'row']} gap="4" w="100%">
        <Categories query={query} setQuery={setQuery} />
        <ProgramList programs={data?.data} />
      </Flex>
    </div>
  )
}
