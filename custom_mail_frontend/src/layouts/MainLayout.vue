<template>
  <q-layout view="LHh LpR fff">
    <q-header style="height: 75px" class="bg-transparent fa-border-none">
      <q-input class="q-pa-sm" style="height: 30px;" outlined rounded type="text" clear-icon="reload" v-model="inputData">
        <template v-slot:append>
          <q-icon
            v-if="inputData.length > 0"
            name="close"
            @click="inputData = ''"
            class="cursor-pointer"
          />
        </template>
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>
    </q-header>

    <q-drawer
      @mouseover="changeCollapseDriverState(true,false)"
      @mouseleave="changeCollapseDriverState(true,true)"
      v-model="showDriver"
      :mini="collapseDriverState"
      :behavior="'desktop'"
      show-if-above
      elevated
    >
      <q-list class="column flex justify-center full-height">
        <q-btn
          @click="changeCollapseDriverState()"
          class="full-width"
          style="height: 50px"
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
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationPaneData from 'src/data/NavigationPaneData';
import NavigationButton from "components/NavigationButton.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavigationButton,
  },
  data() {
    return {
      inputData: "",
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
