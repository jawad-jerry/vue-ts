<script setup lang="ts">
import { checkCompatEnabled } from '@vue/compiler-core';
import {ref, watch} from 'vue';
const secondItem = ref('')
const selectAll = ref(false)
const secondItems: any = ref([])
const saveSecond = () =>{
  if(!secondItem.value)return
  const duplicate = secondItems.value.some((el:any) => el.title == secondItem.value)
  if(duplicate){
    return alert('already exits')
  }
  if(secondItem.value?.toLocaleLowerCase().includes('vue')){
    alert('vue is good frame work')
    return
  }
  secondItems.value.push({
    done: false,
    title: secondItem.value
  })
  secondItem.value = ''
}
const del = () =>{
  selectAll.value =false
  for(let index = secondItems.value.length-1;; index--){
    if(secondItems.value[index].done){
      secondItems.value.splice(index,1)
    }
  }
}
watch(selectAll,(newValue) =>{
  secondItems.value.forEach((Element:any, index:any) =>{
    secondItems.value[index].done = !secondItems.value[index].done
  })
})
const deleteItem = (index: any) =>{
  secondItems.value.splice(index,1)
}
</script>
<template>
  
 <div class="container">
  <div>
    <v-checkbox type="checkbox" v-model="selectAll" ></v-checkbox>
    <input   type="text" v-model="secondItem" @keypress.enter="saveSecond()">
    <v-btn type="button"   variant="flat" color="success" @click="saveSecond">add</v-btn>
    <v-btn type="button" variant="flat"  color="error" @click="del">delete</v-btn>
  </div>
  <div>
    <table>
      <tr v-for="(second, index) in secondItems">
        <td><input type="checkbox" v-model="secondItems[index].done"></td>
        <td><span :class="second.done? 'done' : ''">{{ second.title }}</span></td>
        <td><v-btn type="button" @click="deleteItem(index)">x</v-btn></td>
      </tr>
    </table>
  </div>
 </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: black;
  background-color: aquamarine;
  
}

</style>