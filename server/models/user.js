import mongoose, {Schema} from 'mongoose'
let uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastnName: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true}
})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)