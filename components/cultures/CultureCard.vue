<template>
  <v-container>
    <v-row>
      <v-col
        v-for="cultureCard in cultureCards"
        :key="cultureCard.id"
        cols="12"
        xl="3"
        lg="3"
        md="3"
        sm="6"
      >
        <v-card
          dark
          class="mx-auto"
          max-width="400"
          :style="{
            background: ` ${randomColor(index)}`,
          }"
        >
          <!-- code to make alternating colors around culture cards -->
          <!-- 'box-shadow': `${side1} ${side2} ${side3} ${side4} ${randomColor(
              index
            )}`, -->
          <v-card-subtitle>
            <v-icon large left color="accent">mdi-webrtc</v-icon>
            <span>PVU Cultures-</span>
            <span>{{ cultureCard.date }}</span>
          </v-card-subtitle>

          <v-card-text id="text">"{{ cultureCard.heading }}"</v-card-text>

          <v-row>
            <v-card slot="tags" class="ml-3" flat color="transparent">
              <TagReady :tags="cultureCard.tags" />
            </v-card>
          </v-row>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  :src="require(`~/assets/home/${cultureCard.pic}`)"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ cultureCard.author }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ cultureCard.location }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">{{ cultureCard.likes }}</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">23</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="4" sm="6">
        <v-card>hi</v-card>
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
      'orange',
      'deep-orange',
      'blue-grey',
      'dogerblue',
      'darkcyan',

      'steelblue',
    ],
    currentColor: {},
    cultureCards: [
      {
        id: 1,
        heading:
          'My hometown is right next door to Colby, WI.  They are famous for the creation of Colby Cheese.  Every year we have a carnival called Colby Cheese Days, and there are tractor pulls and a competition to see who can throw a cheese curd the furthest!',
        tags: [
          'Cheese',
          'Dairy State',
          'Cheese Days',
          'July',
          'Summer',
          'Carnival',
          'Festival',
          'Colby',
          'Wisconsin',
        ],
        author: 'Devin Shook',
        date: ' 4/12/21',
        location: 'Litomerice, CZ',
        likes: 35,
        pic: 'scuba-dive-ok.jpg',
      },

      {
        id: 2,
        heading: `Tranquilo.  That is how we refer to our attitude a lot of the time.  It is our version of "chill out" or "no worries".  If you are running late or upset about something, it is all good, TRANQUILO :)  `,
        tags: ['Colombia', 'Tranquilo', 'chill', 'sayings'],
        author: 'Gabriela Ramirez',
        date: '4/12/21',
        location: 'Medellin, CO',
        likes: 287,
        pic: 'colombiatop.jpg',
      },

      {
        id: 3,
        heading: `It is a tradition in the Czech Republic for guys to make small whips from sticks.  On Easter Monday, they have until 12pm to GENTLY hit girls on the butt and recite a poem.  Then the girl is supposed to give them an egg and usually a shot of hard alcohol!  After 12pm if the boys continue the girls get to spary them with water! `,
        tags: ['Czech Republic', 'Easter', 'Spring', 'Fun', 'poetic'],
        author: 'Zuzana Storkanova',
        date: '3/7/21',
        location: 'Litomerice, CZ',
        likes: 340,
        pic: 'zuzka.jpg',
      },
      {
        id: 4,
        heading: `In my culture the louder you eat (especially noodles!) and make slurping noises to show that the food is really being enjoyed!  `,
        tags: [
          'Noodles',
          'Eating',
          'Japan',
          'Loud',
          'not so gross',
          'most of asia',
        ],
        author: 'Suzuki Shota',
        date: '2/17/21',
        location: 'Tokyo, JP',
        likes: 180,
        pic: 'elNidoTop1.png',
      },

      {
        id: 6,
        heading: `Every year from April 14th to April 24th we have a big celebration of the cuckoo bird.  In my town there are cuckoo clocks sold everywhere and you can hear the sweet song the whole week LOL. `,
        tags: [
          'Wonderland',
          'April',
          'cuckoo',
          'cuckoo clock',
          'Worcestershire',
          'everybody is a little cuckoo',
        ],
        author: 'Max Hoven',
        date: '1/15/21',
        location: 'Alton, IL',
        likes: 22,
        pic: 'max.jpg',
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

<style scoped>
#text {
  color: white;
}
#link {
  text-decoration: none;
}
#card {
  transition-property: none;
}
</style>
