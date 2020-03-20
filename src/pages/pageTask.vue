<template>
  <div id="pageTask">
    <task-view></task-view>
  </div>
</template>

<script>
import quiTask from '../components/taskComponent.vue'
export default{
  name: 'pageTask',
  components: {
    'task-view': quiTask
  }
}
</script>

<style>

</style>
