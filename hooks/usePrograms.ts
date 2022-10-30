import useSWR from 'swr'
import { ProgramType } from '../types/ProgramType'

interface useProgramsProps {
  query: ProgramType[]
}

export const usePrograms = ({ query }: useProgramsProps) => {
  return useSWR(
    `https://stage-api-frontend.tv.nu/programs?orderBy=views&programType=${query.join(
      ','
    )}`,
    null
  )
}
