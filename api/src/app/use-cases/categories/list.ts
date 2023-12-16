import { Request, Response } from 'express'

import { Category } from '../../models/category'

export async function ListCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find()

    return res.status(200).json(categories)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
