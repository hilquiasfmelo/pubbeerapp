import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'

import { ListCategories } from './app/use-cases/categories/list'
import { CreateCategories } from './app/use-cases/categories/create'
import { ListProducts } from './app/use-cases/products/list'
import { CreateProducts } from './app/use-cases/products/create'
import { ListOrders } from './app/use-cases/orders/list'
import { CreateOrder } from './app/use-cases/orders/create'
import { ChangeStatusOrder } from './app/use-cases/orders/change-status-order'
import { CancelOrder } from './app/use-cases/orders/cancel'
import { ListProductsByCategory } from './app/use-cases/categories/list-product-by-category'

export const routes = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    },
  }),
})

routes.get('/categories', ListCategories)

routes.post('/categories', CreateCategories)

routes.get('/products', ListProducts)

routes.post('/products', upload.single('image'), CreateProducts)

routes.get('/categories/:categoryId/products', ListProductsByCategory)

routes.get('/orders', ListOrders)

routes.post('/orders', CreateOrder)

routes.patch('/orders/:orderId', ChangeStatusOrder)

routes.delete('/orders/:orderId', CancelOrder)
