<template>
  <v-form @submit.prevent="createProject">
    <v-card-title>Project Form</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-checkbox v-model="project.frontPageContent" label="Front Page?" />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="project.category"
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
            <v-btn v-for="(tag, index) in project.tags" :key="index" text small>
              {{ tag }}
              <v-icon small @click="project.tags.splice(index, 1)">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="project.title" label="Title" required />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="project.proFirstName"
            label="First name"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="project.proLastName"
            label="Last name"
            required
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="project.projectPhoto"
            label="Image Name"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-textarea v-model="project.overview" label="Overview" required />
        <v-textarea v-model="project.story" label="Story" required />
      </v-row>
      <v-btn @click="createProject">Submit Project</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    project: {
      title: '',
      proFirstName: '',
      proLastName: '',
      overview: '',
      story: '',
      tags: [],
      frontPageContent: false,
      projectPhoto: '/delete.jpg',
      category: '',
      createdAt: '',
    },
    categories: ['How To', 'PVU Original', 'General', 'Top List'],
    tagName: '',
  }),
  methods: {
    async createProject() {
      await this.getTime()
      const a = this.project
      a.type = 'project'
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
      this.project.createdAt = n
    },

    addTag() {
      const tags = this.project.tags
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
