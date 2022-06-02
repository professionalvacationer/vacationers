<template>
  <v-row>
    <v-col
      v-for="proCard in proCards"
      :key="proCard.id"
      cols="12"
      lg="4"
      md="6"
      sm="6"
    >
      <v-card class="mb-5">
        <v-icon
          class="d-flex justify-center"
          :color="proCard.iconColor"
          x-large
        >
          mdi-{{ proCard.icon }}
        </v-icon>
        <v-card-title
          id="title"
          :style="{ background: proCard.backColor }"
          class="d-flex justify-center"
        >
          {{ proCard.title }}
        </v-card-title>
        <v-card-subtitle id="text" class="text-center pt-10">
          {{ proCard.hook }}
        </v-card-subtitle>

        <v-timeline align-top dense>
          <v-timeline-item color="accent" small>
            <v-row class="pt-1">
              <v-col>
                <strong>{{ proCard.perk1Des }}</strong>
                <div class="caption">{{ proCard.perk1Ex }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="accent2" small>
            <v-row class="pt-1">
              <v-col>
                <strong>{{ proCard.perk2Des }}</strong>
                <div class="caption">{{ proCard.perk2Ex }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="accent3" small>
            <v-row class="pt-1">
              <v-col>
                <strong>{{ proCard.perk3Des }}</strong>
                <div class="caption">{{ proCard.perk3Ex }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item color="secondary" small>
            <v-row class="pt-1">
              <v-col>
                <strong>{{ proCard.perk4Des }}</strong>
                <div class="caption">{{ proCard.perk4Ex }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>

        <RegButton />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import RegButton from '~/components/user/RegButton'
export default {
  components: {
    RegButton,
  },
  data: () => ({
    proCards: [
      {
        id: 1,
        title: 'Professional Vacationer',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,

        perk1: `Full Access`,
        perk1Des: `Read, Write, Discover`,
        perk1Ex: `Unlock and read all site content, write culture cards and trips, and begin to learn about new opportunities!`,
        perk2: `Dope as hell`,
        perk2Des: `Read, Write, Discover`,
        perk3: `Doesn't stop there!`,
        perk3Des: `Read, Write, Discover`,
        perk4: `It's getting better!`,
        perk4Des: `Read, Write, Discover`,
        backColor: '#00BAD4',
        icon: 'head-sync',
        iconColor: '#00BAD4',
      },
      {
        id: 2,
        title: 'Professional Creator',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,
        perk1: `Full Access Plus`,
        perk1Des: `Create, Earn, Learn`,
        perk1Ex: `Create and share, with unlocked hydration, articles, videos, podcasts, and projects with every Pro Vacationer!`,
        perk2: `Channels Content`,
        perk2Des: `Create content for channels`,
        perk3: `Epicures Content`,
        perk3Des: `Create content for Epicures`,
        perk4: `Hydrate`,
        perk4Des: `Hydration Access`,
        perk4Ex: `All content you create is tippable through our hydration button! Just add your handles for CashApp, Venmo, Paypal, and/or crypto wallet!`,
        backColor: '#2E7B00',
        icon: 'play-network',
        iconColor: '#2E7B00',
      },

      {
        id: 3,
        title: 'Professional Core',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,

        perk1: `Full Access Plus+`,
        perk1Des: `Gather, Grow, Explore`,
        perk1Ex: ``,

        perk2: `Dope as hell`,
        perk2Des: `Services, `,
        perk3: `Doesn't stop there!`,
        perk3Des: `Read, Write, Discover`,
        perk4: `It's getting better!`,
        perk4Des: `Read, Write, Discover`,
        backColor: '#EC6701',
        icon: 'room-service',
        iconColor: '#EC6701',
      },
      {
        id: 4,
        title: 'PVU Sponsor',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,

        perk1: `Full Access`,
        perk1Des: `Read, Write, Discover`,
        perk1Ex: `Unlock and read all site content, write culture cards and trips, and begin to learn about new opportunities!`,
        perk2: `Dope as hell`,
        perk2Des: `Read, Write, Discover`,
        perk3: `Doesn't stop there!`,
        perk3Des: `Read, Write, Discover`,
        perk4: `It's getting better!`,
        perk4Des: `Read, Write, Discover`,
        backColor: '#6A1B9A',
        icon: 'charity',
        iconColor: '#6A1B9A',
      },
      {
        id: 5,
        title: 'PVU Partner',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,

        perk1: `Full Access Plus+`,
        perk1Des: `Gather, Grow, Explore`,
        perk1Ex: ``,

        perk2: `Dope as hell`,
        perk2Des: `Services, `,
        perk3: `Doesn't stop there!`,
        perk3Des: `Read, Write, Discover`,
        perk4: `It's getting better!`,
        perk4Des: `Read, Write, Discover`,
        backColor: '#C2185B',
        icon: 'handshake',
        iconColor: '#C2185B',
      },
      {
        id: 6,
        title: 'Professional Mastermind',
        hook: `Always ready for the next big thing.  Ready to go and discover new cultures and possibilities. `,
        perk1: `Full Access Plus`,
        perk1Des: `Create, Earn, Learn`,
        perk1Ex: `Create and share, with unlocked hydration, articles, videos, podcasts, and projects with every Pro Vacationer!`,
        perk2: `Dope as hell`,
        perk2Des: `Read, Write, Discover`,
        perk3: `Doesn't stop there!`,
        perk3Des: `Read, Write, Discover`,
        perk4: `It's getting better!`,
        perk4Des: `Read, Write, Discover`,
        backColor: 'black',
        icon: 'developer-board',
        iconColor: 'black',
      },
    ],
  }),
}
</script>

<style>
#title {
  color: white;
}
#text {
  color: black;
}
</style>
