// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';


export default async function checkStatus(
  req:NextApiRequest,
  res:NextApiResponse
) {
  try {
    const url = `${process.env.NEXT_PUBLIC_SHORT_URL}find/${req.query.id}`    
    const response = await axios.get(url);
    res.status(response.status).send(response.data);
  } catch (error:any) {
    res.status(error.response.status).send({status:"Request Failed"});
    };
}
 

