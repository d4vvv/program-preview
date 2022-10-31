import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderOptions } from '@testing-library/react'
import React, { PropsWithChildren, ReactElement } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher'

const AllTheProviders: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <SWRConfig value={{ provider: () => new Map(), fetcher }}>
      <ChakraProvider>{children}</ChakraProvider>
    </SWRConfig>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
