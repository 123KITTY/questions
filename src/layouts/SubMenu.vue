<template functional>
    <a-sub-menu :key="props.submenus.path">
        <span slot="title">
          <a-icon v-if="props.submenus.meta.icon" :type="props.submenus.meta.icon" />
          <span>{{props.submenus.meta.title}}</span>
        </span>
        <template v-for="item in props.submenus.children">
          <a-menu-item
            :key="item.path"
            v-if="!item.children"
            @click="()=>parent.$router.push({path:item.path})" >
            <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
            <span>{{item.meta.title}}</span>
          </a-menu-item>
          <sub-menu v-else :submenus="item" :key="item.path" />
        </template>
    </a-sub-menu>
</template>
<script>
export default {
  props: ['submenus']
}
</script>
