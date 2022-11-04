<template>
  <q-page>
    <q-list>
      <q-item v-for="(element,index) in testData" :key="element.title" clickable class="q-my-xs q-mx-md rounded-borders bg-grey-3" v-ripple>
        <q-item-section>
          <q-item-label>{{ element.title }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ element.message }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-icon @click="removeMessage(index)" name="delete" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default  defineComponent({
  name: "AllMessagePage",
  data() {
    return {
      testData: [
        // generate test dataset use interface { title: string, message: string }
        {
          title: "Title 1",
          message: "Message 1",
        },
        {
          title: "Title 2",
          message: "Message 2",
        },
        {
          title: "Title 3",
          message: "Message 3",
        },
        {
          title: "Title 4",
          message: "Message 4",
        }
      ] as { title: string; message: string }[],
    };
  },
  methods: {
    removeMessage(index: number): void {
      this.testData.splice(index, 1);
    },
  },
});
</script>

<style scoped>

</style>
