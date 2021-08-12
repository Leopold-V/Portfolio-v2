import type { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://dev.to/api/articles?username=leopold';

type Data = {
  data: any | null;
  error: string | null;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    res.status(200).json({
      data: json,
      error: null,
    });
  } catch (error) {
    res.status(501).json({
      data: null,
      error: 'Error gathering the data',
    });
  }
};
