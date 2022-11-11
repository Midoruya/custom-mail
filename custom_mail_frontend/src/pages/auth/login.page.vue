<template>
  <q-form class="q-gutter-md" @submit="onSubmit">
    <div class="text-h6">Вход</div>
    <q-input
      v-model="email"
      label="Email"
      filled
      type="email"
      hint="Enter your email"
    />
    <q-input
      v-model="password"
      label="Password"
      filled
      type="password"
      hint="Enter your password"
    />
    <div class="full-width fit row justify-between items-center content-center">
      <q-btn
        style="width: 200px"
        type="submit"
        color="primary"
        label="submit"
      />
      <q-btn
        style="width: 200px"
        type="button"
        color="primary"
        to="/registration"
        label="Registration"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from 'stores/user.store';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const userStore = useUserStore();

    const onSubmit = () => {
      userStore.login(email.value, password.value);
    };

    return { email, password, onSubmit };
  },
});
</script>

<style scoped></style>
