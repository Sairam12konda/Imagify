import express from 'express'
import { gernerateImage } from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image',userAuth, gernerateImage)

export default imageRouter