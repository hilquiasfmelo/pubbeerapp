import { Request, Response } from 'express'

import { Product } from '../../models/product'

export async function ListProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params

    const products = await Product.find().where('category').equals(categoryId)

    return res.status(200).json(products)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
