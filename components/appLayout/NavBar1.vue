<template>
  <div class="overflow-hidden">
    <v-app-bar
      color="transparent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      app
      class="pl-12"
    >
      <v-btn
        v-if="(drawer = null || true)"
        small
        class="mr-2 hidden-md-and-up"
        @click.stop="
          temporary = true
          drawer = true
        "
      >
        Menu
      </v-btn>

      <a href="/">
        <v-img
          id="pvuLogo"
          :src="require('~/assets/longTerm/pvuOfficial.svg')"
          max-width="40"
          to="/"
        />
      </a>

      <v-spacer />

      <v-text-field />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer />

      <v-btn v-if="$auth.loggedIn" icon>
        <v-icon color="accent">mdi-bell</v-icon>
      </v-btn>
      <Login v-else />

      <v-btn v-if="$auth.loggedIn" icon>
        <v-icon color="accent3">mdi-account</v-icon>
      </v-btn>
      <v-btn v-else dark color="accent3" to="/register">Register</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      id="navDrawer"
      v-model="drawer"
      floating
      :expand-on-hover="expand"
      :mini-variant="mini"
      app
      hide-overlay
      class="hidden-md-and-down"
    >
      <!-- <v-list-item to="/" class="pl-2 py-n1" link>
        <v-list-item-icon class="mr-7">
          <v-icon large>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="pl-0">Home</v-list-item-content>
      </v-list-item> -->

      <v-list-item v-if="$auth.loggedIn" class="px-2 py-1">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ $auth.user.userInfo.email }}</v-list-item-title>

        <v-btn
          icon
          @click="
            temporary = false
            expand = true
            drawer = !drawer
            mine = true
          "
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list dense>
        <v-list-item id="hydrate" to="/hydratePvu" class="pl-2 py-2" link>
          <v-list-item-icon class="mr-5">
            <v-icon id="can" large class="navBarPages pl-1">
              mdi-watering-can
            </v-icon>
            ``
          </v-list-item-icon>

          <v-list-item-content class="pl-0">Hydrate PVU</v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          class="pl-2 py-2"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon :color="item.color" large>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      id="navDrawer"
      v-model="drawer"
      absolute
      bottom
      temporary
      app
      hide-overlay
      class="hidden-md-and-up"
    >
      <v-list-item v-show="isLoggedIn" class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click="
            temporary = false
            expand = true
            drawer = !drawer
            mine = true
          "
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider v-show="isLoggedIn" />

      <v-list dense>
        <v-list-item id="hydrate" class="pl-3 py-2" link>
          <v-list-item-icon class="mr-5">
            <v-icon id="can" large class="navBarPages pl-1">
              mdi-watering-can
            </v-icon>
            ``
          </v-list-item-icon>

          <v-list-item-content class="pl-0">Hydrate PVU</v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          class="pl-3 py-2"
          link
        >
          <v-list-item-icon>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Login from '~/components/user/Login'
export default {
  components: {
    Login,
  },
  data() {
    return {
      isLoggedIn: false,
      drawer: null,
      items: [
        { icon: 'mdi-home', route: '/', text: 'Home', color: 'red' },
        {
          icon: 'mdi-play-network',
          route: '/channels',
          text: 'Channels',
          color: '#00bad4',
        },
        {
          icon: 'mdi-head-sync',
          route: '/cultures',
          text: 'Cultures',
          color: '#6A1B9A',
        },
        {
          icon: 'mdi-airplane-takeoff',
          route: '/trips',
          text: 'Trips',
          color: '#C2185B',
        },

        {
          icon: 'mdi-pasta',
          route: '/epicures',
          text: 'Epicures',
          color: '#2E7B00',
        },
        {
          icon: 'mdi-room-service',
          route: '/servicesPvu',
          text: 'Services',
          color: '#EC6701',
        },
      ],
      mini: true,

      expand: true,
    }
  },
}
</script>

<style scoped>
.v-navigation-drawer--clipped {
  z-index: 5;
}
#can {
  color: transparent;
  background-image: linear-gradient(45deg, black, cyan, black);
  -webkit-background-clip: text;
  background-clip: text;
  animation: animate 8s linear infinite;
  background-size: 1000%;
  color: dark;
}

#hydrate {
  color: transparent;
  background-image: linear-gradient(135deg, black, cyan, black);
  -webkit-background-clip: text;
  background-clip: text;
  animation: animate 8s linear infinite;
  animation-delay: 2s;
  background-size: 1000%;
}

@keyframes animate {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>
