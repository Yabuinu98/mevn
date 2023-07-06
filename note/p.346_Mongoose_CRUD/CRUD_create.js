const Schema_ori = require('./CRUD_ori.js')

const main = async () => {
  const _data = {
    albumId: 12014,
    id: 314,
    title: '베트맨',
    url: 'google.com',
    thumbnailUrl: 'https://naver.com'
  }
  const CRUD_C = new Schema_ori(_data)
  const t = await CRUD_C.save()
  console.log(t)
}

main()
