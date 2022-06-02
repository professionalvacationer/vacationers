<template>
  <v-form @submit.prevent="loginUser">
    <v-text-field
      v-model="login.email"
      label="Email*"
      required
      outlined
      type="email"
    ></v-text-field>
    <v-text-field
      v-model="login.password"
      outlined
      label="Password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      required
      @click:append="show = !show"
    ></v-text-field>
    <v-row>
      <v-btn
        class="ml-4"
        color="accent"
        type="submit"
        @keydown.enter="loginUser"
        @click="loginUser"
      >
        Login
      </v-btn>
      <v-btn text @click="closeIt()">Cancel</v-btn>
      <v-spacer />
    </v-row>
  </v-form>
</template>

<script>
export default {
  components: {},
  data: () => ({
    login: {
      email: '',
      password: '',
    },
    show: false,

    error: '',
  }),
  methods: {
    async loginUser() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    closeIt() {
      this.$emit('close-it')
    },
  },
}
</script>
