const data = [
  {
    content: '金舟软件',
    timestamp: '2017.9-2018.3',
  },
  {
    content: '上海仙瑜网络',
    timestamp: '2018.7-2020.5',
  },
  {
    content: '江苏斯诺物联',
    timestamp: '2020.6-今',
  },
]

module.exports = [
  {
    url: '/changeLog/getList',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        totalCount: 999,
        data: data,
      }
    },
  },
]
