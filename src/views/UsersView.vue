<template>
  <Toast />
  <ConfirmDialog></ConfirmDialog>
  <div class="grid">
    <div class="col-12">
      <h1>Users List From Backend</h1>
    </div>
    <div class="col-12">
      <ul>
        <li v-for="user in usersList" :key="user.id">
          {{ user.first_name }}
        </li>
        <li v-for="user in usersList" :key="user.id">
          {{ user.first_name }}
        </li>
      </ul>
    </div>
    <div class="col-12" style="margin-top: 10px">
      <label style="margin-right: 10px">Search</label>
      <InputText type="text" v-model="valueText" />
      {{ valueText }}
    </div>
    <div class="col-12" style="flex-direction: column; display: flex">
      <h1>Components test</h1>
      <Button
        label="Mostrar Dialogo"
        @click="toggleDialog"
        style="margin-top: 10px"
      />
      <Button
        label="Modal and toast"
        @click="showConfirm"
        style="margin-top: 10px"
      />
    </div>
  </div>

  <Dialog
    v-model:visible="showMessage"
    :breakpoints="{ '960px': '80vw' }"
    :style="{ width: '30vw' }"
    position="top"
  >
    <div class="flex align-items-center flex-column pt-6 px-3">
      <i
        class="pi pi-check-circle"
        :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
      ></i>
      <h5>Registration Successful!</h5>
      <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
        Your account is registered under name it'll be valid next 30 days
        without activation. Please check for activation instructions.
      </p>
    </div>
    <template #footer>
      <div class="flex justify-content-center">
        <Button label="OK" @click="toggleDialog" class="p-button-text" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UsersService from "@/services/UsersService";
import type { UserList } from "@/types/Users";
//componentes prime
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";

const confirm = useConfirm();
const toast = useToast();
const usersService = new UsersService();

const usersList = ref<UserList[]>([]);
const valueText = ref("");
const showMessage = ref(false);

onMounted(async () => {
  try {
    const { data } = await usersService.getUsers();
    usersList.value = [...data.data];
  } catch (error) {
    console.log(error);
  }
});

const toggleDialog = () => {
  showMessage.value = !showMessage.value;
};

const showConfirm = () => {
  confirm.require({
    message: "Are you sure you want to proceed?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};
</script>
