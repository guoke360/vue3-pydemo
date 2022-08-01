const data = [
  {
    title: '任务条滚动，测试',
    closable: false,
    type: 'success',
  },
  {
    title: '滚动测试2',
    closable: false,
    type: 'warning',
  },
  {
    title: '滚动测试3',
    closable: false,
    type: 'success',
  },
]
module.exports = [
  {
    url: '/notice/getList',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
