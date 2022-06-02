<template>
  <v-form @submit.prevent="createPodcast">
    <v-card-title>Podcast Form</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-checkbox v-model="podcast.frontPageContent" label="Front Page?" />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="podcast.category"
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
            <v-btn v-for="(tag, index) in podcast.tags" :key="index" text small>
              {{ tag }}
              <v-icon small @click="podcast.tags.splice(index, 1)">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="podcast.title" label="Title" required />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="podcast.proFirstName"
            label="First name"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="podcast.proLastName"
            label="Last name"
            required
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="podcast.podcastFile"
            label="Image Name"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-textarea v-model="podcast.overview" label="Overview" required />
      </v-row>
      <v-btn @click="createPodcast">Submit Podcast</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    podcast: {
      title: '',
      proFirstName: '',
      proLastName: '',
      overview: '',
      tags: [],
      frontPageContent: false,
      podcastPhoto: '/delete.jpg',
      podcastFile: '/testSound.mp3',
      category: '',
      createdAt: '',
    },
    categories: ['How To', 'PVU Original', 'General', 'Top List'],
    tagName: '',
  }),
  methods: {
    async createPodcast() {
      await this.getTime()
      const a = this.podcast
      a.type = 'podcast'
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
      this.podcast.createdAt = n
    },

    addTag() {
      const tags = this.podcast.tags
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
