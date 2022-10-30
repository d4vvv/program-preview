import { SWRConfiguration } from 'swr'

export const fetcher: SWRConfiguration['fetcher'] = (resource, init) =>
  fetch(`${process.env['NEXT_PUBLIC_API_ADDRESS']}${resource}`, init).then(
    (res) => res.json()
  )
