<template>
  <q-layout view="LHh LpR fff">
    <q-header class="" elevated>
        <q-toolbar-title>Custom Mail</q-toolbar-title>
        <div>Custom Mail application version v{{ $q.version }}</div>
    </q-header>

    <q-drawer
      @mouseover="changeCollapseDriverState(true,false)"
      @mouseleave="changeCollapseDriverState(true,true)"
      v-model="showDriver"
      :mini="collapseDriverState"
      :behavior="'desktop'"
      show-if-above
    >
      <q-list>
        <q-btn
          @click="changeCollapseDriverState()"
          class="full-width"
          style="height: 50px"
        >
          {{ collapseDriverState === false ? '<<' : '>>' }}
        </q-btn>

        <EssentialLink
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
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import NavigationPaneData from "src/data/NavigationPaneData";

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data() {
    return {
      showDriver: true,
      driverData: NavigationPaneData,
      collapseDriverState: false,
    }
  },
  methods: {
    changeCollapseDriverState(useCustomState = false, customState = false): void {
      if (!useCustomState)
        this.collapseDriverState = !this.collapseDriverState;
      else
        this.collapseDriverState = customState;
    }
  },
});
</script>
