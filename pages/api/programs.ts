import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, perPage, page } = req.query
  const response = await fetch(
    `https://stage-api-frontend.tv.nu/programs?orderBy=views&programType=${query}`
  )

  const data = await response.json()

  res.status(200).json(data)
}
