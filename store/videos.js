export const state = () => ({
  videos: [],
  currentVideo: [],
})
export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos
  },
  SET_CURRENT_VIDEO(state, video) {
    state.currentVideo = video
  },
}
export const actions = {
  async getVideos({ commit }) {
    const query = { type: 'video' }
    const videos = await this.$axios.$post('http://localhost:5000/find', {
      query,
    })
    try {
      for (const e of videos) {
        this.videos.push(e)
      }
    } catch (error) {
      this.videos = []
    }
    commit('SET_VIDEOS', videos)
  },

  getCurrentVideo({ commit }, video) {
    commit('SET_CURRENT_VIDEO', video)
  },
}

export const getters = {
  video: (state) => state.currentVideo,
}
