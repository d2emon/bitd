<template>
  <v-dialog v-model="show">
    <template v-slot:activator="{ on, attrs }">
      <slot
        name="activator"
        v-bind:on="on"
        v-bind:attrs="attrs"
      />
    </template>

    <v-card>
      <v-card-title>Создание банды</v-card-title>

      <v-stepper
        v-model="step"
      >
        <v-stepper-header>
          <v-stepper-step
            :complete="step > 1"
            step="1"
          >
            Архетип
          </v-stepper-step>
          <v-stepper-step
            :complete="step > 2"
            step="2"
          >
            Репутация
          </v-stepper-step>
          <v-stepper-step
            :complete="step > 3"
            step="3"
          >
            Отничьи угодья
          </v-stepper-step>
          <v-stepper-step
            :complete="step > 4"
            step="4"
          >
            Талант
          </v-stepper-step>
          <v-stepper-step
            :complete="step > 5"
            step="5"
          >
            Улучшения
          </v-stepper-step>
          <v-stepper-step
            :complete="step > 6"
            step="6"
          >
            Контакт
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-container>
            <v-text-field
              label="Название"
              v-model="crew.title"
            />
          </v-container>

          <v-stepper-content step="1">
            <v-layout>
              <v-row>
                <v-col
                  md="2"
                  v-for="item in crewTypes"
                  :key="item.id"
                >
                  <v-container>
                    <v-card
                      @click="setCrewType(item)"
                    >
                      <v-card-title>{{ item.title }}</v-card-title>
                      <v-card-text>{{ item.description }}</v-card-text>
                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-layout>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-row>
              <v-col>
                <v-container>
                  <v-card>
                    <v-card-title>Реноме</v-card-title>
                    <v-list>
                      <v-list-item-group v-model="crew.reputationType">
                        <v-list-item
                          v-for="item in reputationTypes"
                          :key="item"
                          :value="item"
                        >
                          <v-list-item-content>
                            <v-list-item-title>{{ item }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-container>
              </v-col>
              <v-col>
                <v-container>
                  <v-card>
                    <v-card-title>Логово</v-card-title>
                    <v-container>
                      <v-text-field
                        label="Логово"
                        v-model="crew.lair"
                      />
                    </v-container>
                  </v-card>
                </v-container>
              </v-col>
            </v-row>
          </v-stepper-content>

          <v-stepper-content step="3">
            3
          </v-stepper-content>

          <v-stepper-content step="4">
            4
          </v-stepper-content>

          <v-stepper-content step="5">
            5
          </v-stepper-content>

          <v-stepper-content step="6">
            6
          </v-stepper-content>
        </v-stepper-items>

        <v-container>
          <crew-form
            readonly
            v-model="crew"
          />
        </v-container>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="step > 1"
            color="primary"
            @click="step -= 1"
          >
            Назад
          </v-btn>
          <v-btn
            v-if="step < 6"
            color="primary"
            @click="step += 1"
          >
            Далее
          </v-btn>
          <v-btn
            v-else
            color="primary"
            @click="show = false"
          >
            Сохранить
          </v-btn>
          <v-btn
            color="error"
            @click="reset"
          >
            Отменить
          </v-btn>
        </v-card-actions>
      </v-stepper>
    </v-card>

  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  Prop,
  Watch,
} from 'vue-property-decorator';
import { mapState } from 'vuex';
import { CrewType } from '@/helpers/crewType';
import { Crew, newCrew } from '@/helpers/crew';

@Component({
  components: {
    CrewForm: () => import('@/components/forms/CrewForm.vue'),
  },
  computed: {
    ...mapState([
      'crewTypes',
      'reputationTypes',
    ]),
  },
})
export default class AddCrewModal extends Vue {
  @Prop()
  value!: boolean;

  crewTypes!: CrewType[];

  reputationTypes!: string[];

  show = false;

  step = 1;

  crew: Crew = {};

  @Watch('show')
  onShow(value: boolean) {
    this.$emit('input', value);
  }

  reset() {
    this.crew = {};
    this.show = false;
  }

  setCrewType(crewType: CrewType) {
    this.crew = newCrew(this.crew.title || '', crewType);
  }
}
</script>

<style scoped>

</style>
