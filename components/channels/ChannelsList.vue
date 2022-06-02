/* eslint-disable vue/no-template-shadow */ /* eslint-disable prettier/prettier
*/
<template>
  <div>
    <v-row>
      <v-col cols="1" />
      <v-col cols="9">
        <IntroChannel v-if="activeContent === null" />
        <ArticleDisplay v-if="activeContent === 0" :article="article" />
        <VideoDisplay v-if="activeContent === 1" :video="video" />
        <PodcastDisplay v-if="activeContent === 2" :podcast="podcast" />
        <ProjectDisplay v-if="activeContent === 3" :project="project" />
      </v-col>
      <v-col cols="2">
        <v-row class="mb-16">
          <v-btn
            id="guide"
            elevation="5"
            color="accent"
            dark
            top
            fixed
            class="mt-12"
            right
            large
            @click="drawer = !drawer"
          >
            Channel Guide
          </v-btn>
        </v-row>
        <v-row class="d-flex justify-center mt-16 d-none d-md-block">
          <v-col v-for="ad in ads" :key="ad.id" cols="10">
            <v-card>
              <v-card-title id="title">
                {{ ad.company }}
              </v-card-title>
              <v-card-subtitle id="title" class="pb-0">
                {{ ad.description }}
              </v-card-subtitle>
              <v-card-text class="pt-0">
                {{ ad.full }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-navigation-drawer
      id="guide"
      v-model="drawer"
      right
      fixed
      temporary
      hide-overlay
      width="450px"
      class="mt-16"
    >
      <v-tabs v-model="tabs" centered background-color="accent">
        <v-tab v-for="myTab in myTabs" :key="myTab.text">
          {{ myTab.text }}
        </v-tab>
      </v-tabs>

      <!-- DATA TABLE STARTS HERE -->
      <!-- DATA TABLE STARTS HERE -->
      <!-- DATA TABLE STARTS HERE -->

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <ArticleDataTable @is-article="showArticle" />
        </v-tab-item>

        <v-tab-item>
          <VideoDataTable @is-video="showVideo" />
        </v-tab-item>
        <v-tab-item>
          <PodcastDataTable @is-podcast="showPodcast" />
        </v-tab-item>
        <v-tab-item>
          <ProjectDataTable @is-project="showProject" />
        </v-tab-item>
      </v-tabs-items>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VideoDataTable from '~/components/channels/VideoDataTable'
import IntroChannel from '~/components/channels/IntroChannel'
import ArticleDisplay from '~/components/channels/ArticleDisplay'
import VideoDisplay from '~/components/channels/VideoDisplay'
import PodcastDisplay from '~/components/channels/PodcastDisplay'
import ProjectDisplay from '~/components/channels/ProjectDisplay'
import ArticleDataTable from '~/components/channels/ArticleDataTable'
import ProjectDataTable from '~/components/channels/ProjectDataTable'
import PodcastDataTable from '~/components/channels/PodcastDataTable'

export default {
  components: {
    IntroChannel,
    ArticleDisplay,
    ArticleDataTable,
    VideoDataTable,
    ProjectDataTable,
    PodcastDataTable,
    VideoDisplay,
    PodcastDisplay,
    ProjectDisplay,
  },

  data: () => ({
    selectedItems: [],
    singleSelect: true,
    itemsPerPage: 10,
    tabs: null,
    activeContent: null,
    myTabs: [
      {
        icon: 'mdi-play-network',
        text: 'Articles',
      },

      { icon: 'mdi-room-service', text: 'Videos' },
      { icon: 'mdi-account-group-outline', text: 'Podcasts' },
      { icon: 'mdi-pasta', text: 'Projects' },
    ],
    drawer: true,

    ads: [
      {
        id: 1,
        company: 'Travel Company',
        description: 'Your Ad Here',
        full: 'This is a company about travel who wants to be well known.',
      },
      {
        id: 2,
        company: 'Sustainable Idea',
        description: 'Your Ad Here',
        full: 'This is a company about sustainability who wants to be well known.',
      },
      {
        id: 3,
        company: 'Podcast Group',
        description: 'Your Ad Here',
        full: 'This is a podcast group who wants to be well known.',
      },
      {
        id: 4,
        company: 'Youtubers Delight',
        description: 'Your Ad Here',
        full: 'This is a youtuber who wants to be well known.',
      },
      {
        id: 5,
        company: 'Travel Group 3000',
        description: 'Your Ad Here',
        full: 'This is a travel group about travel who wants to be well known.',
      },
      {
        id: 6,
        company: 'Where Am I...For Real?',
        description: 'Your Ad Here',
        full: 'This company is lost.........',
      },
    ],
    videos: [
      { id: 1, title: 'video' },
      { id: 2, title: 'video2' },
    ],
  }),

  computed: {
    ...mapGetters({
      article: 'articles/article',
      video: 'videos/video',
      podcast: 'podcasts/podcast',
      project: 'projects/project',
    }),
    headers() {
      return [
        { text: 'Title', value: 'title' },
        { text: 'Date', value: 'createdAt' },
        { text: 'Author', value: 'authorLastName' },
      ]
    },
  },
  methods: {
    showArticle() {
      try {
        this.activeContent = 0
      } catch (error) {
        console.log(error)
      }
    },
    showVideo() {
      try {
        this.activeContent = 1
      } catch (error) {
        console.log(error)
      }
    },
    showPodcast() {
      try {
        this.activeContent = 2
      } catch (error) {
        console.log(error)
      }
    },
    showProject() {
      try {
        this.activeContent = 3
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
#title {
  word-break: keep-all !important; /*this stops the word breaking*/
  color: black;
}
#guide {
  z-index: 50;
}
</style>
