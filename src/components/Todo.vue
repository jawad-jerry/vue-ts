<script setup lang="ts">
import { ref } from 'vue';

const todoItem = ref(null)
const todoItems: any = ref([])
const saveTodo = () =>{
    if(!todoItem.value)return
    todoItems.value.push({
        done: false,
        title: todoItem.value
    });
    todoItem.value = null
}

   const toggleAllTodo = () =>{
    todoItems.value.forEach((Element:any, index:any) => {
        todoItems.value[index].done = !todoItems.value[index].done
    });
   }

   const deleteItem = (index:any) =>{
    todoItems.value.splice(index,1)
   }
</script>
<template>
    <div class="container">
        <div>
            <input type="checkbox" name="" id="" @change="toggleAllTodo()">
            <input type="text" name="" id="" class="form-input" v-model="todoItem" @keypress.enter="saveTodo()">
            <button class="form-btn" type="button" @click="saveTodo()">Add</button>
        
        </div>
        <div>
            <table>
        <tr v-for="(todo, index) in todoItems">
           <td><input type="checkbox" name="" id="" v-model="todoItems[index].done"></td>
            <td><span :class="todo.done ? 'done': ''">{{todo.title}}</span></td>
          <td><button type="button" @click="deleteItem(index)">x</button></td>
        </tr>
        
    </table>
        </div>
        
        
    </div>

</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    padding: 50px auto;
    /* height: 100px; */
    width: 100%;
    background-color: azure;
}
.done{
    color:red;
    text-decoration: line-through;
}
.form-input {
    padding: 0 5px;
    margin: 0px 10px;
    height: 30px;
}
</style>