import { Checkbox, Flex } from '@chakra-ui/react'
import { useState } from 'react'

interface ProgramTypeSelectorProps {
  query: string
  onSelectionChange(query: string): void
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  query,
  onSelectionChange,
}) => {
  const [isSeriesCheckboxChecked, setSeriesCheckboxChecked] = useState(true)
  const [isMoviesCheckboxChecked, setMoviesCheckboxChecked] = useState(true)

  const handleSeriesCheckboxChange = () => {
    if (isSeriesCheckboxChecked && isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(false)
      onSelectionChange(query.replace('series,', ''))
    } else if (isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(true)
      onSelectionChange('series,' + query)
    }
  }
  const handleMoviesCheckboxChange = () => {
    if (isMoviesCheckboxChecked && isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(false)
      onSelectionChange(query.replace(',movie', ''))
    } else if (isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(true)
      onSelectionChange(query + ',movie')
    }
  }

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isSeriesCheckboxChecked}
        onChange={() => handleSeriesCheckboxChange()}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isMoviesCheckboxChecked}
        onChange={() => handleMoviesCheckboxChange()}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
