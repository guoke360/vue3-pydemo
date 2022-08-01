const data = [
  {
    title: '博客园',
    url: 'https://www.cnblogs.com/guoke360/',
  },
  {
    title: 'github',
    url: 'https://github.com/guoke360',
  },
  {
    title: '邮箱',
    url: 'liu.yj1998@outlook.com',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
