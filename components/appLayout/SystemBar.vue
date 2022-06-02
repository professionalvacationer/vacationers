<template>
  <v-system-bar color="accent" app>
    <a
      href="http://facebook.com/provacationing"
      target="_blank"
      rel="noopener noreferrer"
      class="href"
    >
      <v-icon dark>mdi-facebook</v-icon>
    </a>
    <a
      href="https://www.youtube.com/channel/UCKnU42reA32h_Z6Lk_9iFiw/videos"
      target="_blank"
      rel="noopener noreferrer"
      class="href"
    >
      <v-icon dark>mdi-youtube</v-icon>
    </a>
    <a
      href="https://www.instagram.com/professionalvacationing/"
      target="_blank"
      rel="noopener noreferrer"
      class="href"
    >
      <v-icon dark>mdi-instagram</v-icon>
    </a>
    <v-spacer />
    <v-card color="accent" class="d-flex" flat>
      <Login />
      <v-btn to="/register">Register</v-btn>
    </v-card>

    <v-menu
      v-if="$auth.loggedIn"
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template #activator="{ on, attrs }">
        <v-avatar color="primary" dark v-bind="attrs" size="20" v-on="on">
          <v-icon>mdi-emoticon-cool-outline</v-icon>
        </v-avatar>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Welcome Username</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profiles">
          <v-list-item-title>My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title id="logout">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-system-bar>
</template>

<script>
import Login from '~/components/user/Login'
export default {
  components: {
    Login,
  },
  data: () => ({
    items: [
      { title: 'My Profile', route: '/profiles' },
      { title: 'Logout', route: '/' },
    ],
  }),
}
</script>

<style scoped>
.href {
  text-decoration: none;
}
#logout {
  cursor: pointer;
}
</style>
