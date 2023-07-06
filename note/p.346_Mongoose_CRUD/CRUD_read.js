const Schema_ori = require('./CRUD_ori.js')

const main = async () => {
  const t = await Schema_ori.find(
    {
      title: /맨$/
    },
    { _id: 0 }
  ).lean()
  console.log(t)
}

main()
