<script setup lang="ts">
import { ref } from 'vue'
//import First from './components/first.vue'
import second from './components/second.vue'
//import Todo from './components/Todo.vue'



const userName = ref('')

const education = ref()
const handleUserNameInput = (event:any)=>{
  userName.value = event.target.value
}
const handleEducation = (event:any)=>{
  education.value = event.target.value
}


const handleChange = (event:any)=>{
  numbers.value = event.target.value
}
const numbers = ref(0)

const radio = ref()
const handleRadio = (event:any)=>{
  radio.value = event.target.value
}

</script>

<template>
<second></second>


  
  
<!--<form action="">
    <input type="text" v-model="userName">
    <input type="checkbox" name="" id=""  v-model="education">
    <select name="" id="" @change="handleChange($event)">
      <option value="1">one</option>
      <option value="2">two</option>
    </select>
    <input type="radio" id="" name="gender" value="male" @change="handleRadio($event)">
    <input type="radio" id="" name="gender" value="female" @change="handleRadio($event)">
  </form>
UserName: {{ userName }}
education: {{ education }}
numbers: {{ numbers }}
gender: {{ radio }}-->
  
 
</template>

<style scoped>

.counter{
  font-size: 18px;
}

</style>
