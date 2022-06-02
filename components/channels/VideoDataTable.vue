<template>
  <div>
    <v-row class="mx-1">
      <v-select v-model="search" :items="categories" label="Category" />

      <v-text-field
        v-model="search"
        label="Search Videos"
        single-line
        append-icon="mdi-magnify"
      />
    </v-row>
    <v-data-table
      v-model="selectedItems"
      :items="videos"
      :headers="headers"
      :items-per-page="itemsPerPage"
      :search="search"
      :custom-filter="filter"
      show-expand
      multi-sort
      class="mb-3"
      @click:row="setVideo"
    >
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row class="d-flex justify-center mt-1">
            <v-card id="card" flat class="py-2 my-2">
              <v-container class="py-0">
                <v-row>
                  <iframe
                    width="300"
                    height="150"
                    src="https://www.youtube.com/embed/Ft4ICCEKwMY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <!-- <iframe
                    slot="media"
                    width="300"
                    height="150"
                    :src="item.videoURL"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> -->

                  <v-col cols="12">
                    <v-card flat class="pt-2">
                      <v-row>
                        <v-card-title
                          id="title"
                          slot="title"
                          class="text-h6 py-0"
                        >
                          {{ item.title }}
                        </v-card-title>
                      </v-row>

                      <v-row>
                        <v-card-subtitle slot="author" class="py-0 black--text">
                          {{ item.proFirstName }}
                          {{ item.proLastName }}
                        </v-card-subtitle>
                      </v-row>

                      <v-row class="py-0">
                        <v-card-subtitle slot="createdAt" class="py-0">
                          {{ item.createdAt }}
                        </v-card-subtitle>
                      </v-row>

                      <v-row>
                        <v-card
                          slot="tags"
                          class="pb-0"
                          flat
                          color="transparent"
                        >
                          <TagReady :tags="item.tags" />
                        </v-card>
                      </v-row>

                      <v-row class="py-0 mb-2">
                        <v-card-text class="py-0 pl-3">
                          {{ item.overview }}
                        </v-card-text>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    selectedItems: [],
    singleSelect: false,
    itemsPerPage: 10,
    search: '',
    categories: ['PVU Original', 'How To', 'General', 'Top List'],
  }),

  computed: {
    ...mapState({
      videos: (state) => state.videos.videos,
    }),

    headers() {
      return [
        { text: 'Title', value: 'title' },
        { text: 'Date', value: 'createdAt' },
        { text: 'Author', value: 'proLastName' },
      ]
    },
  },
  methods: {
    setVideo(video) {
      this.$store.dispatch('videos/getCurrentVideo', video)
      this.$emit('is-video', 1)
    },
    filter(value, search, item) {
      const inFirstName = RegExp(search, 'i').test(item.proFirstName)
      const inLastName = RegExp(search, 'i').test(item.proLastName)
      const inTags = RegExp(search, 'i').test(item.tags)
      const inTitle = RegExp(search, 'i').test(item.title)
      const inCategory = RegExp(search, 'i').test(item.category)
      return inFirstName || inLastName || inTags || inTitle || inCategory
    },
  },
}
</script>

<style scoped>
#title {
  word-break: keep-all !important; /*this stops the word breaking*/
  color: black;
}
::v-deep tbody tr {
  cursor: pointer;
}
/* ::v-deep tbody tr td.non-clickable {
  cursor: auto;
} */
</style>
