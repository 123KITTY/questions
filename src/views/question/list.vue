<template>
    <a-skeleton :loading="loading">
      <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
        <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
          <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
            <template slot="actions" v-for="({type, text, twoToneColor, title}, acIndex) in actions">
              <a-tooltip placement="bottom"  :key="type">
                <template slot="title">
                  <span>{{title}}</span>
                </template>
                  <span v-if="acIndex < actions.length-1">
                    <a-icon :type="type" theme="twoTone" :twoToneColor="twoToneColor" style="margin-right: 8px" />
                    {{text}}
                  </span>
                  <span v-else>
                    <a-icon hidden :type="type" theme="twoTone" :twoToneColor="twoToneColor" style="margin-right: 8px" />
                    <a-rate :key="type" :defaultValue="2" disabled />
                  </span>
              </a-tooltip>
            </template>
            <a-list-item-meta :description="item.description">
              <a slot="title" :href="item.href">
                <a-tag :color="item.class">{{item.name}}</a-tag>
                {{item.title}}
              </a>
            </a-list-item-meta>
            {{item.content}}
          </a-list-item>
      </a-list>
    </a-skeleton>
</template>

<script>
import request from '../../utils/request'
import enums from '../../enum/index'
export default {
  data () {
    return {
      loading: true,
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 8
      },
      actions: [
        { type: 'star', text: '156', title: '收藏', twoToneColor: '' },
        { type: 'like', text: '156', title: '点赞', twoToneColor: '' },
        { type: 'message', text: '2', title: '评论', twoToneColor: '' },
        { type: 'edit', text: '', title: '编辑', twoToneColor: '' },
        { type: 'delete', text: '', title: '删除', twoToneColor: '#F44336' },
        { type: 'pie-chart', text: '', title: '数据分析', twoToneColor: '' },
        { type: 'eye', text: '', title: '隐藏', twoToneColor: '' },
        { type: 'star', text: '', title: '评分', twoToneColor: '' }
      ]
    }
  },
  created: function () {
    this.getQuestionList()
  },
  methods: {
    getQuestionList: function () {
      let that = this
      request({
        method: 'get',
        url: '/api/question/list'
      }).then((res) => {
        that.listData = res.data.list.map(item => {
          item.class = enums.questionType['' + item.type].class
          item.name = enums.questionType['' + item.type].name
          return item
        })
        that.$nextTick(() => {
          this.loading = false
        })
      }).catch((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
