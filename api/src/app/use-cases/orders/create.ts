import { Request, Response } from 'express'
import { z } from 'zod'

import { Order } from '../../models/order'

export async function CreateOrder(req: Request, res: Response) {
  const productSchema = z.object({
    product: z.string(),
    quantity: z.number().default(1),
  })

  const createOrderBodySchema = z.object({
    table: z.string(),
    products: z.array(productSchema),
  })

  try {
    const { table, products } = createOrderBodySchema.parse(req.body)

    const order = await Order.create({
      table,
      products,
    })

    return res.status(201).json(order)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
