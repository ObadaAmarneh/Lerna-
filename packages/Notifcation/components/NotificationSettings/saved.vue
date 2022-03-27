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
          <v-list-item-content> Allow web notifications:  
   
                  <v-switch
              class="marginAllow"
              v-model="allowWeb"
              color="info"
              inset
              hide-details
            ></v-switch>
          </v-list-item-content>
    
          
      
            
        </v-list-item>
        <v-list-item class="mb-14">
          <v-list-item-content>
            Allow notifications:
            <v-list-item-action-text
              ><strong>*</strong> This will not effect firm
              notifications.</v-list-item-action-text
            >
          </v-list-item-content>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-subtitle> Allow between </v-list-item-subtitle>
            <v-switch
              class="ml-3"
              v-model="allowBetween"
              color="info"
              hide-details
               :disabled="allowNotificationAlways || neverAllowNotification"
              inset
             
            ></v-switch>
          </v-list-item-content>
          <vue-timepicker
            v-if="allowBetween"
            class="mt-10"
            v-model="notificationTimeFrom"
            format="HH:mm"
          ></vue-timepicker>
          <h1 v-if="allowBetween" class="body-2 ml-8 mt-10">To</h1>
          <vue-timepicker
            v-if="allowBetween"
            class="ml-10 mt-10"
            v-model="notificationTimeTo"
            format="HH:mm"
            
          ></vue-timepicker>
          <v-list-item-content>
            <v-list-item-subtitle class="ml-10" > Always </v-list-item-subtitle>
            <v-switch
            
              class="ml-10"
              v-model="allowNotificationAlways"
              color="info"
              :disabled="allowBetween || neverAllowNotification"
              hide-details
              inset
            ></v-switch>
          </v-list-item-content>
          <v-list-item-content class="mr-15">
            <v-list-item-subtitle class="ml-3"> Never </v-list-item-subtitle>
            <v-switch
               :disabled="allowBetween ||allowNotificationAlways"
              class="ml-3"
              v-model="neverAllowNotification "
              color="info"
              hide-details
              inset
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
        <!-- ssss -->
        <v-list-item class="mb-14">
          <v-list-item-content>
            Notification default management view:
            <v-list-item-action-text
              ><strong>*</strong> This will not effect firm
              notifications.</v-list-item-action-text
            >
          </v-list-item-content>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-subtitle> Setting </v-list-item-subtitle>

            <v-switch
              class="ml-3"
              v-model="allowNotificationSettings"
              :disabled="allowNotificationSent ||allowNotificationRecent"
              color="info"
              inset
              hide-details
            ></v-switch>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-subtitle class="ml-10"> Sent </v-list-item-subtitle>
            <v-switch
              class="ml-10"
              v-model="allowNotificationSent"
              :disabled="allowNotificationSettings ||allowNotificationRecent"
              inset
              color="info"
              hide-details
            ></v-switch>
          </v-list-item-content>
          <v-list-item-content class="mr-15">
            <v-list-item-subtitle class="ml-3"> Recent </v-list-item-subtitle>
            <v-switch
              class="ml-3"
              :disabled="allowNotificationSent ||allowNotificationSettings"
              v-model="allowNotificationRecent"
              color="info"
              hide-details
              inset
            ></v-switch>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="mb-14" width="100%">
          <v-list-item-content>
            Delete notifications disappear within:
          
          </v-list-item-content>
          <v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-subtitle 
              class="marginRight"
            > 10 Days </v-list-item-subtitle>
            <v-switch
              class="marginRight"
              v-model="deletePageSittings.tenDays"
              :disabled="deletePageSittings.Immediately ||deletePageSittings.never ||deletePageSittings.twoWeeks"
              inset
              color="info"
              value="10"
              hide-details
              @click="tenDays"
            ></v-switch>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item-subtitle               class="marginTwoweeks "
