<script lang="ts" setup>
import { useRoute, type RouteParamValueRaw } from "vue-router";
import type { Ref } from "vue";
import { ref, nextTick } from "vue";
interface Todo {
  id?: Number;
  title?: String;
  body?: String;
  userId?: Number;
}
const route = useRoute();
let todoDetail: Ref<Todo> = ref({});
const url = `https://jsonplaceholder.typicode.com/posts/${route.params.id}`;

fetch(url)
  .then((data) => data.json())
  .then(async (data) => {
    // await nextTick();
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
