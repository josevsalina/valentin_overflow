import Debug from 'debug'

import {secret} from '../config'
import jwt from "jsonwebtoken"
const debug = new Debug("valentin-overflow:auth-middleware")

export const users =[
	{
      firstName : "Jose",
      lastName: "Salina",
      email : "josevalentinsp@gmail.com",
      password:"123456",
      _id: 1
    }
]

export const findUserByEmail =(email) =>{
  return users.find((element) => element.email === email)
}

export const required = (req, res, next) => {
  jwt.verify(req.query.token, secret, (err, token) =>{
    if(err){
      debug('JWT was not encripted with our secret')
      return res.status(401).json({
        message: 'Unauthorized',
        err: err
      })
    }
    debug(`Token verified: ${token}` )
    next()
  })
}