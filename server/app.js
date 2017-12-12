import express from 'express'
import { question } from './routes'
const app = express()
if(process.env.NODE_ENV === 'development')
{
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With. Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET PATCH, DELETE, OPTIONS')
    next();
  })
}

app.get('/', (req, res) =>
  res.send('Hola desde express')
)

app.use('/api/questions', question)

export default app
