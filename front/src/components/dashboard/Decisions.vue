<template>
  <v-container>
    <v-card class="my-2">
      <v-container>
        <div>Какие действия будут логичным решением проблемы?</div>
        <div>Можно ли его уболтать?</div>
        <div>Должны ли мы достать отмычки, чтобы вскрыть этот ржавый замок или мы можем просто
          сбить его ударом?</div>
        <v-divider />
        <div>Решают игроки.</div>
      </v-container>
    </v-card>

    <v-card class="my-2">
      <v-container>
        <div>Насколько опасно или эффективно действия в текущих обстоятельствах?</div>
        <div>Насколько это рискованно?</div>
        <div>Можно ли уговорить его чуть-чуть или он сделает что угодно?</div>
        <v-divider />
        <div>Решает Мастер.</div>
      </v-container>
    </v-card>

    <v-card class="my-2">
      <v-container>
        <div>Какие последствия несёт угроза в текущих условиях?</div>
        <div>Падение с этой крыши сломает ногу?</div>
        <div>Это вызовет подозрение констеблей или они сразу начнут задержание?</div>
        <v-divider />
        <div>Решает Мастер.</div>
      </v-container>
    </v-card>

    <v-card class="my-2">
      <v-container>
        <div>Требует ли эта ситуация броска кубиков и каких?</div>
        <div>Может ли персонаж повлиять на ситуацию броском кубика действия?</div>
        <div>Может ли он защититься от последствий броском сопротивления?</div>
        <div>Какую черту использовать для броска фортуны?</div>
        <v-divider />
        <div>Решает Мастер.</div>
      </v-container>
    </v-card>

    <v-card class="my-2">
      <v-container>
        <div>Какие события в истории совпадают с условиями получения опыта персонажа и
          банды?</div>
        <div>Как вы выразили порывы, убеждения, наследие или предысторию своего персонажа во время
          сессии?</div>
        <v-divider />
        <div>Решают игроки.</div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Decisions extends Vue {
}
</script>

<style scoped>

</style>
