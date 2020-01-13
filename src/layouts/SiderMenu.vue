<template>
    <a-menu
      theme="dark"
      mode="inline"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
    <!-- 一级菜单 -->
    <template v-for="item in menus">
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        @click="()=>$router.push({path:item.path})">
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{item.name}}{{item.children}}</span>
      </a-menu-item>
      <!-- 二级菜单 -->
      <sub-menu v-else :submenus="item" :key="item.path" />
    </template>
    <!-- 二级菜单 -->
    </a-menu>
</template>

<script>
import SubMenu from './SubMenu' // 二级菜单
export default {
  components: {
    'sub-menu': SubMenu
  },
  data () {
    const menus = this.getMenus(this.$router.options.routes)
    console.log(menus)
    return {
      menus: menus
    }
  },
  methods: {
    getMenus: function (routers) {
      let menus = []
      for (let item of routers) {
        if (item.name) {
          let newItem = {...item}
          delete newItem.children
          if (item.children && item.children.length > 0) {
            newItem.children = this.getMenus(item.children)
          }
          menus.push(newItem)
        } else if (item.children && item.children.length > 0) {
          menus.push(...this.getMenus(item.children))
        }
      }
      return menus
    }
  }
}

</script>
