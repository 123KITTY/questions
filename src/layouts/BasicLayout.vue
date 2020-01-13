<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <Header />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <Breadcrumb />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
        <a-back-top />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        vue-question ©2020 Created by Kitty
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from './Header'
import SiderMenu from './SiderMenu'
import Breadcrumb from './Breadcrumb'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {Header, SiderMenu, Breadcrumb}

}
</script>
<style scoped>
  #components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
  }
  #components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
