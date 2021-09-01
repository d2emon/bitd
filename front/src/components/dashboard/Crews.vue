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
    <v-col
      v-else
    >
      <v-card>
        <v-card-title>О банде</v-card-title>
        <v-card-text>
          <p>Вне зависимости от того, как собралась ваша банда, у всех вас есть одна общая задача:
            создать наследие, которое переживет всех вас и останется в истории. Ваша криминальная
            карьера может завершиться, но ваше дело будет жить. Поэтому банда имеет отдельный лист
            источника, где отмечается её прогресс, развитие и растущее влияние.</p>
          <p>В каком-то смысла именно ваша банда является центральной фигурой о которой пойдёт
            повествование в игре. Бандиты будут уходить на покой, погибать, травмироваться,
            бесследно исчезать, но банда останется навсегда и будет принимать новых членов в свои
            ряды, которые продолжат её историю. В этом разделе вы узнаете о различных типах банд и
            создадите свою, положив начало криминальному наследию.</p>
        </v-card-text>
      </v-card>
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
