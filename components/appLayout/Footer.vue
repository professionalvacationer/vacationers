<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.route"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        &copy; {{ new Date().getFullYear() }} — Professional Vacationers
        Unlimited
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Hydrate PVU', route: '/hydratePvu' },
      { name: 'Opportunities', route: '/opportunities' },
      { name: 'About Us', route: '/about' },
      { name: 'Terms', route: '/terms' },
      { name: 'Privacy', route: '/privacyPolicy' },
      { name: 'Contact Us', route: '/contactUs' },
    ],
  }),
}
</script>

<style scoped>
#text {
  color: white;
  text-decoration: none;
}
</style>
