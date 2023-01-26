<script setup lang="ts">
import { ref } from 'vue';
const counter = ref(0)
const count = () =>{
    if(counter.value <0){
        return
    }else{
        counter.value --
    }
}

</script>

<template>
    <button @click="count">-</button>
    <span>{{ counter }}</span>
    <button @click="counter++" style="display: inline-block">+</button>
</template>