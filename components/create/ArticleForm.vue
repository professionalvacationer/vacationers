<template>
  <v-form @submit.prevent="createArticle">
    <v-card-title>Article Form</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-checkbox v-model="article.frontPageContent" label="Front Page?" />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="article.category"
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
            <v-btn v-for="(tag, index) in article.tags" :key="index" text small>
              {{ tag }}
              <v-icon small @click="article.tags.splice(index, 1)">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="article.title" label="Title" required />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="article.proFirstName"
            label="First name"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="article.proLastName"
            label="Last name"
            required
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="article.articlePhoto"
            label="Image Name"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-textarea v-model="article.overview" label="Overview" required />
        <v-textarea v-model="article.story" label="Story" required />
      </v-row>
      <v-btn @click="createArticle">Submit Article</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    article: {
      title: '',
      proFirstName: '',
      proLastName: '',
      overview: '',
      story: '',
      tags: [],
      frontPageContent: false,
      articlePhoto: '/delete.jpg',
      category: '',
      createdAt: '',
    },
    categories: ['How To', 'PVU Original', 'General', 'Top List'],
    tagName: '',
  }),
  methods: {
    async createArticle() {
      await this.getTime()
      const a = this.article
      a.type = 'article'
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
      this.article.createdAt = n
    },

    addTag() {
      const tags = this.article.tags
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
