<template>
  <v-app id="dashboard-view">
    <nav-bar
      title="Vuetify Admin Dash by ClintOxx"
      :show-drawer="show"
      @drawerButton="drawerButton"
      @drawerChange="drawerChange"
    />

    <!-- core-sidedrawer / -->
    <!-- core-filter / -->

    <v-main>
      <v-container container--fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>

    <!-- turns off footer in the maps component -->
    <!-- core-footer v-if="$route.meta.name !== 'Maps'" / -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mapActions, mapMutations,
  mapState,
} from 'vuex';

@Component({
  components: {
    NavBar: () => import('@/components/core/NavBar.vue'),
  },
  computed: {
    ...mapState(['title']),
    ...mapState('navigation', ['show']),
  },
  methods: {
    ...mapActions('navigation', ['switchDrawer']),
    ...mapMutations('navigation', ['setShowDrawer']),
  },
})
export default class DashboardView extends Vue {
  title!: string;

  show!: boolean | null;

  switchDrawer!: () => null;

  setShowDrawer!: (value: boolean) => null;

  drawerButton() {
    this.switchDrawer();
  }

  drawerChange(value: boolean) {
    this.setShowDrawer(value);
  }
}
</script>

<style scoped>

</style>
