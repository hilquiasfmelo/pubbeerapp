import { Request, Response } from 'express'

import { Product } from '../../models/product'

export async function CreateProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename
    const { name, description, price, category, ingredients } = req.body

    const nameProductExists = await Product.findOne({ name })

    if (nameProductExists) {
      return res.status(400).send({
        error: 'This product is already registered.',
      })
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    })

    return res.status(201).json(product)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
