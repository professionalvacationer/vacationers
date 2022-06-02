<template>
  <v-container class="pt-10">
    <v-row class="d-flex justify-center">
      <v-card flat class="pt-10">
        <v-card-title
          id="title"
          class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h3 text-h5"
        >
          COMING SOON!!!
        </v-card-title>
      </v-card>
    </v-row>
    <v-carousel
      cycle
      max-height="550"
      hide-delimiter-background
      show-arrows-on-hover
      class="pt-0"
    >
      <v-carousel-item v-for="slide in slides" :key="slide.id">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="10" xl="5" lg="5">
            <nuxt-link id="link" :to="slide.route">
              <v-img
                :src="require(`~/assets/home/${slide.pageImg}`)"
                height="250px"
              />
            </nuxt-link>
          </v-col>
          <v-col cols="10" xl="6" lg="6">
            <nuxt-link id="link" :to="slide.route">
              <v-card-title
                id="cardTitle"
                class="
                  display-1
                  pt-2
                  pb-0
                  text-xl-h4 text-lg-h4 text-md-h4 text-sm-h5 text-h6
                "
              >
                {{ slide.pageName }}
              </v-card-title>
              <v-card-text
                id="cardText"
                class="
                  text-caption
                  py-1
                  text-xl-body-1 text-lg-body-2 text-md-body-2
                "
              >
                {{ slide.description }}
              </v-card-text>
              <v-card-subtitle id="cardSubtitle">
                Arriving {{ slide.arrivalDate }}
              </v-card-subtitle>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: `1`,
          pageName: `Cultures`,
          pageImg: `ecegg.jpg`,
          description: `The most interesting things we have are our traditions and values.  They vary greatly between each and every person in the world! Together we can share and learn about each other and different ways of life with PVU Cultures.  Created by vacationers for vacationers, it's time to put the you in unique and share some information about your culture!`,
          arrivalDate: `May 2021`,
          route: '/cultures',
        },
        {
          id: `2`,
          pageName: `Trips`,
          pageImg: `italypic.jpg`,
          description: `Ready for your next adventure?  Now to ask when and where to go, what to do, how much will it be and how long will I be there? All of this can be answered with custom user designed itineraries! Search by Title, Tags, Authors, and Time of Year.  Filter by Cost, Duration, or Destinations. We have designed a short preview and with your help could launch this feature sooner than later!`,
          arrivalDate: `Summer 2021`,
          route: '/trips',
        },

        {
          id: `3`,
          pageName: `Services`,
          pageImg: `scuba-dive-ok.jpg`,
          description: `By implementing unique cultural aspects and ecological ideals the best we can, PVU will be offering trip reasearch and preparation, budget coaching, private guiding, discovery-stays, and web professional services.  Services offered will vary and constantly be updated within the regulations of the current crisis.  We are currently working diligently to put together our service packages to best suit your needs!`,
          arrivalDate: `June 2021`,
          route: '/servicesPvu',
        },
        {
          id: `4`,
          pageName: `Epicure`,
          pageImg: `excitedfood.jpg`,
          description: `With respect to the philospher Epicurus, we're combining friendship, tranquility, and the simple pleasures of worldly cuisines. An important contribution to all of our well-beings is what and when we consume things.  With this we are excited to bring forth made-from-scratch recipes (featuring whole tomatoes, recipes at the top, and seasonal recipes) from ALL OVER THE WORLD!  Where to find the best local cuisine with unique dining options and rotating seasonal menus? We will cover that too!`,
          arrivalDate: `Fall 2021`,
          route: '/epicure',
        },
      ],
    }
  },
}
</script>

<style scoped>
#title {
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 700;
}
.v-card__text {
  font-size: 0.8em;
}
.v-card__title {
  font-size: 1.5em;
}
#cardTitle {
  color: black;
  text-decoration: none;
}
#cardText {
  color: black;
}
#cardSubtitle {
  color: black;
}
#link {
  text-decoration: none;
}
</style>
