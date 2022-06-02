<template>
  <v-app id="app" style="-webkit-app-region: drag default">
    <NavBar1 id="bar" />
    <v-main>
      <nuxt />
    </v-main>
    <v-btn
      v-scroll="onScroll"
      bottom
      color="accent"
      dark
      fab
      fixed
      left
      class="clickable ml-12"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <Footer />
  </v-app>
</template>

<script>
import NavBar1 from '~/components/appLayout/NavBar1'
import Footer from '~/components/appLayout/Footer'

export default {
  components: {
    NavBar1,
    Footer,
  },
  middleware: 'load-content',

  head() {
    return {
      titleTemplate: '%s - Professional Vacationers Unlimited',
      meta: [
        {
          hid: 'Professional VacationersUnlimited',
          name: 'Professional Vacationers Unlimited',
          content:
            'Professional Vacationers Unlimited brings to you the top information for vacation destinations.',
        },
      ],
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },

    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
  /* background-color: lightgray; */
}

.defAvatar {
  pointer-events: all;
}
.clickable {
  -webkit-app-region: no-drag;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
#title {
  color: white;
  text-decoration-line: none;
}
</style>
