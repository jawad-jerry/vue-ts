<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
let todoDetail = ref({});
const url = `https://jsonplaceholder.typicode.com/posts/${route.params.id}`;

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    todoDetail.value = data;
  });
</script>
<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>{{ todoDetail.title }}</div>
      <p class="text-h4 text--primary">be•nev•o•lent</p>
      <p>adjective</p>
      <div class="text--primary">
        {{ todoDetail.body }}
      </div>
    </v-card-text>
  </v-card>
</template>
