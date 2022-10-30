import useSWR from 'swr'
import { ProgramTypesEnum } from '../types/ProgramTypesEnum'

interface useProgramsProps {
  query: ProgramTypesEnum[]
}

export const usePrograms = ({ query }: useProgramsProps) => {
  return useSWR(
    `https://stage-api-frontend.tv.nu/programs?orderBy=views&programType=${query.join(
      ','
    )}`,
    null
  )
}
