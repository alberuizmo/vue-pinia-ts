<template>
  <h1>Users</h1>
  <q-btn color="white" text-color="black" label="Standard" />
  <ul>
    <li v-for="user in usersList" :key="user.id">
      {{ user.first_name }}
    </li>
    <li v-for="user in usersList" :key="user.id">
      {{ user.first_name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UsersService from "@/services/UsersService";
import type { UserList } from "@/types/Users";

const usersService = new UsersService();

const usersList = ref<UserList[]>([]);

onMounted(async () => {
  try {
    const { data } = await usersService.getUsers();
    usersList.value = [...data.data];
  } catch (error) {
    console.log(error);
  }
});
</script>
