<script setup lang="ts">
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from "vue";

onMounted(() => {
  console.log("vue is mounting component...");
});
onBeforeMount(() => {
  console.log("vue is mounted component...");
});

onBeforeUnmount(() => {
  console.log("vue is unmounted component...");
});

let todos = ref([]);
let loading = ref(false);
function fetchTodos() {
  //make request
  loading.value = true;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => {
      todos.value = data;
      loading.value = false;
    });

  //
}
</script>
<template>
  <v-btn class="ma-10" color="success" @click="fetchTodos" :loading="loading"
    >Fetch Todos</v-btn
  >
  <v-table>
    <thead>
      <tr>
        <th class="text-left">S#</th>
        <th class="text-left">Description</th>
        <th class="text-left">Create At</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in todos" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.userId }}</td>
        <td>
          <router-link :to="{ name: 'todos.detail', params: { id: item.id } }">
            <v-btn icon="mdi-eye-circle-outline"> </v-btn>
          </router-link>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
