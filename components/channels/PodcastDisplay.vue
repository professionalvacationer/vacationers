<template>
  <div>
    <v-card class="mb-14">
      <v-container>
        <v-img max-height="350px" :src="`/${podcast.podcastPhoto}`" />
        <audio slot="audio" max-height="150px" controls>
          <source :src="podcast.podcastFile" />
        </audio>
        <v-row>
          <v-col cols="12" xl="7" lg="7" md="6">
            <v-card flat>
              <v-row>
                <v-card-title
                  id="title"
                  class="
                    py-0
                    text-xl-h3 text-lg-h3 text-md-h4 text-sm-h4 text-h5
                  "
                >
                  {{ podcast.title }}
                </v-card-title>
              </v-row>
              <v-row>
                <v-col class="pb-0" cols="7">
                  <v-card-subtitle
                    class="
                      py-1
                      pl-1
                      black--text
                      text-xl-h5
                      text-lg-h5
                      text-md-h5
                      text-sm-h6
                      text-subtitle-1
                    "
                  >
                    {{ podcast.proFirstName }}
                    {{ podcast.proLastName }}
                  </v-card-subtitle>
                </v-col>
                <v-col class="pb-0 pl-1" cols="6" xl="5" lg="5">
                  <TipBtn>{{ podcast.proFirstName }}</TipBtn>
                  <FavoriteBtn />
                </v-col>
              </v-row>
              <v-row class="py-0">
                <v-card-subtitle slot="createdAt" class="py-0 text-subtitle-1">
                  {{ podcast.createdAt }}
                </v-card-subtitle>
              </v-row>
              <v-row>
                <v-card slot="tags" flat color="transparent">
                  <TagReady :tags="podcast.tags" />
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
            {{ podcast.overview }}
          </v-card-text>
        </v-row>
      </v-container>
    </v-card>
    <PodcastComment :podcast="podcast" />
    <PodcastCommentList :podcast="podcast" />
  </div>
</template>

<script>
import PodcastComment from '~/components/create/PodcastComment'
import PodcastCommentList from '~/components/channels/PodcastCommentList'
export default {
  components: {
    PodcastComment,
    PodcastCommentList,
  },
  props: {
    podcast: {
      type: Object,
      default() {},
    },
  },
}
</script>

<style></style>
