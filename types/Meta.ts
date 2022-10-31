export interface Meta {
  status: number
  pagination: Pagination
}

interface Pagination {
  page: number
  perPage: number
  hasNext: boolean
}
