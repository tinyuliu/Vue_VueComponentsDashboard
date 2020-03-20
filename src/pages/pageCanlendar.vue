<template>
  <div id="pageCalendar">
    <SingleDatePicker @selectDate{year:2020,month:1,date:1} />
  </div>
</template>
<script>
export default {
  name: 'pageCalendar',
  components: {
    SingleDatePicker
  }
}
</script>
<style scoped>
@import '~@jiayingy/vue-single-date-picker/dist/vue-single-date-picker.css';
</style>
