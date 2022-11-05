<template>
  <q-layout view="lhh lpr fff">
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

    <q-footer>

    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationPaneData from 'src/data/navigation-panel.data';
import NavigationButton from 'components/NavigationButton.vue';
import {useInboxStore} from 'stores/inbox.store';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const inboxStore = useInboxStore();
    return {inboxStore};
  },
  components: {
    NavigationButton,
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
