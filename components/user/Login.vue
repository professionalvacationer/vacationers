<template>
  <div>
    <v-dialog v-model="dialog" max-width="fit-content">
      <template #activator="{ on, attrs }">
        <v-btn color="accent" dark v-bind="attrs" v-on="on">Login</v-btn>
      </template>

      <v-card width="600px">
        <v-tabs v-model="tabs" centered background-color="accent">
          <v-tab v-for="myTab in myTabs" :key="myTab.text">
            {{ myTab.text }}
          </v-tab>
        </v-tabs>

        <v-container>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-container>
                <v-card flat>
                  <LoginForm @close-it="close" />
                </v-card>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LoginForm from '~/components/user/LoginForm'

export default {
  components: {
    LoginForm,
  },
  data: () => ({
    dialog: false,
    tabs: null,
    myTabs: [{ icon: 'mdi-airplane-takeoff', text: 'Pro Vacationer Login' }],
  }),
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>
