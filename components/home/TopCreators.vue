<template>
  <v-container>
    <v-row class="d-flex justify-center pt-6">
      <v-card flat>
        <v-card-title
          id="title"
          class="text-xl-h2 pb-0 text-lg-h2 text-md-h3 text-sm-h3 text-h4"
        >
          Top Creators
        </v-card-title>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        v-for="topCreator in topCreators"
        :key="topCreator.id"
        cols="12"
        xl="3"
        lg="4"
        md="4"
        sm="4"
      >
        <v-card>
          <v-container>
            <v-row>
              <v-img
                height="250px"
                :src="require(`~/assets/home/${topCreator.pic}`)"
              />
            </v-row>

            <v-row>
              <v-card-title id="name" class="pb-0">
                {{ topCreator.name }}
              </v-card-title>
            </v-row>
            <v-row class="pt-0">
              <v-card-subtitle class="pt-0 black--text">
                {{ topCreator.location }}
              </v-card-subtitle>
            </v-row>
            <v-row>
              <v-card-subtitle class="pt-0 black--text">
                {{ topCreator.bio }}
              </v-card-subtitle>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    topCreators: [
      {
        id: 1,
        name: 'Devin Shook',
        bio: 'Over the last decade I have been working and traveling the world while living some of the most beautful places and the most beautiful people!  Recently I have transitioned into performing more freelance opportunities in order to be more mobile.  Through this we seen an opportunity to create a platform that could create these experiences for other people.  Which is why we felt providing a platform to earn, learn, and explore is great way to bind all walks of life!',
        location: 'Summerville, SC',
        pic: 'scuba-dive-ok.jpg',
      },
      {
        id: 2,
        name: 'Max Hoven',
        bio: `I have been referred to as the raconteur of my generation.  Storytelling and creating new things are two of my favorite things to do.  Mix it with a love for travel and the opportunity to earn while doing it all is a great experience!  Even better working and learning with people from all over the world has allowed me to be more open-minded and adventurous!`,
        location: 'Alton, IL',
        pic: 'italypic.jpg',
      },
      {
        id: 3,
        name: 'Zuzana Storkanova',
        location: 'Litomerice, CZ',
        bio: 'Traveling has been a passion of mine since I was young.  While earning my masters degree in environmental science, I had the opportunity to live and work in Yellowstone National Park.  Having a love for travel, sustainability, and meeting new people I also enjoy sharing my experiences with others!',

        pic: 'colombiatop.jpg',
      },
    ],
  }),
}
</script>

<style scoped>
#title {
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 700;
}
</style>
