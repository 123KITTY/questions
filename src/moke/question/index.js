import Mock from 'mockjs'
import enums from '../../enum/index'
const questionList = {
  'code': 200,
  'list|30': [{
    'href': `@url('https')`,
    'id': `@id()`,
    'type': `@integer(1,3)`,
    'title': `@ctitle(5, 20)`,
    'description': `@csentence(8, 40)`,
    'content': `@cparagraph(2, 6)`
  }],
  'msg': 'success'
}
const kinds = enums.question_Kind
const type = enums.question_require.type
const require = enums.question_require.require
const answer = enums.question_require.answer
function getOptins (list, children) {
  let dataJson = []
  for (let i = 0; i < list.length; i++) {
    let item = {
      value: list[i],
      label: list[i],
      children: children || []
    }
    children || delete item.children
    dataJson.push(item)
  }
  return dataJson
}
function getKindList () {
  let options = []
  for (let key in kinds) {
    let option = {value: kinds[key], label: kinds[key], children: []}
    let childrenAnswer = getOptins(answer)
    let childrenRequire = getOptins(require, childrenAnswer)
    let childrenType = getOptins(type, childrenRequire)
    option.children = (childrenType)
    options.push(option)
  }
  return options
}
const kindList = {
  'code': 200,
  'kindList': getKindList(),
  'msg': 'success'
}
Mock.mock('/api/question/list', 'get', questionList)
Mock.mock('/api/question/kindList', 'get', kindList)
