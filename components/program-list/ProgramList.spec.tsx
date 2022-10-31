import React from 'react'
import { render } from '../../test'
import { ProgramList } from './ProgramList'

const mockProgramList = [
  {
    type: 'program',
    programType: 'Film',
    reviews: [
      {
        rating: 4.165,
        image: 'https://new.static.tv.nu/91363487',
        url: 'http://www.svd.se/kultur/film/artikel_23229.svd',
        providerName: 'Svenska Dagbladet',
        quotes: [
          {
            text: '...handlar egentligen inte så mycket om konsten att överleva, som om att konsten överlever allt, att konsten är den gemensamma plats där alla kan mötas oavsett ursprung och religion.',
          },
        ],
      },
    ],
    id: '388',
    slug: 'the-pianist',
    programId: '388',
    isPlay: true,
    trailerId: '18153',
    title: 'The Pianist',
    imagePortrait: 'https://new.static.tv.nu/18663884',
    imageLandscape: 'https://new.static.tv.nu/18663885',
    year: 2002,
    genres: ['Krig', 'Drama'],
    imdb: {
      rating: '8.5',
      link: 'http://www.imdb.com/title/tt0253474/',
    },
    playProviders: [
      {
        name: 'Viaplay',
        slug: 'viaplay',
        image: 'https://new.static.tv.nu/17048879',
      },
      {
        name: 'SF Anytime',
        slug: 'sf-anytime',
        image: 'https://new.static.tv.nu/17636537',
      },
      {
        name: 'Google Play',
        slug: 'google-play',
        image: 'https://new.static.tv.nu/41581928',
      },
      {
        name: 'iTunes',
        slug: 'itunes',
        image: 'https://new.static.tv.nu/18191306',
      },
    ],
  },
  {
    type: 'program',
    programType: 'Serier',
    reviews: [],
    id: '2',
    slug: 'no-abras-la-puerta',
    programId: '2',
    isPlay: false,
    title: 'No Abras la Puerta',
    imagePortrait: 'https://new.static.tv.nu/16827241',
    imageLandscape: 'https://new.static.tv.nu/16827241',
    year: 2014,
    genres: ['Drama', 'Komedi', 'Komedi', 'Drama', 'Romantik'],
    imdb: null,
    playProviders: [],
  },
]

describe('ProgramList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgramList programs={mockProgramList} />)
    expect(baseElement).toBeTruthy()
  })

  it('should render all elements', () => {
    const { getByText } = render(<ProgramList programs={mockProgramList} />)
    expect(getByText(/no abras la puerta/i)).toBeInTheDocument()
    expect(getByText(/the pianist/i)).toBeInTheDocument()
  })
})
