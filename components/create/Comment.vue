<template>
  <v-container>
    <v-textarea v-model="comment.description" rows="1" placeholder="Comments" />
    <v-btn small color="accent" @click.prevent="createComment">
      Add Comment
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {},
    },
    video: {
      type: Object,
      default() {},
    },
    podcast: {
      type: Object,
      default() {},
    },
    project: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      comment: {
        description: '',
        createdAt: '',
        commentedOn: '',
      },
    }
  },

  methods: {
    async createComment() {
      try {
        await this.getTime()
        await this.getId()
        const a = this.comment
        a.type = 'comment'
        const response = await this.$axios.$post(
          'http://localhost:5000/create',
          a
        )
        console.log(response)

        await this.$nuxt.refresh()
      } catch (error) {
        console.log(error, 'this is error')
      }
      this.comment = ''
    },

    getTime() {
      const d = new Date()
      const n = d.toLocaleDateString()
      this.comment.createdAt = n
    },
    getId() {
      if (this.article.length !== 0) {
        this.comment.commentedOn = this.article._id
      } else if (this.video.length !== 0) {
        this.comment.commentedOn = this.video._id
      } else if (this.project.length !== 0) {
        this.comment.commentedOn = this.project._id
      } else {
        this.comment.commentedOn = this.podcast._id
      }
      console.log(this.article._id)
    },
  },
}
</script>

<style></style>
