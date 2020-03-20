<template>
  <div id="pageQuiForm">
    <!-- <qui-input id="ip1"inputNme="FirstName" labelText="First Name"  placeholder="First Name"></qui-input>
    <qui-input inputNme="LastName" labelText="Last Name"  placeholder="Last Name"></qui-input>
    <qui-btn msg="Reset" @click.native="btnReset"></qui-btn>
    <qui-btn msg="Submit" @click.native="btnSubmit"></qui-btn> -->
    <quiForm selectedP="Selected a Project" selectedC="Selected a Course"></quiForm>

  </div>
</template>
<script>
// import quiInput from '../components/quiInput.vue'
// import quiBtn from '../components/quiButton.vue'
// export default {
//   name: 'pageQuiForm',
//   components: {
//     'quiInput': quiInput,
//     'quiBtn': quiBtn
//   },
//   methods: {
//     btnClickEvent: function () {
//       alert('你点击了组件的click:btnClickEvent')
//     },
//     btnReset: function (msg) {
//       alert('你点击了组件的btnReset!!!!' + msg)
//     },
//     btnSubmit: function () {
//       alert('btnSubmit')
//     }
//   }
// }
import quiForm from '../components/quiForm.vue'
import CalendarView from './pageCalender.vue'
export default{
  name: 'pageQuiForm',
  components: {
    'quiForm': quiForm,
    'calendar-view': CalendarView
  }
}
</script>
<style scoped>
#single-date-picker {
  margin: auto;
}
h1 {
  color: #c7a3b5;
  background: linear-gradient(to right, #e0caca, #d4b8ca, #c7a3b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-weight: 300;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
