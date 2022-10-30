import { Checkbox, Flex } from '@chakra-ui/react'
import { useState } from 'react'

interface CategoriesProps {
  query: string
  setQuery(query: string): void
}

export const Categories: React.FC<CategoriesProps> = ({ query, setQuery }) => {
  const [isSeriesCheckboxChecked, setSeriesCheckboxChecked] = useState(true)
  const [isMoviesCheckboxChecked, setMoviesCheckboxChecked] = useState(true)

  const handleSeriesCheckboxChange = () => {
    if (isSeriesCheckboxChecked && isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(false)
      setQuery(query.replace('series,', ''))
    } else if (isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(true)
      setQuery('series,' + query)
    }
  }
  const handleMoviesCheckboxChange = () => {
    if (isMoviesCheckboxChecked && isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(false)
      setQuery(query.replace(',movie', ''))
    } else if (isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(true)
      setQuery(query + ',movie')
    }
  }

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        defaultChecked
        size="lg"
        isChecked={isSeriesCheckboxChecked}
        onChange={() => handleSeriesCheckboxChange()}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        defaultChecked
        size="lg"
        isChecked={isMoviesCheckboxChecked}
        onChange={() => handleMoviesCheckboxChange()}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
