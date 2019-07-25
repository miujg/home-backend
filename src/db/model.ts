import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  type: Number,
  targets: {type: Array}
})

const User = mongoose.model('User', userSchema)

export {
  User  
}