import { Request, Response } from 'express'
import { z } from 'zod'

import { Category } from '../../models/category'

export async function CreateCategories(req: Request, res: Response) {
  const createCategoriesBobySchema = z.object({
    name: z.string(),
    icon: z.string(),
  })

  try {
    const { name, icon } = createCategoriesBobySchema.parse(req.body)

    const nameCategoryExists = await Category.findOne({ name })

    if (nameCategoryExists) {
      return res.status(400).send({
        error: 'This category is already registered.',
      })
    }

    const category = await Category.create({
      name,
      icon,
    })

    return res.status(201).json(category)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
