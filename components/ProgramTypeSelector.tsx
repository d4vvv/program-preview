import { Checkbox, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ProgramType } from '../types/ProgramType'

interface ProgramTypeSelectorProps {
  query: ProgramType[]
  onSelectionChange(query: ProgramType[]): void
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  query,
  onSelectionChange,
}) => {
  const [isSeriesCheckboxChecked, setSeriesCheckboxChecked] = useState(true)
  const [isMoviesCheckboxChecked, setMoviesCheckboxChecked] = useState(true)

  const handleCheckboxChange = (
    type: ProgramType.MOVIE | ProgramType.SERIES
  ) => {
    if (isSeriesCheckboxChecked && isMoviesCheckboxChecked) {
      if (type === ProgramType.MOVIE) {
        setMoviesCheckboxChecked(false)
      } else {
        setSeriesCheckboxChecked(false)
      }
      onSelectionChange(query.filter((element) => element !== type))
      return
    }
    if (type === ProgramType.MOVIE && isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(true)
      onSelectionChange([...query, ProgramType.MOVIE])
      return
    }
    if (type === ProgramType.SERIES && isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(true)
      onSelectionChange([...query, ProgramType.SERIES])
      return
    }
  }

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isSeriesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramType.SERIES)}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isMoviesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramType.MOVIE)}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
