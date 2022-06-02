<template>
  <v-form @submit.prevent="createVideo">
    <v-card-title>Video Form</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-checkbox v-model="video.frontPageContent" label="Front Page?" />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="video.category"
            :items="categories"
            label="Category"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="tagName"
            append-icon="mdi-plus"
            @keydown.enter.prevent="addTag()"
            @click:append="addTag()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          Current Tags
          <v-card flat>
            <v-btn v-for="(tag, index) in video.tags" :key="index" text small>
              {{ tag }}
              <v-icon small @click="video.tags.splice(index, 1)">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="video.title" label="Title" required />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="video.proFirstName"
            label="First name"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="video.proLastName"
            label="Last name"
            required
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="video.videoURL" label="Youtube URL" required />
        </v-col>
      </v-row>

      <v-row>
        <v-textarea v-model="video.overview" label="Overview" required />
        <v-textarea v-model="video.story" label="Story" required />
      </v-row>
      <v-btn @click="createVideo">Submit Video</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    video: {
      title: '',
      proFirstName: '',
      proLastName: '',
      overview: '',
      story: '',
      tags: [],
      frontPageContent: false,
      videoURL: 'https://www.youtube.com/embed/Ft4ICCEKwMY',
      category: '',
      createdAt: '',
    },
    categories: ['How To', 'PVU Original', 'General', 'Top List'],
    tagName: '',
  }),
  methods: {
    async createVideo() {
      await this.getTime()
      const a = this.video
      a.type = 'video'
      a.id = null
      const response = await this.$axios.$post(
        'http://localhost:5000/create',
        a
      )
      console.log(response)
      await this.$nuxt.refresh()
    },

    getTime() {
      const d = new Date()
      const n = d.toLocaleDateString()
      this.video.createdAt = n
    },

    addTag() {
      const tags = this.video.tags
      const tagName = this.tagName

      tags.push(tagName)

      this.tagName = ''
    },

    // this removes any duplicate tags in the post which was rendering a warning
    removeDuplicates() {
      const tags = this.tags
      const tagSet = [...new Set(tags)]
      this.tags = tagSet
    },

    clearTags() {
      this.tags = ''
      this.finalTags = ''
    },
  },
}
</script>

<style></style>
