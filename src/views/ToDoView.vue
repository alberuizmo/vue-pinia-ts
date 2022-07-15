<template>
  <h1>To Do View</h1>
  <form>
    <input type="text" id="" v-model="titleToDo" />
    <button @click.prevent="addToDo">Add</button>
  </form>
  <div>
    <div>
      <h2>Lista de todos Completados</h2>
      <ul>
        <li v-for="todo in toDoState.completed" :key="todo.id">
          {{ todo.title }}
          <button @click="toDoState.toggleTodo(todo.id)">No Completar</button>
        </li>
      </ul>
    </div>
    <div>
      <h2>Lista de todos NO Completados</h2>
      <ul>
        <li v-for="todo in toDoState.incomplete" :key="todo.id">
          {{ todo.title }}
          <button @click="toDoState.toggleTodo(todo.id)">Completar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useToDoStore } from "@/stores/todo";
import { ref } from "@vue/reactivity";

const titleToDo = ref("");

const toDoState = useToDoStore();

const addToDo = () => {
  toDoState.addTodo(titleToDo.value);
  titleToDo.value = "";
};
</script>
