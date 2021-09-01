<template>
  <v-card>
    <v-toolbar dark>
      <v-toolbar-title>Организации</v-toolbar-title>
      <v-spacer />
      <add-crew-modal>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind:attrs="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-btn>
        </template>
      </add-crew-modal>
    </v-toolbar>
    <v-list>
      <v-subheader>Банды</v-subheader>
      <v-list-item
        v-for="crew in crews"
        :key="crew.id"
        :to="`/crew/${crew.id}`"
      >
        <v-list-item-content>
          <v-list-item-title>{{ crew.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ crew.crewType.title }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import { Crew } from '@/helpers/crew';

@Component({
  components: {
    AddCrewModal: () => import('@/components/modals/AddCrewModal.vue'),
  },
  computed: {
    ...mapState([
      'crews',
    ]),
  },
})
export default class CrewsList extends Vue {
  crews!: Crew[];
}
</script>

<style scoped>

</style>
