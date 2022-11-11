<template>
  <q-layout view="lhh lpr fff">
    <div
      class="full-width row justify-center items-center content-center"
      style="height: 100vh"
    >
      <div
        class="rounded-borders  col rounded-borders bg-grey-3 q-pa-lg"
        style="max-width: 900px"
      >
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import { useUserStore } from 'stores/user.store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AuthLayout',
  components: {},
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const interval = setInterval(() => {
      console.log(12331321321);
      if (userStore.isAuth) router.push('/');
    }, 1000);

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {};
  },
});
</script>
