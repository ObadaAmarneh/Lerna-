<template>
  <div>
    <v-select
      v-model="selectedRecipients"
      :items="recipients"
      dense
      attach
      label="Select recipients"
      solo
      multiple
      @change="OnClickRecipients(selectedRecipients)"
    >
      <template #selection="{ item ,index  }">
        <v-chip v-if="index == 1 || index == 0 " class="ma-2 sm" close  small-chips color="green" text-color="white" @click:close="selectedRecipients.splice(selectedRecipients.indexOf(item), 1);">
         <v-avatar left>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar> 
          {{item }}
        </v-chip>
        <span
          v-if="index === 2"
          class="grey--text text-caption"
        >
          (+{{ selectedRecipients.length - 2 }} others)
        </span>
      </template>

      <template v-slot:prepend-item>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              dense
              solo
              clearable
              v-model="searchTerm"
              placeholder="Search"
              @input="searchUsers"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "Recipients",
  mounted() {
    this.recipientsCopy = [...this.recipients];
  },
  data: () => ({
    selectedRecipients: [],
    searchTerm: "",
    recipients: ["CIAM", "Supplier", "Customer", "Others","ss","11","22","ds","xz","zx",],
    recipientsCopy: [],
  }),
  methods: {
    OnClickRecipients(value) {
      this.$emit("selectedRecipients", value);
    },
    searchUsers(e) {
      if (!this.searchTerm) {
        this.recipients = this.recipientsCopy;
      }

      this.recipients = this.recipientsCopy.filter((user) => {
        return user.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
