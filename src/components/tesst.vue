<script setup lang="ts">
import {ref} from 'vue';
const counter   =  ref(0)
const count = () =>{
    if(counter.value <=0){
        return
    }else{
        counter.value --
    }
}
</script>
<template>

    <button @click="count">-</button>
    <span>{{ counter }}</span>
    <button @click="counter++" style="display:inline-block">+</button>
    <button v-if="counter" @click="counter=0">reset</button>
</template>

    


<style scoped>
.cid{
    border: 1px;
    background-color: antiquewhite;
}
button {
border: none;
width: 50px;
padding: 5px;
margin:  5;
background-color: aqua;
}
</style>