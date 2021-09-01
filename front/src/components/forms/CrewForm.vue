<template>
  <v-form>
    <v-container
      fill-height
      container--fluid
      grid-list-xl
    >
      Crew: {{ value }}

      <v-card width="100%">
        <v-card-title>{{ value.crewType ? value.crewType.title : '' }}</v-card-title>
        <v-container>
          <v-row>
            <v-col md="6">
              <v-row>
                <v-col>
                  <v-text-field
                    :readonly="readonly"
                    label="Название"
                    v-model="value.title"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :readonly="readonly"
                    label="Реноме"
                    v-model="value.reputationType"
                  />
                </v-col>
              </v-row>
              <v-row
                v-if="value.lair"
              >
                <v-col>
                  <v-text-field
                    :readonly="readonly"
                    label="Логово"
                    v-model="value.lair.description"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-subheader>Репутация</v-subheader>
                  <v-rating
                    :readonly="readonly"
                    v-model="value.reputation"
                    length="12"
                  />
                </v-col>
                <v-col>
                  <v-subheader>Ранг</v-subheader>
                  <v-rating
                    :readonly="readonly"
                    v-model="value.tier"
                    length="4"
                  />
                  <v-subheader>
                    Контроль: <span>{{ value.hold === 'STRONG' ? 'Сильный' : 'Слабый'}}</span>
                  </v-subheader>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    :readonly="readonly"
                    label="Логово"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-subheader>Монеты</v-subheader>
                  <v-rating
                    :readonly="readonly"
                    v-model="value.coins"
                    length="4"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :readonly="readonly"
                    label="Подозрения"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    :readonly="readonly"
                    label="Заметки"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col md="4">
              <v-row>
                <v-col>
                  <v-text-field
                    label="Таланты"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Опыт команды"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col>
                      <v-text-field
                        label="Знакомые"
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        label="Улучшения команды"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card>
                    <v-card-title>Охотничьи угодья</v-card-title>
                    <v-container
                      v-if="value.huntingGrounds && value.huntingGrounds.length"
                    >
                      <v-card
                        v-for="(ground, id) in value.huntingGrounds"
                        :key="id"
                      >
                        <v-text-field
                          v-if="ground.district"
                          :readonly="readonly"
                          label="Район"
                          v-model="ground.district.description"
                        />
                        <v-text-field
                          :readonly="readonly"
                          label="Угодья"
                          v-model="ground.description"
                        />
                        <v-select
                          :readonly="readonly"
                          label="Специализация"
                          :items="value.crewType ? value.crewType.operations : []"
                          v-model="ground.operations"
                        />
                      </v-card>
                    </v-container>
                  </v-card>
                  <v-text-field
                    label="Охотничьи угодья"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col md="2">
              <v-row>
                <v-col>
                  <v-text-field
                    label="Подручные"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Улучшения"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-text-field
                label="Логово"
              />
            </v-col>
            <v-col md="6">
              <v-textarea
                label="Команда"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Тюрьма"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Crew } from '@/helpers/crew';

@Component
export default class CrewForm extends Vue {
  @Prop({ default: false })
  readonly!: boolean;

  @Prop()
  value!: Crew | null;
}
</script>

<style scoped>

</style>
