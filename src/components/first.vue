<script setup lang="ts">
import { ref } from 'vue';
   const firstItem = ref(null)
   const firstItems : any = ref([])
   const saveFirst = (event:any) => {
    console.log(event)
    if(!firstItem.value) return
    firstItems.value.push({
        done: false,
        title: firstItem.value
    })
    firstItem.value = null
   }

  const del = () => {
   

   for(let index = firstItems.value.length-1;; index--)
 {
    if(firstItems.value[index].done){
        firstItems.value.splice(index,1)
        }
    }
  }
  

const toggleAllFirst = () => {
    firstItems.value.forEach((Element:any,index:any) => {
       
           firstItems.value[index].done = !firstItems.value[index].done
    });
}


const deleteItem = (index:any)=>{
    firstItems.value.splice(index,1)
}


</script>


<template>
    <div class="container">
    <div>
        <input type="checkbox" name="" id="" @change="toggleAllFirst()">
        <input type="text" name="" id="" class="form-input" v-model="firstItem" @keypress.enter= "saveFirst($event)">
        <button type="button" @click="saveFirst">add</button>
        <button type="button" @click="del">delete</button>
    </div>
    <div>
            <table class="tabItem">
        <tr v-for="(first, index) in firstItems">
            <td><input type="checkbox" name="" id="" v-model="firstItems[index].done"></td>
            <td><span :class="first.done ? 'done': ''">{{first.title}}</span>
                </td>
            <td><button type="button" @click="deleteItem(index)">x</button></td>
        </tr>
        
    </table>
</div>
</div>

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
