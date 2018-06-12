import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
const app = express.Router()
const debug = new Debug("valentin-overflow:auth")
const secret = 'miclave123'

const user =[
	{
      firstName : "Jose",
      lastName: "Salina",
      email : "josevalentinsp@gmail.com",
      password:"123456",
      _id: 123
    },
    {
      firstName : "Otro",
      lastName: "Salina",
      email : "otrosp@gmail.com",
      password:"123456",
      _id: 1
    },
    {
      firstName : "Jose2",
      lastName: "Salina2",
      email : "josevalentinsp2@gmail.com",
      password:"123456",
      _id: 2
    }
]

function findUserByEmail(email){
	return user.find((element) => element.email === email)
}

function comparePasswords(providedPassword,userPassword){
	return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
	const {email, password} = req.body
	const user = findUserByEmail(email)
	if(!user)
	{
		debug(`User with email ${email} not found`)
		return handleLoginFailed(res)
	}
	if(!comparePasswords(password, user.password))
	{
		debug(`User with incorrect mpassword`)
		return handleLoginFailed(res)
	}
	const token = jwt.sign({user}, secret, {expiresIn: 86400})
	res.status(200).json({
		message: "Login Success",
		token: token,
		userId: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		email:user.email
	})
})

function handleLoginFailed(res){
	return res.status(401).json({
		message : "Login failed",
		error: 'Email and password don\'t match'
	})
}


export default app