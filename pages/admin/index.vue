<template>
  <v-container>
    <v-row>
      <v-col>
        <ArticleForm />
      </v-col>
      <v-col cols="12" md="6">
        <VideoForm />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PodcastForm />
      </v-col>
      <v-col cols="12" md="6">
        <ProjectForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleForm from '~/components/create/ArticleForm'
import VideoForm from '~/components/create/VideoForm'
import PodcastForm from '~/components/create/PodcastForm'
import ProjectForm from '~/components/create/ProjectForm'
export default {
  components: {
    ArticleForm,
    VideoForm,
    PodcastForm,
    ProjectForm,
  },
}
</script>

<style></style>
