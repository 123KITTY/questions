<template>
  <a-layout-header class="header">
      <div class="logo" v-bind:style="'backgroundImage:url('+logo+')'" />
    </a-layout-header>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      logo
    }
  }
}

</script>
<style scoped>
  .logo {
    height: 46px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 10px 0 16px 0;
  }
  .ant-layout-header{
    padding: 0 25px;
  }
  .ant-layout-sider-collapsed .ant-layout-header{
    padding: 0 2px;
  }
  .ant-layout-sider-collapsed .logo{
    height: 30px;
  }
</style>
