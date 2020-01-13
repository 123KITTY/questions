<template>
    <a-breadcrumb style="margin: 16px 0">
        <template v-for="item in breadcrumbs">
            <a-breadcrumb-item :key="item">{{item}}</a-breadcrumb-item>
        </template>
    </a-breadcrumb>
</template>
<script>
export default {
  data () {
    let current = this.$route.matched.filter(z => z.name === this.$route.name)[0]
    let breadcrumbs = this.getBreadcrumbs(current)
    return {
      breadcrumbs
    }
  },
  watch: {
    // 监听当前路由变化，更新 breadcrumbs
    $route () {
      let current = this.$route.matched.filter(z => z.name === this.$route.name)[0]
      this.breadcrumbs = this.getBreadcrumbs(current)
    }
  },
  methods: {
    getBreadcrumbs: function (current) {
      let breadcrumbs = []
      if (current.meta && current.meta.title) {
        breadcrumbs.unshift(current.meta.title)
        if (current.parent) {
          breadcrumbs.unshift(...this.getBreadcrumbs(current.parent))
        }
      }
      return breadcrumbs
    }
  }
}
</script>
