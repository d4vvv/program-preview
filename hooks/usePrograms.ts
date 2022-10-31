import { useMemo } from 'react'
import useSWR from 'swr'
import { FetchResponse } from '../types/FetchResponse'
import { IMDbSortType } from '../types/IMDbSortType'
import { ProgramType } from '../types/ProgramType'

interface UseProgramsProps {
  query: ProgramType[]
  sort: IMDbSortType
}

export const usePrograms = ({ query, sort }: UseProgramsProps) => {
  const { data, ...swr } = useSWR<FetchResponse>(
    `/programs?orderBy=views&programType=${query.join(',')}`,
    null
  )
  const sorted = useMemo(() => {
    if (!data) {
      return undefined
    }
    switch (sort) {
      case IMDbSortType.ASC:
        return [...data.data].sort(
          (current, next) =>
            parseFloat(current.imdb?.rating ?? '0') -
            parseFloat(next.imdb?.rating ?? '0')
        )
      case IMDbSortType.DESC:
        return [...data.data].sort(
          (current, next) =>
            parseFloat(next.imdb?.rating ?? '0') -
            parseFloat(current.imdb?.rating ?? '0')
        )
      default:
        return data.data
    }
  }, [data, sort])

  return { data: sorted, ...swr }
}
