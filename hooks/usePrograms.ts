import useSWR from 'swr'

interface useProgramsProps {
  query: string
}

export const usePrograms = ({ query }: useProgramsProps) => {
  const { data, ...swr } = useSWR(
    `https://stage-api-frontend.tv.nu/programs?orderBy=views&programType=${query}`,
    null
  )

  return { data, ...swr }
}
