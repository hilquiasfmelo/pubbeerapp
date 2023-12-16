import { Request, Response } from 'express'

import { Product } from '../../models/product'

export async function ListProducts(req: Request, res: Response) {
  try {
    const products = await Product.find()

    return res.status(200).json(products)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
