<template>
  <v-layout>
    <v-col md="2">
      <crews-list />
    </v-col>
    <v-col
      v-if="$route.params.id"
    >
      <router-view />
    </v-col>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    CrewsList: () => import('@/components/dashboard/CrewsList.vue'),
  },
})
export default class Crews extends Vue {
}
</script>

<style scoped>

</style>
