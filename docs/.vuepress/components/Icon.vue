<template>
  <i :class="`iconfont icon-${type}`" :style="styles" />
</template>
<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#ccc'
    },
    size: {
      type: [String, Number],
      default: 16
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  }
}
</script>
