import dotenv from 'dotenv'
import express from 'express'
import carRouter from './infra/routers/CarRouter'
import { checkToken } from './infra/middlewares/checkToken'

const app = express()

dotenv.config();

app.use(express.json())

app.use("/cars", checkToken, carRouter);

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`)
})