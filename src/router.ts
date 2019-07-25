import * as Router from 'koa-router'
import {getUser} from './action/user'
import * as article from './action/article'

console.log('router')

const router = new Router()

router.post('/user', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {name: 'xxx'}
})

router.get('/user', async (ctx, next) => {
  console.log('----->')
  let uses = await getUser()
  ctx.body = {user: uses}
})

// article
router.post('/article', async (ctx, next) => {
  let res = await article.addArticle(ctx.request.body)
  ctx.body = res
})

router.get('/article', async (ctx, next) => {
  let res = await article.getArticle()
  ctx.body = res
})


export {
  router
}