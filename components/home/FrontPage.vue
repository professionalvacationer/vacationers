<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="10" xl="8" lg="8" md="8">
        <FeaturedCard :articles="articles" />
        <CarouselHome />

        <FeaturedTrip />
      </v-col>

      <v-col cols="10" xl="3" lg="3" md="3">
        <SideCards />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeaturedCard from '~/components/home/FeaturedCard'
import CarouselHome from '~/components/home/CarouselHome'
import FeaturedTrip from '~/components/home/FeaturedTrip'
import SideCards from '~/components/home/SideCards'
export default {
  components: {
    FeaturedCard,
    CarouselHome,
    FeaturedTrip,
    SideCards,
  },
  data: () => ({
    articles: [
      {
        id: 1,
        title: 'Top 13 Ways to Become a Professional Vacationer',
        articlePhoto: 'elNidoTop1.png',
        authorFirstName: `Devin`,
        authorLastName: `Shook`,
        createdAt: `5/20/2021`,
        tags: [`Professional`, `Vacationers`, `Unlimited`],
      },
    ],
  }),
}
</script>
