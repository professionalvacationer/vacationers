<template>
  <v-container id="articleCard" class="mb-10">
    <v-row class="d-flex justify-center">
      <v-card-title
        id="atitle"
        class="mt-12 text-xl-h2 text-lg-h2 text-md-h3 text-sm-h3 text-h5"
      >
        Featured Creations
      </v-card-title>
      <v-col v-for="(article, index) in articles" :key="index" cols="12">
        <nuxt-link
          id="link"
          :to="{
            name: 'channels-article',
            params: { article: article.id },
          }"
        >
          <v-card
            id="card"
            :style="{
              'box-shadow': `${side1} ${side2} ${side3} ${side4} ${randomColor(
                index
              )}`,
            }"
            class="py-2 my-2"
          >
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" xl="5" lg="5">
                  <v-img
                    height="200px"
                    :src="require(`~/assets/home/${article.articlePhoto}`)"
                  />
                </v-col>

                <v-col cols="12" xl="7" lg="7">
                  <v-card flat class="pt-2">
                    <v-row>
                      <v-card-title
                        id="title"
                        slot="title"
                        class="text-h6 py-0"
                      >
                        {{ article.title }}
                      </v-card-title>
                    </v-row>

                    <v-row>
                      <v-card-subtitle slot="author" class="py-0 black--text">
                        {{ article.authorFirstName }}
                        {{ article.authorLastName }}
                      </v-card-subtitle>
                    </v-row>

                    <v-row class="py-0">
                      <v-card-subtitle slot="createdAt" class="py-0">
                        {{ article.createdAt }}
                      </v-card-subtitle>
                    </v-row>

                    <v-row>
                      <v-card slot="tags" flat color="transparent">
                        <TagReady :tags="article.tags" />
                      </v-card>
                    </v-row>

                    <v-row class="py-0 mb-2">
                      <v-card-text
                        class="py-0 pl-3"
                        style="white-space: pre-line"
                      >
                        {{ article.overview }}
                      </v-card-text>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default() {},
    },
  },
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
      'blue-grey',
      '#00bcd4',
      'yellow',
      'light-green',
    ],
    currentColor: {},
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
#link {
  text-decoration: none;
}
#card {
  transition-property: none;
}
#title {
  word-break: keep-all !important; /*this stops the word breaking*/
}
#atitle {
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 700;
}
</style>
