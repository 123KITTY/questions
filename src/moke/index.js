// 将所有的mock文件引入
import '../moke/question/index'
// 在这里可以做一些通用的配置
import Mock from 'mockjs'
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: 0 - 300
})
