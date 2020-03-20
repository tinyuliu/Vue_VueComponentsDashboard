<!-- Button Component -->
<template>
  <button class="qui-btn" @click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: 'Download'
    }
  },
  methods: {
    btnClickEvent: function () {
      this.$emit('btnClickEvents')
      // arert('popout the default message first!')
      // this.$emit('btnClickEvent')// 關鍵代碼富組件觸發自定義事件
      // // $emit副C 監聽 子C 觸發
    }
  }
}
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
