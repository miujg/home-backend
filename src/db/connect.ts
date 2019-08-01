/**
 * 数据库连接
 */

import {connectStr, db} from '../config'
import * as mongoose from 'mongoose'

mongoose.connect(connectStr, { useNewUrlParser: true })
const dbObj = mongoose.connection

dbObj.on('open', () =>{
  console.log('data connect success:', connectStr)
})

export default dbObj