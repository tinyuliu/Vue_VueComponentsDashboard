<template>
  <ul>
<!--    <li v-for="(item,index) in items" :class="{pink:item.isPink}" @click="colorChange(index)">{{item.message}}</li>-->
    <li v-for="(item,index) in items" :key='item.id' :class="{pink:i ===index}" @click="i=index">{{item.message}}</li>
  </ul>
</template>

<script>
export default{
  data: function () {
    return {
      items: [
        {message: 'First Item', isPink: true},
        {message: 'Second Item', isPink: false},
        {message: 'Third Item', inPink: false}
      ],
      i: 0
    }
  },
  methods: {
    colorChange: function (index) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].isPink = false
      }
      this.items[index].isPink = true
    }
  }
}
</script>

<style>
  .pink{
    background-color: #c7a3b5;
  }
</style>
