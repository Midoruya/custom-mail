<template>
  <q-layout view="lhh lpr fff">
    <q-drawer
      v-model="showDriver"
      :mini="collapseDriverState"
      :behavior="'desktop'"
      show-if-above
      elevated
      @mouseover="changeCollapseDriverState(true, false)"
      @mouseleave="changeCollapseDriverState(true, true)"
    >
      <q-list class="column flex justify-center full-height">
        <q-btn
          class="full-width"
          style="height: 50px"
          @click="changeCollapseDriverState()"
        >
          {{ collapseDriverState === false ? '<<' : '>>' }}
        </q-btn>

        <NavigationButton
          v-for="link in driverData"
          :key="link.title"
          :caption="link.description"
          :icon="link.icon"
          :title="link.title"
          :link="link.moveTo"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer> </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavigationPaneData from 'src/data/navigation-panel.data';
import NavigationButton from 'components/navigation-button.componens.vue';
import { useInboxStore } from 'stores/inbox.store';

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavigationButton,
  },
  setup() {
    const inboxStore = useInboxStore();

    const showDriver = ref(true);
    const collapseDriverState = ref(false);
    const driverData = NavigationPaneData;

    const changeCollapseDriverState = (
      useCustomState = false,
      customState = false
    ): void => {
      if (!useCustomState)
        collapseDriverState.value = !collapseDriverState.value;
      else collapseDriverState.value = customState;
    };

    return {
      inboxStore,
      showDriver,
      collapseDriverState,
      driverData,
      changeCollapseDriverState,
    };
  },
});
</script>
