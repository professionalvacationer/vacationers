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
    video: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      comment: {
        description: '',
        createdAt: '',
        commentedOn: this.video._id,
      },
    }
  },

  methods: {
    async createComment() {
      try {
        await this.getTime()
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
  },
}
</script>

<style></style>
