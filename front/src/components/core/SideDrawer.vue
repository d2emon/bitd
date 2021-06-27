<template>
  <v-navigation-drawer
    v-model="show"
    absolute
    temporary
    app
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

@Component
export default class SideDrawer extends Vue {
  @Prop()
  drawer!: boolean | null;

  group = false;

  show: boolean | null = null;

  sShow: boolean | null = null;

  @Watch('drawer')
  onDrawerChange(value: boolean) {
    console.log(`Watcher for data.drawer: ${value}`);
    this.sShow = value;
    console.log(`Watcher for drawerShown: ${this.show}`);
  }

  @Watch('show')
  onShowChange(value: boolean) {
    console.log(`this is DrawerShown Watcher: ${value} ${this.drawer}`);
    this.$emit('change', value);
  }

  mounted() {
    this.sShow = this.drawer;
  }
}
</script>

<style scoped>

</style>
