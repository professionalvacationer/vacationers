<template>
  <v-list three-line>
    <v-list-item-group v-model="selected" active-class="pink--text" multiple>
      <template v-for="(comment, index) in comments">
        <v-list-item v-if="podcast._id === comment.commentedOn" :key="comment">
          <template #default="{ active }">
            <v-list-item-content>
              <v-list-item-title
                v-text="comment.description"
              ></v-list-item-title>

              <v-list-item-subtitle
                class="text--primary"
                v-text="comment.createdAt"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
                v-text="comment.createdAt"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="comment.action"
              ></v-list-item-action-text>

              <v-icon v-if="!active" color="grey lighten-1">
                mdi-star-outline
              </v-icon>

              <v-icon v-else color="yellow darken-3">mdi-star</v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index < comments.length - 1" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    podcast: {
      type: Object,
      default() {},
    },
  },
  data: () => ({
    selected: [],
  }),
  computed: {
    ...mapGetters({
      comments: 'comments/comments',
    }),
  },
}
</script>

<style></style>
