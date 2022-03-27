<template>
  <div>
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" class="ma-2 white--text" @click="resetSittings">
          Reset
          <v-icon right dark> mdi-lock-reset </v-icon>
        </v-btn>
      </v-card-actions>
      <v-list tow-line>
        <v-list-item>
          <v-list-item-content>
            Safe uncompleted notifications to drafts when cancel
            creation:</v-list-item-content
          >
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-switch
              class="ml-3"
              v-model="draft"
              color="info"
              value="info"
              hide-details
              inset
            >
                          <template #prepend>
    <v-list-item-subtitle class="small" v-if="draft">On</v-list-item-subtitle>
    <v-list-item-subtitle class="small" v-if="!draft">Off</v-list-item-subtitle>
  </template>
            </v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            Date by default is the current date:
          </v-list-item-content>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-switch
              class="ml-3"
              v-model="dateByDefault"
              color="info"
              value="info"
              hide-details
              inset
            >
               <template #prepend>
    <v-list-item-subtitle class="small" v-if="dateByDefault">On</v-list-item-subtitle>
    <v-list-item-subtitle class="small" v-if="!dateByDefault">Off</v-list-item-subtitle>
  </template>
            </v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class ="Heading-3">
              Add a suggested title to subject dropdown list:
            </v-list-item-content
          >
          <v-list-item-content>
            <v-list-item-action-text>Add a new title</v-list-item-action-text>
            <v-text-field
              v-model="notificationTitle"
              label="Add title"
              outlined
              clearable
              dense
              class="shrink"
              append-outer-icon="mdi-plus"
              @click:append-outer="AddTittle"
            ></v-text-field>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-action-text
              >All saved titles are shown here</v-list-item-action-text
            >
            <v-text-field
              v-model="notificationTitle"
              label="Add title"
              outlined
              clearable
              dense
              class="shrink"
              append-outer-icon="mdi-plus"
              @click:append-outer="AddTittle"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            While creating a notification:</v-list-item-content
          >
          <v-list-item-content>
            <v-list-item-action-text
              >Change recursing default</v-list-item-action-text
            >
            
            <v-radio-group v-model="recursing" row>
              <template v-slot:label>
                <div>Recurrence <strong>By default</strong></div>
              </template>
              <v-radio label="One" value="One">
                <template v-slot:label>
                  <strong class="success--text">One time</strong>
                </template>
              </v-radio>
              <v-radio label="Recurring" value="Recurring">
                <template v-slot:label>
                  <strong class="success--text">Recurring</strong>
                </template>
              </v-radio>
            </v-radio-group>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-action-text
              >Notification status default</v-list-item-action-text
            >
            <v-radio-group v-model="notificationStatus" row>
              <template v-slot:label>
                <div>Status<strong> By default</strong></div>
              </template>
              <v-radio label="Soft" value="Soft">
                <template v-slot:label>
                  <strong class="success--text">Soft</strong>
                </template>
              </v-radio>
              <v-radio label="Firm" value="Firm">
                <template v-slot:label>
                  <strong class="success--text">Firm</strong>
                </template>
              </v-radio>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CreateNotificationSettings",
  data: () => ({
    notificationTitle: "",
    dateByDefault:false,
    draft:false,
    recursing:"",
    notificationStatus:'',
  }),
  methods: {
    AddTittle() {},
    resetSittings(){},
    },
};
</script>

<style lang="scss" scoped>
</style>