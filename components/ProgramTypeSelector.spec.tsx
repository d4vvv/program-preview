import React from 'react'
import { render } from '../test'
import { ProgramType } from '../types/ProgramType'
import { ProgramTypeSelector } from './ProgramTypeSelector'
import userEvent from '@testing-library/user-event'

const mockSelectedProgramTypes = [ProgramType.MOVIE, ProgramType.SERIES]

describe('ProgramTypeSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProgramTypeSelector
        onSelectionChange={jest.fn()}
        selectedProgramTypes={mockSelectedProgramTypes}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
