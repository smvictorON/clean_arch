import dotenv from 'dotenv'
import express from 'express'
import carRouter from './infra/routers/CarRouter'
import { checkToken } from './infra/middlewares/checkToken'

const app = express()
const port = 3031

dotenv.config();

app.use(express.json())

app.use("/cars", checkToken, carRouter);

app.listen(port, () => {
  console.log(`Running on ${port}`)
})