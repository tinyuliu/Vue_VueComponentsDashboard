<template>
  <div id="pageQuiNav">
    <qui-nav @navClickEvent="dosth"></qui-nav>
  </div>
</template>

<script>
import quiNav from '../components/quiNav.vue'
export default {
  name: 'pageQuiNav',
  components: {
    'qui-nav': quiNav
  },
  methods: {
    dosth: function (item, index) {
      console.log(item[index].text + index)
    }
  }
}
</script>
<style scoped>

</style>
