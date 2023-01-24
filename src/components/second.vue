<script setup lang="ts">
import { checkCompatEnabled } from '@vue/compiler-core';
import {ref, vModelCheckbox, watch} from 'vue';
const secondItem = ref('')
const selectAll = ref(false)
const secondItems: any = ref([])
const saveSecond = () =>{
  if(!secondItem.value)return
  const duplicate = secondItems.value.some((el:any) => el.title == secondItem.value)
  if(duplicate){
    return alert (` ${secondItem.value} already exits`)
  }
  if(secondItem.value?.toLocaleLowerCase().includes('react')){
    alert('react is very bad')
    return
  }
  secondItems.value.push({
    done: false,
    title: secondItem.value
  });
  secondItem.value = ''
}
</script>

<template>

</template>

<style>
</style>