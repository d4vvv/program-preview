import { Checkbox, Flex, useCheckboxGroup } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ProgramType } from '../types/ProgramType'

interface ProgramTypeSelectorProps {
  onSelectionChange(query: ProgramType[]): void
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  onSelectionChange,
}) => {
  const { value: checkboxTypeValue, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [ProgramType.SERIES, ProgramType.MOVIE],
  })

  useEffect(
    () => onSelectionChange(checkboxTypeValue as ProgramType[]),
    [onSelectionChange, checkboxTypeValue]
  )

  return (
    <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isReadOnly={!checkboxTypeValue.includes(ProgramType.MOVIE)}
        {...getCheckboxProps({ value: ProgramType.SERIES })}
      >
        Series
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        size="lg"
        isReadOnly={!checkboxTypeValue.includes(ProgramType.SERIES)}
        {...getCheckboxProps({ value: ProgramType.MOVIE })}
      >
        Movie
      </Checkbox>
    </Flex>
  )
}
