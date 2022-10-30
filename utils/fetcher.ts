import { SWRConfiguration } from 'swr'

export const fetcher: SWRConfiguration['fetcher'] = (resource, init) =>
  fetch(resource, init).then((res) => res.json())
