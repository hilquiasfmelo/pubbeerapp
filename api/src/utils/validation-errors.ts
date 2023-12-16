import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { env } from '../env'

export const schemaValidationError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof ZodError) {
    return res.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  } else {
    // TODO: Here we should log to an external tool like Datadog/NewRelic/Sentry
  }

  return res.status(500).send({ message: 'Internal server error.' })
}
