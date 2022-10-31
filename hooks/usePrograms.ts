import useSWR from 'swr'
import { ProgramTypes } from '../types/ProgramTypes'

interface useProgramsProps {
  query: ProgramTypes[]
}

export const usePrograms = ({ query }: useProgramsProps) => {
  return useSWR(
    `https://stage-api-frontend.tv.nu/programs?orderBy=views&programType=${query.join(
      ','
    )}`,
    null
  )
}
