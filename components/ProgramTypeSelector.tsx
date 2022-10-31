import { Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'
import { ProgramType } from '../types/ProgramType'

interface ProgramTypeSelectorProps {
  onSelectionChange(query: ProgramType[]): void
  selectedProgramTypes: ProgramType[]
}

export const ProgramTypeSelector: React.FC<ProgramTypeSelectorProps> = ({
  onSelectionChange,
  selectedProgramTypes,
}) => {
  return (
    <CheckboxGroup
      onChange={(value) => onSelectionChange(value as ProgramType[])}
      defaultValue={selectedProgramTypes}
    >
      <Flex direction={['row', 'column']} basis="12%" gap={[4, 1]}>
        <Checkbox
          colorScheme="orange"
          size="lg"
          value={ProgramType.SERIES}
          isDisabled={!selectedProgramTypes.includes(ProgramType.MOVIE)}
        >
          Series
        </Checkbox>
        <Checkbox
          colorScheme="orange"
          size="lg"
          value={ProgramType.MOVIE}
          isDisabled={!selectedProgramTypes.includes(ProgramType.SERIES)}
        >
          Movie
        </Checkbox>
      </Flex>
    </CheckboxGroup>
  )
}
