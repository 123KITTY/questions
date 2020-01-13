export default {
  questionType: {
    '1': {'class': 'pink', 'name': '填空题'},
    '2': {'class': 'purple', 'name': '多选题'},
    '3': {'class': 'green', 'name': '单选题'}
  },
  question_require: {
    'type': ['单选题', '多选题', '填空题'],
    'require': ['必答题', '非必答题'],
    'answer': ['有正确答案', '没有正确答案']
  },
  question_Kind: {
    '1': '答题',
    '2': '问卷'
  },
  question_key: {
    '1': '大写英文字母: ABCD...',
    '2': '小写英文字母: abcd...',
    '3': '数字: 1234...',
    '4': '罗马字符: ⅠⅡⅢⅣ...'
  },
  question_style: {
    'style1': {type: 'radio', name: '单选样式一', title: '这是样式标题这是样式标题这是样式标题', style: {display: 'block', height: '30px ', lineHeight: '30px'}},
    'style2': {type: 'radio', name: '单选样式二', title: '这是样式标题这是样式标题这是样式标题', style: {display: 'inline-block', height: '30px', lineHeight: '30px'}},
    'style3': {type: 'checkbox', name: '多选样式一', title: '这是样式标题这是样式标题这是样式标题', style: {display: 'inline-block', height: '30px', lineHeight: '30px'}},
    'style4': {type: 'checkbox', name: '多选样式二', title: '这是样式标题这是样式标题这是样式标题', style: {display: 'block', height: '30px ', lineHeight: '30px'}},
    'style5': {type: 'textarea', name: '填空题', title: '这是样式标题这是样式标题这是样式标题', style: {display: 'block', height: '30px ', lineHeight: '30px'}}
  }
}
