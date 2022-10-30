import { Checkbox, Flex } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'

interface CategoriesProps {
  query: string
  setQuery(query: string): void
}

export const Categories: React.FC<CategoriesProps> = ({ query, setQuery }) => {
  const handleSeriesCheckboxChange = (event: SyntheticEvent) => {
    if (query.includes('series')) {
      setQuery(query.replace('series,', ''))
    } else {
      setQuery('series,' + query)
    }
  }
  const handleMoviesCheckboxChange = (event: SyntheticEvent) => {
    if (query.includes('movie')) {
      setQuery(query.replace('movie', ''))
    } else {
      setQuery(query + 'movie')
    }
  }

  return (
    <Flex direction="column" basis="10%">
      <Checkbox
        colorScheme="orange"
        defaultChecked
        onChange={(event) => handleSeriesCheckboxChange(event)}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        defaultChecked
        onChange={(event) => handleMoviesCheckboxChange(event)}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
