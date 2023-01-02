<script setup lang="ts">
import {ref} from 'vue'
const secItem = ref(null)
const secItems: any = ref([])
const savesec = () => {
    if(!secItem.value) return
    secItems.value.push({
        done: false,
        title: secItem.value
    });
    secItem.value = null
}

  const toggleAllSec = () =>{
    secItems.value.forEach((Element:any, index:any) => {
        secItems.value[index].done = !secItems.value[index].done
    });
  }

  const deleteItem = (index:any) => {
    secItems.value.splice(index,1)
  }


</script>

<template>
    <div class="container">

    <div>
    <input type="checkbox" name="" id="" @change="toggleAllSec()">
    <input type="text" id="" class="form-input" v-model="secItem" @keypress.enter="savesec()">
    <button type="button" class="form-input" @click="savesec">add</button>
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