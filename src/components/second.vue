<script setup lang="ts">
import { checkCompatEnabled } from '@vue/compiler-core';
import {ref, vModelCheckbox, watch} from 'vue';
const secondItem = ref('')
const selectAll = ref(false)
const secondItems:any = ref([])
const saveSecond = () =>{
  if(!secondItem.value)return
  const duplicate = secondItems.value.some((el:any) => el.title == secondItem.value)
  if(duplicate){
    return alert(`${secondItem.value} already exits`)
  }
  if(secondItem.value ?.toLocaleLowerCase().includes('vue')){
    alert('vue is a very good frame work')
    return
  }
  secondItems.value.push({
    done: false,
    title:  secondItem.value
  });
  secondItem.value = ''
} 

 const del = () => {
  selectAll.value = false
  for(let index = secondItems.value.length -1;; index--){
    if(secondItems.value[index].done){
      secondItems.value.splice(index, 1)
    }
  }
 }
 watch(selectAll , (newValue) => {
  secondItems.value.foreach((Element:any, index:any) => {
    secondItems.value[index].done = !secondItems.value[index].done
  })
 })

   const deleteItem = (index:any) => {
    secondItems.value.splice(index,1)
   }
</script>

<template>
 <div>
  <div>
    <input type="checkbox" v-model="selectAll" :disabled="!secondItems.length">
    <input type="text" v-model="secondItem" @keypress.enter="saveSecond()">
    <button type="button" @click="saveSecond">add</button>
    <button type="button" @click="del">delete</button>
  </div>

  <div>
    <table>
      <tr v-for="(second , index) in secondItems">
        <td><input type="checkbox" v-model="secondItems[index].done"></td>
        <td><span :class="second.done ? 'done' : ''">{{ second.title }}</span></td>
        <td><button type="button" @click="deleteItem(index)">x</button></td>


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
color: blueviolet;
background-color: aquamarine;

}
</style>