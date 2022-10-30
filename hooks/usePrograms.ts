import useSWR from 'swr'

interface useProgramsProps {
  query: string
  perPage?: number
  page?: number
}

export const usePrograms = ({
  query,
  perPage = 15,
  page = 1,
}: useProgramsProps) => {
  const { data, ...swr } = useSWR(
    `/programs?query=${query.trim()}&perPage=${perPage}&page=${page}`,
    null,
    {
      revalidateOnFocus: false,
    }
  )

  return { data, ...swr }
}
