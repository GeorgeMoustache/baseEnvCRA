/**
 * ===API格式範例===
 *
 * @url sample
 */

module.exports = ({ method, query }) => {
  console.log('method=>', method)
  console.log('query=>', query)
  return {
    code: 0,
    message: "成功",
    data: {
      msg: 'API格式範例'
    }
  }
}
