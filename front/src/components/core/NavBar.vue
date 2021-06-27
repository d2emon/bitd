<template>
  <v-app-bar
    id="core-toolbar"
    app
    absolute
    dense
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      @click="drawerButton"
    />

    <v-app-bar-title
      shrink-on-scroll
    >
      {{ title }}
    </v-app-bar-title>

    <v-spacer />

    <v-btn
      elevation="2"
      icon
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <side-drawer
      :drawer="showDrawer"
      @change="onDrawerChange"
    />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  components: {
    SideDrawer: () => import('./SideDrawer.vue'),
  },
})
export default class NavBar extends Vue {
  @Prop()
  showDrawer!: boolean | null;

  @Prop()
  title!: string;

  drawerButton() {
    this.$emit('drawerButton');
  }

  onDrawerChange(value: boolean) {
    this.$emit('drawerChange', value);
  }
}
</script>

<style scoped>
#core-toolbar a {
  text-decoration: none;
}
</style>
