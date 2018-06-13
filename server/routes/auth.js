import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import {secret} from "../config"
import {users, findUserByEmail} from "../middleware"
const app = express.Router()
const debug = new Debug("valentin-overflow:auth")

function comparePasswords(providedPassword,userPassword){
	return providedPassword === userPassword
}

const createToken = (user) => jwt.sign({user}, secret, {expiresIn: 86400}) 

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
		debug(`User with incorrect password`)
		return handleLoginFailed(res, 'El correo y la contrasena no coinciden')
	}
	const token = createToken(user)
	res.status(200).json({
		message: "Login Success",
		token: token,
		userId: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		email:user.email
	})
})

// /api/auth/signup
app.post('/signup', (req, res)=> {
 	const {firstName, lastName, email, password} = req.body;
 	const user = {
 		_id: +new Date(),
 		firstName,
 		lastName,
 		email,
 		password
 	}
 	debug(`Creating new user: ${user}`)
 	users.push(user)
 	const token = createToken(user)

 	res.status(201).json({
 		message: 'User saved success',
 		user:user,
 		token,
 		userId: user._id,
 		firstName,
 		lastName,
 		email
 	})
});

function handleLoginFailed(res, message){
	return res.status(401).json({
		message : "Login failed",
		error: message || 'Email and password don\'t match'
	})
}


export default app