<template>
<div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <a-form layout="horizontal"  v-if="current < steps.length - 1">
        <a-form-item
          label="题型"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 5 }"
          >
          <a-cascader :options="kindList" placeholder="请选择" />
        </a-form-item>
        <a-form-item
          label="标题"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 8 }"
          >
          <a-input placeholder="12~30 字之间"></a-input>
        </a-form-item>
        <a-form-item
          label="选项索引"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 3 }"
        >
          <a-select :defaultValue="indexesDefault">
            <template v-for="item of indexes">
              <a-select-option :key="item" :value="item">{{item}}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item
          label="选项内容"
          :required="false"
          :label-col="{ span: 2 }"
          :wrapper-col="{ span: 10 }"
        >
        <a-input-group compact v-for="(k) in form.getFieldValue('keys')"  :key="k">
          <a-input style="width: 10%" defaultValue="A" />
          <a-input style="width: 90%"
            v-bind="formItemLayout"
            placeholder="选项内容"
            defaultValue="">
            <a-icon
              slot="addonAfter"
              class="dynamic-delete-button"
              type="minus-circle-o"
              :disabled="form.getFieldValue('keys').length === 1"
              @click="() => remove(k)"
            />
          </a-input>
        </a-input-group>
        </a-form-item>
        <a-form-item
          v-bind="formItemLayoutWithOutLabel"
          :wrapper-col="{ offset:2 }"
          extra="选项顺序以序号为准，选项数量上线为10个"
          >
          <a-button type="dashed" @click="add">
            <a-icon type="plus" /> 添加选项
          </a-button>
        </a-form-item>
      </a-form>
      <div v-if="current == steps.length - 1">
      <a-skeleton :loading="loading">
        <a-row type="flex" justify="center" align="top">
          <template v-for="(item,index) in questionStyle">
            <a-col :span="4" :key="item">
              <a-radio-group v-model="questionStyleDefault">
                <a-card :title="item.name">
                  <a-radio slot="extra" :value="item.name">选择</a-radio>
                    <template v-if="item.type == 'radio'">
                      <a-radio-group>
                        <a-radio :style="item.style" :value="index*2">Option {{index+1}}</a-radio>
                        <a-radio :style="item.style" :value="index*2+1">Option B</a-radio>
                      </a-radio-group>
                    </template>
                    <template v-else-if="item.type == 'checkbox'">
                      <a-checkbox-group>
                        <a-checkbox :value="index*2" :style="item.style">Option A</a-checkbox>
                        <a-checkbox :value="index*2+1" :style="item.style">Option B</a-checkbox>
                      </a-checkbox-group>
                    </template>
                    <template v-else-if="item.type == 'textarea'">
                      <a-textarea placeholder="这里输入" :rows="4" />
                    </template>
                </a-card>
              </a-radio-group>
            </a-col>
          </template>
        </a-row>
        </a-skeleton>
      </div>
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="current++">
        下一步
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
      >
        完成
      </a-button>
      <a-button v-if="current>0" style="margin-left: 8px" @click="current--">
        上一步
      </a-button>
    </div>
</div>
</template>
<script>
import request from '../../utils/request'
import enums from '../../enum/index'
let id = 0
export default {
  data () {
    return {
      kindList: [], // 题型
      indexes: [], // 选项索引
      indexesDefault: enums.question_key['1'], // 选项索引默认值
      questionStyle: [], // 答题选项样式
      questionStyleDefault: enums.question_style['style1'].name,
      dataSource: [],
      current: 0,
      loading: true,
      steps: [
        {
          title: '编辑题目类型',
          content: '题型、是否必填、内容要求、题目标题、题目选项'
        },
        {
          title: '展示效果',
          content: '所见即所得'
        }
      ]
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'dynamic_form_item' })
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true })
  },
  created () {
    this.getKinds()
    this.getIndexes()
    this.getQuestionStyle()
  },
  methods: {
    getQuestionStyle () {
      for (let key in enums.question_style) {
        this.questionStyle.push(enums.question_style[key])
      }
    },
    getIndexes () {
      for (let key in enums.question_key) {
        this.indexes.push(enums.question_key[key])
      }
    },
    getKinds () {
      let that = this
      request({
        method: 'get',
        url: '/api/question/kindList'
      }).then((res) => {
        that.kindList = res.data.kindList
        that.$nextTick(() => {
          this.loading = false
        })
      }).catch((res) => {
        console.log(res)
      })
    },
    add () {
      const { form } = this
      // can use data-binding to get
      const keys = form.getFieldValue('keys')
      const nextKeys = keys.concat(id++)
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      })
    },
    remove (k) {
      const { form } = this
      // can use data-binding to get
      const keys = form.getFieldValue('keys')
      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      })
    },
    handleChange (value) {
      this.dataSource =
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
    }
  }
}
</script>

<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: left;
    padding: 50px 0;
  }

  .steps-action {
    margin-top: 24px;
  }
  .ant-checkbox-wrapper + .ant-checkbox-wrapper{
    margin-left: 0
  }
  .ant-card-head-title{
    word-break: break-all
  }
</style>
