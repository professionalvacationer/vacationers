<template>
  <v-btn class="mb-2" color="primary" fab x-small dark @click="favorite()">
    <v-icon>mdi-charity</v-icon>
  </v-btn>
</template>

<script>
// import { mapGetters } from 'vuex'
// import { DataStore } from '@aws-amplify/datastore'
// import { AuthorInfo } from '~/models'

export default {
  // props: {
  //   article: {
  //     type: Object,
  //   },
  //   video: {
  //     type: Object,
  //   },
  //   project: {
  //     type: Object,
  //   },
  //   podcast: {
  //     type: Object,
  //   },
  // },
  // data: () => ({}),
  // computed: {
  //   ...mapGetters({
  //     user: 'auth/user',
  //   }),
  // },
  methods: {
    favorite() {
      this.$emit('fav-it')
    },
  },
}
</script>
