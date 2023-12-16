import { Request, Response } from 'express'

import { Order } from '../../models/order'

export async function CancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params

    await Order.findByIdAndDelete(orderId)

    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
