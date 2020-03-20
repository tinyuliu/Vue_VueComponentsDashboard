<template>
  <div id="pageTest">
    <test-view message="Button1"/>
    <test-view message="Button2" isPink="true" @clickEvent="clickEvent"/>
    <test-view message="Button3" @click.native="btnNativeEvent"/>
  </div>
</template>
<script>
import quiTest from '../components/testComponent.vue'
export default{
  name: 'pageTest',
  components: {
    'test-view': quiTest
  },
  methods: {
    // btnClick: function () {
    //   // color = 'pink'
    //
    // },
    clickEvent: function (isP) {
      // message='hi'
      console.log(`Successful!${isP}`)
    },
    newEvent: function () {
      this.isPink = true
      this.message('Hi')
    },
    btnNativeEvent: function () {
      console.log('hi3')
      // this.isPink = 'true'
    }
  }
}
</script>
<style scoped>
.pink{
  background-color: #c7a3b5;
}
</style>
