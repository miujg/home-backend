import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  type: Number,
  targets: {type: Array}
})

const articleSchema = new mongoose.Schema({
  title: String,
  createTime: {type: Date, default: Date.now()},
  content: String
})

const User = mongoose.model('User', userSchema)
const Article = mongoose.model('Article', articleSchema)

export {
  User,
  Article  
}