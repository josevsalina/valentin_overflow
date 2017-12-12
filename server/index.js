import Debug from 'Debug'
import app from './app'

const PORT =3000

const debug = new Debug('valentin-overflow:root')

app.listen(PORT,() => {
  debug("Server is running in "+ PORT)
})
