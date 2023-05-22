// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function getShortUrl(
  req:NextApiRequest,
  res:NextApiResponse
) {
  try {
    const response = await axios.post(`https://${process.env.NEXT_PUBLIC_API_URL}`, req.body);
    res.status(response.status).send(response.data);
  } catch (error:any) {
    res.status(error.response.status).send({status:"Request Failed"});
    };
}
 
