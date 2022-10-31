import { Meta } from './Meta'
import { Program } from './Program'

export interface FetchResponse {
  meta: Meta
  data: Program[]
}
