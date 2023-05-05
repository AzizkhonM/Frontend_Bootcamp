<script setup>
import { ref } from "vue"
import { useTodoStore } from "../stores/todo"
const store = useTodoStore()
const newTask = ref("")

const add = () => {
  store.setTodo(newTask.value)
  newTask.value = ""
}

const cut = (el) => {
  store.deleteElement(el)
}
</script>

<template>
  <main>
    <h1>{{ store.state.string }}</h1>

    <input type="text" v-model="newTask">
    <button @click="add">add</button>

    <h2 v-if="!store.state.todo.length">No Data</h2>
    <ul>
      <li v-for="el in store.state.todo">{{ el }} <button @click="cut(el)">X</button> <button >+</button></li>
    </ul>

    <h2>Done: {{  }}</h2>
  </main>
</template>
