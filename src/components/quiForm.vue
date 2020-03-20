<template>
  <div id="quiForm">
    <div class="container">

      <div class="row padding-top">
        <div class="col-6" >
          <div class="row selectQui">
            <div>
              <div id="selectProject">
                <label for="projectName">Project:</label>
                <select class="" name="projectName" v-model="selectedP">
                  <option>Selected a Project</option>
                  <option value="P1">Project1</option>
                  <option value="P2">Project2</option>
                  <option value="P3">Project3</option>
                </select>
              </div>

              <div id="selectCourse">
                <label for="CourseName">Course</label>
                <select class="" name="CourseName" v-model="selectedC">
                  <option>Selected a Course</option>
                  <option value="C1">Course1</option>
                  <option value="C2">Course2</option>
                  <option value="C3">Course3</option>
                </select>
              </div>
              <p>Duration:2020/Mar/3~2020/Mar/9</p>
            </div>
          </div>
          </div>
          <div class="col-6">
              <calendar-view/>
          </div>
        </div>

        <div class="row padding-top">
          <table class="table table-bordered">
            <thead class="c-pink">
              <tr>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coutse Content</td>
                <td>Coutse Content</td>
                <td>Coutse Content</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Coutse Content</td>
                <td>Coutse Content</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
      </div>

      <div class="row padding-top">
        <div class="col-5">
          <h4>Name List:</h4>
          <div class="listBorder">
            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action c-pink">
                Cras justo odio
              </button>
              <button type="button" class="list-group-item list-group-item-action" >Dapibus ac facilisis in</button>
              <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
              <button type="button" class="list-group-item list-group-item-action c-pink">Porta ac consectetur ac</button>
              <button type="button" class="list-group-item list-group-item-action c-pink" disabled>Vestibulum at eros</button>
            </div>
          </div>
        </div>
        <div class="col-2">

        </div>
        <div class="col-5">
          <h4>Selected List:</h4>
          <div class="listBorder">
            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action ">
                Cras justo odio
              </button>
              <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
              <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row padding-top">
        <div class="col-3 offset-3">
          <button class="qui-btn">
            <slot name="icon"></slot>
            Reset
          </button>
        </div>
        <div class="col-3">
          <button class="qui-btn">
            <slot name="icon"></slot>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CalendarView from './quiCalendar.vue'
export default {
  // data: {
  //   // isSelected: false
  //   // isActive: pink
  //   listItem: {
  //     // listGroupItem: list - group - item,
  //     // listGroupItemAction: list - group - item - action,
  //     // cPink: c - pink
  //   }
  // },
  props: {
    selectedP: '',
    selectedC: ''
  },
  components: {
    'calendar-view': CalendarView
  },
  methods: {
    // selectItem: function () {
    //   // this.isSelected = true
    // }
  }
}

</script>
<style scoped>
#quiForm{
  margin: 0px;
  padding: 0px;
}
.selectQui{
  margin-top: 30px;
  margin-left:150px;
}
.padding-top{
  padding-top: 30px;
}
.listBorder{
  border-style: inset;
  /* border-color:#c7a3b5; */
  border-width: 7px;
  width: 100%;
  overflow-y: scroll;
}
.c-pink{
  background-color: #c7a3b5;
  color: #fff;
}
</style>