>
              Two weeks 
            </v-list-item-subtitle>
            <v-switch
                            class="marginTwoweeks"
              v-model="deletePageSittings.twoWeeks"
              :disabled="deletePageSittings.Immediately ||deletePageSittings.never ||deletePageSittings.tenDays"
              color="info"
              value="2"
              hide-details
              @click="twoWeeks"
              inset
            ></v-switch>
          </v-list-item-content>
          <v-list-item-content >
            <v-list-item-subtitle 
            class="marginImmediately1">
              Immediately
            </v-list-item-subtitle>
            <v-switch
            class="marginImmediately"
              v-model="deletePageSittings.Immediately"
              :disabled="deletePageSittings.twoWeeks ||deletePageSittings.never ||deletePageSittings.tenDays"
              
              color="info"
              value="Immediately"
              hide-details
              inset
            ></v-switch>
          </v-list-item-content>
          <v-list-item-content class="mr-15">
            <v-list-item-subtitle class="marginNever"> never </v-list-item-subtitle>
            <v-switch
              class="marginNever"
              v-model="deletePageSittings.never"
              :disabled="deletePageSittings.twoWeeks ||deletePageSittings.Immediately ||deletePageSittings.tenDays"

              color="info"
              value="never"
              hide-details
              inset
            ></v-switch>
          
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import moment from "moment";

export default {
  data: () => ({
    disabled:false,
    allowNotificationAlways: false,
    neverAllowNotification: false,
    allowBetween: false,
    notificationTimeFrom: "",
    notificationTimeTo: "",
    allowWeb: false,
    allowNotificationRecent: false,
    allowNotificationSent: false,
    allowNotificationSettings: false,
    deletePageSittings: {
      tenDays: false,
      twoWeeks: false,
      allowNotificationRecent: false,
      Immediately: false,
      never: false,
    },
  }),
  methods: {
    AddTittle() {},
    resetSittings() {
    this.allowNotificationAlways= false
    this.neverAllowNotification= false
    this.allowBetween= ""
    this.notificationTimeFrom= ""
    this.notificationTimeTo= ""
    this.allowWeb= false
    this.allowNotificationRecent= false
    this.allowNotificationSent= false
    this.allowNotificationSettings= false
    this.deletePageSittings.tenDays = false
    this.deletePageSittings.twoWeeks = false
    this.deletePageSittings.allowNotificationRecent = false
    this.deletePageSittings.Immediately = false
    this.deletePageSittings.never = false
    },
allowBetweenUpdate(){

  this.allowBetween = !this.allowBetween;
},
    moment: function () {
      return moment();
    },
    tenDays() {
      console.log("reaced", this.deletePageSittings.tenDays);
      if (this.deletePageSittings.tenDays) {
        console.log("sdasdasd", this.deletePageSittings.tenDays);
        let startDate = this.moment();
        startDate = startDate.format("DD-MM-YYYY");
        let newDate = this.moment(startDate, "DD-MM-YYYY").add(
          this.deletePageSittings.tenDays,
          "days"
        );
        console.log("ten days ahead", newDate._d);
      }
    },
    twoWeeks() {
      console.log("reaced", this.deletePageSittings.twoWeeks);
      if (this.deletePageSittings.twoWeeks) {
        console.log("sdasdasd", this.deletePageSittings.twoWeeks);
        let startDate = this.moment();
        startDate = startDate.format("DD-MM-YYYY");
        let newDate = this.moment(startDate, "DD-MM-YYYY").add(
          this.deletePageSittings.twoWeeks,
          "weeks"
        );
        console.log("ten days ahead", newDate._d);
      }
    },
  },
  components: {
    vueTimepicker: VueTimepicker,
  },
};
</script>

<style lang="scss" scoped>
.marginRight{
  margin-left: 6rem;
}
.marginTwoweeks{
  margin-left: 13.2rem;

}
.marginNever{
  margin-left: 15rem;
}
.marginAllow{
  margin-left: 17rem ;
  margin-bottom: 1rem;
}
.marginImmediately{
  padding-left: 17rem;

}
.marginImmediately1{
  padding-left: 16rem;

}
</style>