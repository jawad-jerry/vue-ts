<script setup lang="ts">
import { ref } from 'vue';
const styleObject = {id: 'teacher', class: 'student'}
const msg = 'Hello Jawad Khan'
let showOrHide = ref(true)
const boldTitle = "<b style='color:red;'>i'm bold</b>"
</script>

<template>
  <div class="greetings">
    <span>{{ boldTitle }}</span>
    <h1 v-show="showOrHide" v-bind="styleObject">{{ msg }}</h1>
    <button @click="showOrHide = !showOrHide"> Tooggle Heading</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: bisque;

}

h3 {
  font-size: 1.2rem;
  color: bisque;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
