<template>
  <h1>Home View</h1>
  Cantidad de tareas: {{ toDoState.todos.length }}
</template>

<script setup lang="ts">
import { useToDoStore } from "@/stores/todo";

const toDoState = useToDoStore();
</script>
