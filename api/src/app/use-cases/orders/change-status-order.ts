import { Request, Response } from 'express'
import { z } from 'zod'

import { Order } from '../../models/order'

export async function ChangeStatusOrder(req: Request, res: Response) {
  const changeStatusOrderBodySchema = z.object({
    status: z.string(),
  })

  try {
    const { orderId } = req.params
    const { status } = changeStatusOrderBodySchema.parse(req.body)

    if (!['waiting', 'production', 'done'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: waiting, production, done',
      })
    }

    await Order.findByIdAndUpdate(orderId, { status })

    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: 'There was a type of error with this request, please try again.',
    })
  }
}
