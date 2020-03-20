<template>
  <div id="quiInput">
    <label for="inputName">{{labelText}}</label>
    <input name="imputName" v-model="modelInput" placeholder="placeHolder">
    <p>{{modelInput}}</p>
  </div>
</template>
<script>
export default {
  props: {
    imputName: '',
    labelText: '',
    modelInput: '',
    placeHolder: ''
  }
}
</script>
<style scoped>
</style>
