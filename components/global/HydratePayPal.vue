<template>
  <div id="dialogBtn">
    <v-dialog v-model="dialog" width="600">
      <template #activator="{ on, attrs }">
        <a
          v-bind="attrs"
          href="https://paypal.com/paypalme/professionalvacation"
          target="_blank"
          v-on="on"
        >
          <v-btn text color="white" width="50" v-bind="attrs" v-on="on">
            <v-img height="40" width="70" contain src="/paypal2.svg" />
          </v-btn>
        </a>

        <a
          v-bind="attrs"
          href="https://venmo.com/?txn=pay&audience=friends&recipients=devin-shook-4"
          target="_blank"
          v-on="on"
        >
          <v-btn text color="white" width="50" v-bind="attrs" v-on="on">
            <v-img height="40" width="70" contain src="/venmo.svg" />
          </v-btn>
        </a>

        <v-dialog v-model="dialog2" width="800">
          <template #activator="{ on, attrs }">
            <v-btn text color="white" width="50" v-bind="attrs" v-on="on">
              <v-img height="40" width="70" contain src="/crypto1.svg" />
            </v-btn>
          </template>
          <v-card>
            <v-row class="d-flex justify-center pt-8">
              <v-img height="70" contain src="/crypto1.svg" />
            </v-row>
            <v-row class="d-flex justify-center py-0">
              <v-card-title id="title" class="py-0">
                Cryptocurrency is available to be sent to the following address
              </v-card-title>
            </v-row>
            <v-row class="d-flex justify-center pt-0">
              <v-card-title
                id="title2"
                class="pt-0 text-decoration-overline text-decoration-underline"
              >
                389N6QuBoZLNAwEpjBwgNeiV9t1euCPmui
              </v-card-title>
            </v-row>
            <v-row class="d-flex justify-center pt-0">
              <v-card-title id="title" class="pt-0">
                Thank you for your interest and consideration!
              </v-card-title>
            </v-row>
          </v-card>
        </v-dialog>

        <a
          v-bind="attrs"
          href="https://cash.app/$professionalvacation"
          target="_blank"
          v-on="on"
        >
          <v-btn text color="white" width="50" v-bind="attrs" v-on="on">
            <v-img height="40" width="70" contain src="/cashapp.svg" />
          </v-btn>
        </a>
      </template>

      <v-card class="pt-6">
        <v-img class="pt-6" height="100" contain src="/pvuOfficial.svg" />
        <v-card-title id="title" class="d-flex justify-center pt-0">
          Thank you for your interest and consideration!
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

,
<script>
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
  }),
}
</script>

<style scoped>
#title {
  word-break: keep-all !important; /*this stops the word breaking*/
}
#title2 {
  border: 1px, solid, black;
}
</style>
