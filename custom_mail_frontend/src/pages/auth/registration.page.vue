<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
  >
    <div class="text-h6">Регистрация</div>
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
    <q-input
      v-model="passwordConfirm"
      label="Confirm password"
      filled
      type="password"
      hint="Confirm your password"
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
        to="/login"
        label="Login"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from 'stores/user.store';

export default defineComponent({
  name: 'RegistrationPage',
  components: {},
  setup() {
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const userStore = useUserStore();

    const onSubmit = () => {
      if (password.value === passwordConfirm.value)
        userStore.register(email.value, password.value);
      else alert('Passwords do not match');
    };

    return { email, password, passwordConfirm, onSubmit };
  },
});
</script>

<style scoped></style>
