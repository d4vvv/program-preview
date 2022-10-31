import { Checkbox, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ProgramTypes } from '../types/ProgramTypes'

interface ProgramTypeSelectorProps {
  query: ProgramTypes[]
  onSelectionChange(query: ProgramTypes[]): void
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  query,
  onSelectionChange,
}) => {
  const [isSeriesCheckboxChecked, setSeriesCheckboxChecked] = useState(true)
  const [isMoviesCheckboxChecked, setMoviesCheckboxChecked] = useState(true)

  const handleCheckboxChange = (
    type: ProgramTypes.MOVIE | ProgramTypes.SERIES
  ) => {
    if (isSeriesCheckboxChecked && isMoviesCheckboxChecked) {
      if (type === ProgramTypes.MOVIE) {
        setMoviesCheckboxChecked(false)
      } else {
        setSeriesCheckboxChecked(false)
      }
      onSelectionChange(query.filter((element) => element !== type))
      return
    }
    if (type === ProgramTypes.MOVIE && isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(true)
      onSelectionChange([...query, ProgramTypes.MOVIE])
      return
    }
    if (type === ProgramTypes.SERIES && isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(true)
      onSelectionChange([...query, ProgramTypes.SERIES])
      return
    }
  }

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isSeriesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramTypes.SERIES)}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isMoviesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramTypes.MOVIE)}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
