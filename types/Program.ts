import { IIMDb } from './IMDb'
import { PlayProvider } from './PlayProvider'

export interface Program {
  id: string
  genres: string[]
  title: string
  imageLandscape: string
  playProviders: PlayProvider[]
  imdb?: IIMDb
}
