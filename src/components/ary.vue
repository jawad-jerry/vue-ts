<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["name", "age", "city"]);
let a = ref([1, 2, 3, 4, 5]);
let modifiedArray = a.value.map(function (item) {
  return item + 2;
});

const btn = ref(3);
</script>

<template>
  <v-alert text="aha this is vetify"></v-alert>
  <h2>{{ props.name.toLowerCase() }}</h2>
  <h2>{{ props.age }}</h2>
  <h2>{{ props.city.toLowerCase() }}</h2>

  <ul>
    <li v-for="item in a">{{ item }}</li>
  </ul>
  <h2>after mapping</h2>
  <ul>
    <li v-for="el in modifiedArray">{{ el }}</li>
  </ul>
  <button @click="a.pop()">Array Pop</button>
  <button @click="a.shift()">Array shift</button>
  <button @click="a.unshift(10)">Array Unshift</button>
  <button @click="a.push(10)">Array push</button>
</template>

<style></style>
