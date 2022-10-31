import React from 'react'
import { render } from '../../test'
import { ProgramCard } from './ProgramCard'

const mockProgram = {
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
}

const mockProgramWithoutPlayProviders = {
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
  playProviders: [],
}

const mockProgramWithoutIMDb = {
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
  imdb: null,
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
}

describe('ProgramCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgramCard program={mockProgram} />)
    expect(baseElement).toBeTruthy()
  })

  it('should render proper image', () => {
    const { getByRole } = render(<ProgramCard program={mockProgram} />)
    expect(
      getByRole('img', {
        name: /image of the pianist movie/i,
      })
    ).toBeInTheDocument()
  })
  it('should render proper title', () => {
    const { getByText } = render(<ProgramCard program={mockProgram} />)
    expect(getByText(/the pianist/i)).toBeInTheDocument()
  })
  it('should render proper genres', () => {
    const { getByText } = render(<ProgramCard program={mockProgram} />)
    expect(getByText(/krig, drama/i)).toBeInTheDocument()
  })
  it('should render proper imdb score', () => {
    const { getByText } = render(<ProgramCard program={mockProgram} />)
    expect(getByText(/8.5/i)).toBeInTheDocument()
  })
  it('should render "No data" when no play providers are available', () => {
    const { getByText } = render(
      <ProgramCard program={mockProgramWithoutPlayProviders} />
    )
    expect(getByText(/Streaming: No data/i)).toBeInTheDocument()
  })
  it('should render "Unknown" when no imdb score is available', () => {
    const { getByText } = render(
      <ProgramCard program={mockProgramWithoutIMDb} />
    )
    expect(getByText(/Unknown/i)).toBeInTheDocument()
  })
})
