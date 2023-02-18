<script lang="ts" setup>
const props = defineProps(['items'])

</script>


<template>
    <table class="tabItem">
        <tr v-for="(first, index) in props.items">
            <td>
                <input type="checkbox" name="" id="" v-model="firstItems[index].done" />
            </td>
            <td>
                <span :class="first.done ? 'done' : ''">{{ first.title }}</span>
            </td>
            <td><button type="button" @click="deleteItem(index)">x</button></td>
        </tr>
    </table>


</template>
<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    padding: 50px auto;
    /* height: 100px; */
    width: 100%;
    color: rgba(240, 7, 7, 0.863);
    background-color: rgba(193, 206, 18, 0.788);
}

.form-input {
    padding: 0 5px;
    margin: 0px 10px;
    height: 30px;
}
</style>