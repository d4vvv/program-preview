import userEvent from '@testing-library/user-event'
import React from 'react'
import { render } from '../test'
import { IMDbSortType } from '../types/IMDbSortType'
import { IMDbSort } from './IMDbSort'

describe('IMDbSort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IMDbSort
        onSortChange={jest.fn()}
        sort={IMDbSortType.NONE}
        isDisabled={false}
      />
    )
    expect(baseElement).toBeTruthy()
  })

  it('should call on submit', async () => {
    const user = userEvent.setup()
    const mockHandler = jest.fn()
    const { getByRole } = render(
      <IMDbSort
        onSortChange={mockHandler}
        sort={IMDbSortType.NONE}
        isDisabled={false}
      />
    )

    const button = getByRole('button', { name: /sort by imdb/i })
    await user.click(button)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
