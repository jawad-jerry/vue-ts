<script setup lang="ts">
import {ref} from 'vue'
const secondItem = ref(null)
const secondItems: any = ref([])
const savesecond = () => {
    if(secondItem.value) return
    secondItems.value.push({
        done: false,
        title: secondItem.value
    });
    secondItem.value = null
}

  const toggleAllSec = () =>{
    secondItems.value.forEach((Element:any, index:any) => {
        secondItems.value[index].done = !secondItems.value[index].done
    });
  }

  const deleteItem = (index:any) => {
    secondItems.value.splice(index,1)
  }


</script>

<template>
    <div class="container">

    <div>
    <input type="checkbox" name="" id="" @change="toggleAllSec()">
    <input type="text" id="" class="form-input" v-model="secondItem" @keypress.enter="savesecond()">
    <button type="button" class="form-input" @click="savesecond">add</button>
</div>
</div>
</template>

<style>
.container {
    display: flex;
align-items: center;
justify-content: center;
background-color: bisque;
width: 100%;
padding: 50px auto;
flex-direction: column;
}


</style>