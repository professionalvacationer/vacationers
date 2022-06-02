<template>
  <v-container>
    <v-card max-width="600" class="mx-auto">
      <v-app-bar color="accent">
        <v-toolbar-title id="title">Contact Form</v-toolbar-title>
      </v-app-bar>
      <v-container>
        <v-form @submit.prevent="sendEmail">
          <v-text-field
            v-model="name"
            type="text"
            :error-messages="nameErrors"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            type="email"
            :error-messages="emailErrors"
            label="youremail@domain.com"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Subject"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          <v-textarea
            v-model="message"
            label="Message"
            placeholder="Please let us know what you are interested in and we will get back to you as best we can!"
            required
          ></v-textarea>

          <v-btn class="mr-4" type="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

export default {
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    select: { required },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    message: '',
    items: [
      'General',
      'Research and Prep',
      'Guiding',
      'Disocery Stays',
      'Budget Coaching',
      'PV Web',

      'Opportunities',
    ],
  }),

  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    async sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        subject: this.select,
        message: this.message,
      }
      try {
        await emailjs.send(
          'service_z07iiyo',
          'template_umorluh',
          templateParams,
          'user_kY38KztxPr2diyCePgh77'
        )
      } catch (error) {
        console.log({ error })
      }
      return this.clear
    },

    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.message = false
    },
  },
}
</script>

<style scoped>
#title {
  color: white;
}
</style>
