<template>
  <div id="testComponent">
    <button type="button" name="button" v-bind:class="{pink:isPink}" @click="btnClickEvent(message)">{{message}}</button>
  </div>
</template>
<script>
export default {
  // props: {
  //   message: '',
  //   isPink: ''
  // },
  data: function () {
    // isPink: 'false';
    return {
      message: 'message',
      isPink: false
    }
  },
  methods: {
    btnClickEvent: function (isPink) {
      // message = 'hi'
      isPink = this.isPink
      this.message = 'hi'
      this.isPink = !this.isPink
      this.$emit('clickEvent', isPink)
    }
    // myEvent () {
    //   this.isPink = !this.isPink;
    // }
    // myEvent:function(){
    //   // eslint-disable-next-line no-unused-expressions
    //   this.$emit('myEvent2',this.message)
    // }
  }
  // methods: {
  //   btnClickEvent: function () {
  //     this.$emit('btnClickEvent')
  //   }
  // }
}
</script>
<style scoped>
.pink{
  background-color: #c7a3b5;
}
</style>
