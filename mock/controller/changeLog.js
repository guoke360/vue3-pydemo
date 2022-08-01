const data = [
  {
    content: '金舟软件',
    timestamp: '2017.9-2018.3',
  },
  {
    content: '增加更换主题功能',
    timestamp: '2020-04-10',
  },
  {
    content: '大幅精简代码',
    timestamp: '2020-04-14',
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
