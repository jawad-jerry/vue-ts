<script setup lang="ts">
<<<<<<< HEAD
import {ref} from 'vue';
const counter = ref(0)
const count = () =>{
    if(counter.value <=0){
        return
    }else{
        counter.value--
    }
}
</script>
<template>
<main>
    <div>
        <h3>the current count is </h3>
        <h1>{{ counter }}</h1>
        <button @click="count">-</button>
        <button @click="counter++">+</button>
        <br>
        <br>
        <button class="btn" v-if="counter" @click="counter = 0">reset</button>
    </div>
</main>

=======
import { ref } from "vue";
const counter = ref(0);
const count = () => {
  if (counter.value <= 0) {
    return;
  } else {
    counter.value--;
  }
};
</script>
<template>
  <main>
    <div>
      <h3>the current count is --</h3>
      <h1>{{ counter }}</h1>
      <button @click="count">-</button>
      <button @click="counter++" style="display: inline-block">+</button>
      <br />
      <br />
      <button class="btn" v-if="counter" @click="counter = 0">reset</button>
    </div>
  </main>
>>>>>>> origin/main
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}
div {
  text-align: center;
}
.btn {
  background-color: brown;
  color: aliceblue;
}
</style>
