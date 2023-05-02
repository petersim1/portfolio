// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return fetch("https://api.github.com/repos/petersim1/petersim1.github.io")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Fetch");
    })
    .then((result) => {
      return res.status(200).json({ ...result });
    })
    .catch((error) => {
      console.log(error);
      return res.status(404).send("Couldn't fetch");
    });
};

export default handler;
