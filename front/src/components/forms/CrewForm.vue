<template>
  <v-form>
    <v-container
      fill-height
      container--fluid
      grid-list-xl
    >
      Crew: {{ crew }}

      <v-card width="100%">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-row>
                <v-col>
                  <v-text-field
                    label="Название"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Реноме"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Логово"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Репутация"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Ранг"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Логово"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Монеты"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Подозрения"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
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
  @Prop()
  crew!: Crew | null;
}
</script>

<style scoped>

</style>
