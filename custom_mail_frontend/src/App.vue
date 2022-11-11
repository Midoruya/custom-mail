<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/user.store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    if (!userStore.isAuth) router.push('/auth');

    return {};
  },
});
</script>
