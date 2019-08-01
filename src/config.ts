const db = {
  user: 'jgmiu',
  password: 'jgmiu1994',
  dataName: 'home-data',
  host: '139.129.102.157:27017',
  port: '27017',
  name: 'mongodb://jgmiu:jgmiu1994@139.129.102.157:27017/home-data'
}

const connectStr = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.dataName}`

export {
  connectStr,
  db
}