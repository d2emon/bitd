<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <crew-form
      v-if="crew"
      :crew="crew"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import { Crew } from '@/helpers/crew';

@Component({
  components: {
    CrewForm: () => import('@/components/forms/CrewForm.vue'),
  },
  computed: {
    ...mapState(['crews']),
  },
})
export default class CrewSheet extends Vue {
  crews!: Crew[];

  headers = [];

  items = [];

  tabs = null;

  list = [
    '1',
    '2',
    '3',
  ];

  get crew(): Crew | null {
    const crewId = this.$route.params.id;
    if (!crewId) { return null; }
    return this.crews.find((c: Crew) => (c.id === crewId)) || null;
  }

  complete(value: number) {
    console.log(this.tabs, value);
  }
}
</script>

<style scoped>

</style>
