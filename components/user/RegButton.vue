<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn class="mb-2" color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <ContactForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm'
export default {
  components: {
    ContactForm,
  },
  data: () => ({
    dialog: false,
  }),
}
</script>
