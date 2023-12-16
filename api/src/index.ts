import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'

import { routes } from './router'
import { env } from './env'
import { schemaValidationError } from './utils/validation-errors'

const app = express()

mongoose
  .connect(env.DATABASE_URL)
  .then(() => {
    app.use(express.json())
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    )

    app.use(routes)

    app.use(schemaValidationError)

    app.listen(env.PORT, () => {
      console.log(`🚀 API is running on http://192.168.1.105:${env.PORT}`)
    })
  })
  .catch(() => console.log('There was a failure to access the database'))
