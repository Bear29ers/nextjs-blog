import { NextApiRequest, NextApiResponse } from "next"

exoprt default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}
