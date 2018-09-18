import Debug from 'Debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl} from './config'

const PORT =3000

const debug = new Debug('valentin-overflow:root')

mongoose.Promise = global.Promise

async function start(){
  await mongoose.connect(mongoUrl,  { useNewUrlParser: true })
  app.listen(PORT,() => {
    debug("Server is running in "+ PORT)
  })
}

start()