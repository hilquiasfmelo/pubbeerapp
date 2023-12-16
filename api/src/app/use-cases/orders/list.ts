import { Request, Response } from 'express'

import { Order } from '../../models/order'

export async function ListOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product')

    return res.status(200).json(orders)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
