<template>
  <v-container>
    <v-toolbar flat>
      <v-col cols="3"><v-btn color="accent">Create Card</v-btn></v-col>
      <v-col cols="6">
        <v-card class="d-flex justify-center" flat>
          <v-text-field
            append-icon="mdi-magnify"
            label="Search Culture Cards"
          ></v-text-field>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat width="50%">
          <v-select label="Sort By" :items="items">Sort By</v-select>
        </v-card>
      </v-col>
    </v-toolbar>
    <CultureCard />
  </v-container>
</template>

<script>
import CultureCard from '~/components/cultures/CultureCard'
export default {
  components: {
    CultureCard,
  },
  data: () => ({
    items: ['Oldest', 'Newest'],
  }),
}
</script>
