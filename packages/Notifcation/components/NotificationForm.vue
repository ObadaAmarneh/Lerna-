<template>
  <div>
    <v-card shaped outlined  class="mx-auto">
      <form>
        <v-container fluid>
          <h1>Create a new notification</h1>
          <v-row>
            <v-col cols="10" md="4">
              <v-text-field
                v-model="notificationSubject"
                :error-messages="notificationSubjectErrors"
                :counter="30"
                label="Notification title"
                required
                @input="$v.notificationSubject.$touch()"
                @blur="$v.notificationSubject.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="10" md="4">
              <v-file-input
                label="Upload image"
                filled
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
            <v-col cols="10" md="4">
              <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Notification type "
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                v-model="selectedChannel"
                :items="channels"
                :error-messages="selectErrors"
                label="Channel type "
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="selectedStatus"
                :items="status"
                label="Notification status"
                @blur="$v.select.$touch()"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <Recipients
                @selectedRecipients="selectedRecipientsValue"
              ></Recipients>
            </v-col>
            <v-col cols="12" md="16">
              <v-textarea
                counter
                label="Notification description "
                :rules="rules"
                :value="value"
                v-model="value"
                placeholder="Type your message here"
              ></v-textarea>
            </v-col>

            <v-col cols="12" md="12">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" depressed @click="clear"> Clear </v-btn>
                <v-btn
                  color="success"
                  depressed=""
                  @click="selectedRecipientsValue"
                >
                  Send
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </form>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Recipients from "../components/NotificationFormComponents/Recipients.vue";

export default {
  mixins: [validationMixin],
  name: "NotificationForm",
  components: {
    Recipients,
  },
  validations: {
    notificationSubject: { required, maxLength: maxLength(30) },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    rules: [(v) => v.length <= 255 || "Max 255 characters"],
    value: "",
    selectedChannel: null,
    channels: ["Sms", "Web"],
    status: ["Firm", "Soft"],
    notificationSubject: "",
    select: null,
    selectedStatus: null,
    items: ["Instant", "Schedular"],
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    notificationSubjectErrors() {
      const errors = [];
      if (!this.$v.notificationSubject.$dirty) return errors;
      !this.$v.notificationSubject.maxLength &&
        errors.push("Notification title must be at most 30 characters long");
      !this.$v.notificationSubject.required &&
        errors.push("Notification title is required.");
      return errors;
    },
  },

  methods: {
    selectedRecipientsValue(value) {
      return value;
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.notificationSubject = "";
      this.selectedChannel = "";
      this.select = null;
      this.selectedStatus = null;
      this.selectedStatus = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input__slot {
  border-color: transparent !important;
}
</style>
