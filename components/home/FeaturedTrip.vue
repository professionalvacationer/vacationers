<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-card-title
        id="title"
        class="mt-12 text-xl-h2 text-lg-h2 text-md-h3 text-sm-h3 text-h5"
      >
        Featured Trips
      </v-card-title>
      <v-col v-for="trip in trips" :key="trip.id" v-bind="trip" cols="12">
        <nuxt-link
          id="link"
          :to="{
            name: 'trips-id',
            params: { id: trip.id },
          }"
        >
          <v-card
            :style="{
              'box-shadow': `${side1} ${side2} ${side3} ${side4} ${randomColor(
                trip.id
              )}`,
            }"
            class="my-2"
          >
            <v-img
              height="200px"
              :src="require(`~/assets/home/${trip.mainImg}`)"
            />
            <v-row>
              <v-card class="pt-3 pb-0 pl-2 mb-0" color="transparent" flat>
                <v-card-title
                  id="cTitle"
                  class="display-1 pb-0 xl-text-h3 lg-text-h3 text-h5"
                >
                  <strong>{{ trip.title }}</strong>
                </v-card-title>
              </v-card>
            </v-row>

            <v-row class="pb-0">
              <v-col class="pb-0" cols="6">
                <v-card-title
                  id="white"
                  class="py-0 pl-3 text-xl-h6 text-lg-h6"
                >
                  {{ trip.authorFirstName }} {{ trip.authorLastName }}
                </v-card-title>
              </v-col>
              <v-col class="pb-0" cols="6">
                <TipBtn>{{ trip.authorFirstName }}</TipBtn>
                <FavoriteBtn />
              </v-col>
            </v-row>

            <v-row>
              <v-card class="pt-n5 pb-0 pl-2 ma-0" color="transparent" flat>
                <v-card-subtitle id="text" class="pt-0 pb-0">
                  Created: {{ trip.createdOn }}
                </v-card-subtitle>
              </v-card>
            </v-row>

            <v-row>
              <v-col class="pt-0 pb-0" cols="6">
                <v-card-title id="white" class="pt-0 pl-3 pb-0 text-subtitle-1">
                  <strong>{{ trip.duration }}</strong>
                </v-card-title>
              </v-col>

              <v-col class="pt-0 pb-0" cols="6">
                <v-card-title class="pt-0 pb-0 text-subtitle-1">
                  <strong>{{ trip.cost }}</strong>
                </v-card-title>
              </v-col>
            </v-row>

            <v-row>
              <v-card class="pt-n5 pb-0 pl-2 ma-0" color="transparent" flat>
                <v-card-subtitle id="text" class="pt-0 pb-0">
                  Puerto Princesa, PH | El Nido, PH | Sibaltan, PH
                </v-card-subtitle>
              </v-card>
            </v-row>

            <v-row>
              <v-card class="pb-0 pl-2 ma-0" color="transparent" flat>
                <v-card-title id="cardTitle" class="display-1 text-h6">
                  Overview
                </v-card-title>
                <v-card-subtitle id="text">{{ trip.overview }}</v-card-subtitle>
              </v-card>
            </v-row>

            <v-row>
              <v-col class="py-0">
                <v-card-title
                  id="cardTitle"
                  class="display-1 pl-3 py-0 text-h6"
                >
                  Itinerary
                </v-card-title>
              </v-col>
            </v-row>

            <v-row>
              <v-card class="py-0 pl-2 ma-0" color="transparent" flat>
                <v-card-title id="cardTitle" class="display-1 py-0 text-h6">
                  Inclusions/Exlusions
                </v-card-title>
              </v-card>
            </v-row>

            <v-row>
              <v-card class="py-0 pl-2 ma-0" color="transparent" flat>
                <v-card-title id="cardTitle" class="display-1 py-0 text-h6">
                  Price Variants
                </v-card-title>
              </v-card>
            </v-row>

            <v-row>
              <v-card class="py-0 pl-2 ma-0" color="transparent" flat>
                <v-card-title id="cardTitle" class="display-1 py-0 text-h6">
                  Best Time(s) of Year
                </v-card-title>
              </v-card>
            </v-row>

            <v-row>
              <v-card class="py-0 pl-2 ma-0" color="transparent" flat>
                <v-card-title id="cardTitle" class="display-1 py-0 text-h6">
                  Tags
                </v-card-title>
              </v-card>
            </v-row>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    side1: '1px',
    side2: '1px',
    side3: '1px',
    side4: '6px',
    colors: [
      'red',
      'blue',
      'green',
      'indigo',
      'purple',
      'teal',
      'orange',
      'deep-orange',
      '#00bcd4',
      'yellow',
      'light-green',
    ],
    currentColor: {},
    trips: [
      {
        id: 2342,
        mainImg: 'zuzka.jpg',
        title: `Connect with Czech!`,
        authorFirstName: `Devin`,
        authorLastName: `Shook`,
        createdOn: '2/22/21',
        duration: `5 Nights | 6 Days`,
        cost: `$400-$600`,
        destinations: [
          'Prague, CZ',
          'Litomerice, CZ',
          'Pilsen, CZ',
          'Cesky Krumlov, CZ',
        ],
        overview: `Castles, river exploration, historic churches, traditional foods, great beer, and a comfortable stay.  What more could you ask for? This trip identifies how to take a trip through the Czech Republic seeing and doing all of these things, with a sustainable twist.  Where to get the best food, see the tourist sites, and the top local destinations.  Czech Republic will definitely be at the top of your list soon!`,
      },
      {
        id: 4242,
        mainImg: 'AndrewCliffLake.jpg',
        title: `Yellowstone in a Nutshell`,
        authorFirstName: `Devin`,
        authorLastName: `Shook`,
        createdOn: '2/12/21',
        duration: `3 Nights | 3 Days`,
        cost: `$150-$1500`,
        destinations: ['Yellowstone National Park, WY'],
        overview: `Home to the largest geyser basin in the world, covering 2.2 million square acres Yellowstone National Park offers endless wonders for every adventurer.  Whether it is 3 days or 3 years, there will always be something new to see.  Check out this trip through Yellowstone and some of the surrounding areas, and be sure to start planning your next visit ASAP!`,
      },
      {
        id: 4244,
        mainImg: 'scuba-dive-ok.jpg',
        title: `More Fun in the Philippines`,
        authorFirstName: `Devin`,
        authorLastName: `Shook`,
        createdOn: '2/12/21',
        duration: `3 Nights | 4 Days`,
        cost: `$300-$500`,
        destinations: [`Puerto Princesa, PH`, `El Nido, PH`, `Sibaltan, PH`],
        overview: `Mantas, parrot fish, and corals galore.  This trip features diving, waterfalls, and endless jungle to explore through the island of Palawan in the Philippines.  While the Philippines is known for it's abundance of beautiful beaches and sweet mangoes and coconuts, the clear warm waters make for perfect diving and snorkeling.  This trip should definitely be on your list of places to see next. While enjoying the many fun activities to do on this trip, the dive team in Sibaltan, 'Dive Sibaltan', also activiely participates in environmental efforts to keep their community and reefs clean and healthy. This itinerary features a route to Sibaltan and booking a dive with them is not only good for you, but for everybody!`,
      },
    ],
  }),
  methods: {
    randomColor(id) {
      const c = this.colors[Math.floor(Math.random() * this.colors.length)]
      return (this.currentColor[id] = `${c}`)
    },
  },
}
</script>

<style>
#text {
  color: black;
}
#link {
  text-decoration: none;
}
#title {
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 700;
  word-break: keep-all !important; /*this stops the word breaking*/
}
</style>
