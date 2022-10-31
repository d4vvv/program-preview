import React from 'react'
import { render } from '../test'
import { ProgramPreview } from './ProgramPreview'

describe('ProgramPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgramPreview />)
    expect(baseElement).toBeTruthy()
  })
})
