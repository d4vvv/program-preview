import { Checkbox, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ProgramTypesEnum } from '../types/ProgramTypesEnum'

interface ProgramTypeSelectorProps {
  query: ProgramTypesEnum[]
  onSelectionChange(query: ProgramTypesEnum[]): void
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  query,
  onSelectionChange,
}) => {
  const [isSeriesCheckboxChecked, setSeriesCheckboxChecked] = useState(true)
  const [isMoviesCheckboxChecked, setMoviesCheckboxChecked] = useState(true)

  const handleCheckboxChange = (
    type: ProgramTypesEnum.MOVIE | ProgramTypesEnum.SERIES
  ) => {
    if (isSeriesCheckboxChecked && isMoviesCheckboxChecked) {
      if (type === ProgramTypesEnum.MOVIE) {
        setMoviesCheckboxChecked(false)
      } else {
        setSeriesCheckboxChecked(false)
      }
      onSelectionChange(query.filter((element) => element !== type))
      return
    }
    if (type === ProgramTypesEnum.MOVIE && isSeriesCheckboxChecked) {
      setMoviesCheckboxChecked(true)
      onSelectionChange([...query, ProgramTypesEnum.MOVIE])
      return
    }
    if (type === ProgramTypesEnum.SERIES && isMoviesCheckboxChecked) {
      setSeriesCheckboxChecked(true)
      onSelectionChange([...query, ProgramTypesEnum.SERIES])
      return
    }
  }

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isSeriesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramTypesEnum.SERIES)}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isChecked={isMoviesCheckboxChecked}
        onChange={() => handleCheckboxChange(ProgramTypesEnum.MOVIE)}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
