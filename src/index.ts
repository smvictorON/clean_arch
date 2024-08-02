import express from 'express'
import CarController from './infra/controllers/CarController'
import { ICar } from './domains/ICar'

const app = express()
const port = 3031

app.use(express.json())

app.post("/cars", (req, res) => CarController.createCar(req, res));
app.get("/cars", (req, res) => CarController.getCars(req, res));

app.listen(port, () => {
  console.log(`Running on ${port}`)
})