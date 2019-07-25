import {Article} from '../db/model'
import {successTemp, failTemp} from '../tooles'

// 由于定义了model 这里就不用ts的interface
const addArticle = async (article:any) => {
  const articleDb = new Article(article)
  let res = await articleDb.save()
  return res ? successTemp() : failTemp()
}

const getArticle = async () =>{
  let articles = await Article.find({}).sort({createTime: -1})
  return successTemp(articles)
}

export {
  addArticle,
  getArticle
}