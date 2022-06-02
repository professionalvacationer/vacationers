<template>
  <v-card class="mb-14">
    <v-container>
      <v-carousel
        v-model="model"
        max-height="350"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item>
          <v-img :src="require(`~/assets/home/italypic.jpg`)">
            <v-btn class="mb-16" @click="alert">Take a Page Tour?</v-btn>
            <v-btn class="mb-16" @click="model++">Explore On Your Own</v-btn>
          </v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img :src="require(`~/assets/home/colombiatop.jpg`)">
            <v-btn class="mb-16" @click="model--">Wait I Forgot Go Back!</v-btn>
            <v-btn class="mb-16" @click="model++">Tell Me More!</v-btn>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col cols="12" xl="7" lg="7" md="6">
          <v-card flat>
            <v-row>
              <v-card-title
                id="title"
                class="py-0 text-xl-h3 text-lg-h3 text-md-h4 text-sm-h4 text-h5"
              >
                Welcome to PVU Channels!
              </v-card-title>
            </v-row>
            <v-row>
              <v-col class="pb-0" cols="7">
                <v-card-subtitle
                  class="
                    py-1
                    pl-1
                    black--text
                    text-xl-h5 text-lg-h5 text-md-h5 text-sm-h6 text-subtitle-1
                  "
                >
                  Team PVU
                </v-card-subtitle>
              </v-col>
              <v-col class="pb-0 pl-1" cols="6" xl="5" lg="5">
                <TipBtn>Team PVU</TipBtn>
              </v-col>
            </v-row>
            <v-row class="py-0">
              <v-card-subtitle slot="createdAt" class="py-0 text-subtitle-1">
                5/27/2021
              </v-card-subtitle>
            </v-row>
            <v-row>
              <v-card slot="tags" flat color="transparent">
                <TagReady :tags="tags" />
              </v-card>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-card-text
          slot="story"
          class="black--text"
          style="white-space: pre-line"
        >
          This is how it works.
        </v-card-text>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    tags: ['Pro', 'Vacation', 'Ye'],
  }),
  methods: {
    alert() {
      alert('Welcome to PVU Channels.  Pro Content from Pro Vacationers!')
    },
  },
}
</script>

<style></style>
