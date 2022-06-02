<template>
  <v-container>
    <v-form
      v-if="!userInfo.confirmPassword"
      ref="form"
      @submit.prevent="createUser"
    >
      <v-text-field
        v-model="userInfo.email"
        type="text"
        label="Email"
        placeholder="anaddress@youremail.com"
        :class="{ error: $v.userInfo.email.$error }"
        @blur="$v.userInfo.email.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.email.$error">
        <v-card-text
          v-if="!$v.userInfo.email.required || !$v.userInfo.email.email"
        >
          A valid email is required
        </v-card-text>
      </template>

      <v-text-field
        v-model="userInfo.password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="Password"
        placeholder="Fake3%Password"
        :class="{ error: $v.userInfo.password.$error }"
        @click:append="show = !show"
        @blur="$v.userInfo.password.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.password.$error">
        <v-card-text v-if="!$v.userInfo.password.required">
          You must have a password.
        </v-card-text>
        <v-card-text v-if="!$v.userInfo.password.minLength">
          Passwords must be at least 6 letters, contain a capital letter,
          lowercase letter, and special character (eg. !@#$%^*).
        </v-card-text>
      </template>

      <v-text-field
        v-model="userInfo.repeatPassword"
        :append-icon="showC ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showC ? 'text' : 'password'"
        label="Confirm Password"
        :class="{ error: $v.userInfo.repeatPassword.$error }"
        @click:append="showC = !showC"
        @blur="$v.userInfo.repeatPassword.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.repeatPassword.$error">
        <v-card-text v-if="!$v.userInfo.repeatPassword.required">
          You must repeat your password.
        </v-card-text>
        <v-card-text v-if="!$v.userInfo.repeatPassword.sameAsPassword">
          Passwords must match.
        </v-card-text>
      </template>

      <v-text-field
        v-model="userInfo.firstname"
        label="First Name"
        placeholder="Joe"
        :class="{ error: $v.userInfo.firstname.$error }"
        @blur="$v.userInfo.firstname.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.firstname.$error">
        <v-card-text v-if="!$v.userInfo.firstname.required">
          A first name is required
        </v-card-text>
      </template>

      <v-text-field
        v-model="userInfo.lastname"
        label="Last Name"
        placeholder="Smith"
        :class="{ error: $v.userInfo.lastname.$error }"
        @blur="$v.userInfo.lastname.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.lastname.$error">
        <v-card-text v-if="!$v.userInfo.lastname.required">
          A last name is required
        </v-card-text>
      </template>

      <v-menu
        ref="menu1"
        v-model="userInfo.menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="userInfo.dateFormatted"
            label="Birthdate"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            @blur="date = parseDate(userInfo.dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="userInfo.date"
          no-title
          @input="userInfo.menu1 = false"
        ></v-date-picker>
      </v-menu>
      <v-text-field
        v-model="userInfo.currentLocation"
        label="Current Location"
        placeholder="Goose Falls, IL"
        :class="{ error: $v.userInfo.currentLocation.$error }"
        @blur="$v.userInfo.currentLocation.$touch()"
      ></v-text-field>
      <template v-if="$v.userInfo.currentLocation.$error">
        <v-card-text v-if="!$v.userInfo.currentLocation.required">
          A location is required.
        </v-card-text>
      </template>
      <v-btn
        type="submit"
        :disabled="$v.$invalid"
        @click.prevent="createUser()"
      >
        Register
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
export default {
  data: (vm) => ({
    show: false,
    showC: false,
    rules: {
      email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
    },
    userInfo: {
      password: '',
      repeatPassword: '',
      email: '',
      error: '',
      confirmPassword: false,
      code: '',
      firstname: '',
      lastname: '',
      currentLocation: '',
      picture: '0',
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
    },
  }),
  validations: {
    userInfo: {
      email: {
        required,
        email,
      },
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      currentLocation: {
        required,
      },
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.userInfo.date)
    },
  },

  watch: {
    date(val) {
      this.userInfo.dateFormatted = this.formatDate(this.userInfo.date)
    },
  },
  methods: {
    async createUser() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        Promise.resolve('success')
      }
      const u = this.userInfo
      u.type = 'userInfo'
      await this.$axios.$post('http://localhost:5000/create', u)
      this.$auth.loginWith('local', {
        data: u,
      })
      this.$router.push('/user')
      await this.$nuxt.refresh()
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style></style>
