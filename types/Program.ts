import { IIMDb } from './IMDb'
import { PlayProvider } from './PlayProvider'

export interface Program {
  id: string
  genres: string[]
  title: string
  imagePortrait: string
  imageLandscape: string
  playProviders: PlayProvider[]
  imdb?: IIMDb | null
  type: string
  programType: string
  reviews: any[]
  slug: string
  programId: string
  isPlay: boolean
  year: number
}
