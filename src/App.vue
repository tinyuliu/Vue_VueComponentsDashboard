<!-- 入口頁App.vue -->
<template>
  <div id="app" class="bg">
    <h1 class="page-title"><a href="#/">Developing Components Asset</a></h1>
    <router-view class="router"/>
    <footer-view />
  </div>
</template>

<script>
import quiFooter from './components/quiFooter.vue'
export default {
  name: 'App',
  components: {
    'footer-view': quiFooter
  }
}
</script>

<style>
  @import './assets/css/App.css';
  .router{
    /* width: 500px;
    position: absolute;
    margin-left: 50%;
    transform: translate(-50%); */
  }
</style>
