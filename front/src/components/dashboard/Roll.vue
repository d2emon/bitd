<template>
  <v-container>
    <v-text-field
      label="d6"
      type="number"
      v-model="rollsCountModel"
    >
      <template v-slot:append-outer>
        <v-btn
          icon
          @click="onRoll"
        >
          <v-icon>mdi-dice-6</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <v-divider />

    <template v-if="rolls">
      <v-text-field
        v-for="rollId in rolls.length"
        :key="rollId"
        label="Бросок"
        type="number"
        min="1"
        max="6"
        v-model="rollsModel[rollId - 1]"
      />
    </template>

    {{ rollResult }}

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
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';

interface RollData {
  id: number;
  value: number | null;
}

type RollResult = 'IMPRESSIVE' | 'FULL' | 'SUCCESS' | 'FAIL' | null;

@Component({
  computed: {
    ...mapGetters('rolls', [
      'rollResult',
    ]),
    ...mapState('rolls', [
      'rolls',
      'rollsCount',
    ]),
  },
  methods: {
    ...mapActions('rolls', [
      'doRoll',
    ]),
    ...mapMutations('rolls', [
      'setRoll',
      'setRollsCount',
    ]),
  },
})
export default class Roll extends Vue {
  rolls!: (number | null)[];

  rollsCount!: number | undefined;

  doRoll!: () => null;

  setRoll!: (value: RollData) => null;

  setRollsCount!: (value: number) => null;

  rollResult: RollResult = null;

  get rollsModel(): (number | null)[] {
    return this.rolls;
  }

  set rollsModel(rolls: (number | null)[]) {
    rolls.forEach((value, id) => this.setRoll({ id, value }));
  }

  get rollsCountModel(): string {
    return (this.rollsCount !== undefined) ? `${this.rollsCount}` : '1';
  }

  set rollsCountModel(value: string) {
    this.setRollsCount(parseInt(value, 0));
  }

  onRoll() {
    this.doRoll();
  }
}
</script>

<style scoped>

</style>
