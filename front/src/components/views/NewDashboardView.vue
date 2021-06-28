<template>
  <v-app id="dashboard-view">
    <main-bar
      title="Клинки во Тьме"
      img="/bitd.jpg"
      background-img="/bitd-city.jpg"
      :user="gameMaster"
      @toggleSideBar="toggleSideBar"
    />

    <nav-side-bar
      v-model="showSideBar"
      background-img="/bitd-city.jpg"
      :game-master="gameMaster"
      :navigation="navMenu"
    />

    <v-main id="dashboard-main">
      <v-container container--fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>

      <!-- turns off footer in the maps component -->
      <!-- core-footer v-if="$route.meta.name !== 'Maps'" / -->
    </v-main>
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
    NavSideBar: () => import('@/components/core/NavSideBar.vue'),
    MainBar: () => import('@/components/core/MainBar.vue'),
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

  gameMaster = {
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    name: 'Дмитрий Куценко',
  };

  navMenu = [
    {
      id: 1,
      icon: 'mdi-view-dashboard',
      title: 'Панель управления',
      link: '/',
    },
    {
      id: 2,
      icon: 'mdi-image',
      title: 'Фотография',
      link: '/2',
    },
    {
      id: 3,
      icon: 'mdi-help-box',
      title: 'Об игре',
      link: '/3',
    },
  ]

  showSideBar: boolean | null = true; // null;

  drawerButton() {
    this.switchDrawer();
  }

  drawerChange(value: boolean) {
    this.setShowDrawer(value);
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
</script>

<style scoped>

</style>
