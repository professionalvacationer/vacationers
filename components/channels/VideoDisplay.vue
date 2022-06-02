<template>
  <div>
    <v-card class="mb-14">
      <v-container>
        <iframe
          width="500"
          height="250"
          src="https://www.youtube.com/embed/Ft4ICCEKwMY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
                  {{ video.title }}
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
                    {{ video.proFirstName }}
                    {{ video.proLastName }}
                  </v-card-subtitle>
                </v-col>
                <v-col class="pb-0 pl-1" cols="6" xl="5" lg="5">
                  <TipBtn>{{ video.proFirstName }}</TipBtn>
                  <FavoriteBtn />
                </v-col>
              </v-row>
              <v-row class="py-0">
                <v-card-subtitle slot="createdAt" class="py-0 text-subtitle-1">
                  {{ video.createdAt }}
                </v-card-subtitle>
              </v-row>
              <v-row>
                <v-card slot="tags" flat color="transparent">
                  <TagReady :tags="video.tags" />
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
            {{ video.story }}
          </v-card-text>
        </v-row>
      </v-container>
    </v-card>
    <VideoComment :video="video" />
    <VideoCommentList :video="video" />
  </div>
</template>

<script>
import VideoComment from '~/components/create/VideoComment'

import VideoCommentList from '~/components/channels/VideoCommentList'
export default {
  components: {
    VideoComment,
    VideoCommentList,
  },
  props: {
    video: {
      type: Object,
      default() {},
    },
  },
}
</script>

<style></style>
