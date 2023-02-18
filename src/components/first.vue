<script setup lang="ts">
import { checkCompatEnabled } from "@vue/compiler-core";
import { ref, vModelCheckbox, watch } from "vue";
import ToDoItemsList from "./ToDoItemsList.vue";
const firstItem = ref("");
const selectAll = ref(false);
const firstItems: any = ref([]);
const saveFirst = () => {
    if (!firstItem.value) return;
    const duplicate = firstItems.value.some(
        (el: any) => el.title == firstItem.value
    );
    if (duplicate) {
        return alert(` ${firstItem.value} already exists`);
    }
    if (firstItem.value?.toLowerCase().includes("react")) {
        alert(
            "😖 😫 😩 React is very bad dont learn it, come to vue js you will be happy"
        );
        return;
    }

    firstItems.value.push({
        done: false,
        title: firstItem.value,
    });
    firstItem.value = "";
};

const del = () => {
    selectAll.value = false;
    for (let index = firstItems.value.length - 1; ; index--) {
        if (firstItems.value[index].done) {
            firstItems.value.splice(index, 1);
        }
    }
};

watch(selectAll, (newValue) => {
    firstItems.value.forEach((Element: any, index: any) => {
        firstItems.value[index].done = !firstItems.value[index].done;
    });
});

const deleteItem = (index: any) => {
    firstItems.value.splice(index, 1);
};
</script>

<template>
    <div class="d-flex flex-row justify-center">

        <v-checkbox label="Checkbox" v-model="selectAll" :disabled="!firstItems.length"></v-checkbox>
        <v-text-field label="Main input" hide-details="auto" v-model="firstItem"
            @keypress.enter="saveFirst()"></v-text-field>
        <v-btn @click="saveFirst"> Add </v-btn>
        <v-btn @click="del"> Delete </v-btn>

        <to-do-items-list :items="firstItems"></to-do-items-list>

    </div>


</template>
<style>

</style>
