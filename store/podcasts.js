export const state = () => ({
  podcasts: [],
  currentPodcast: [],
})
export const mutations = {
  SET_PODCASTS(state, podcasts) {
    state.podcasts = podcasts
  },
  SET_CURRENT_PODCAST(state, podcast) {
    state.currentPodcast = podcast
  },
}
export const actions = {
  async getPodcasts({ commit }) {
    const query = { type: 'podcast' }
    const podcasts = await this.$axios.$post('http://localhost:5000/find', {
      query,
    })
    try {
      for (const e of podcasts) {
        this.podcasts.push(e)
      }
    } catch (error) {
      this.podcasts = []
    }
    commit('SET_PODCASTS', podcasts)
  },

  getCurrentPodcast({ commit }, podcast) {
    commit('SET_CURRENT_PODCAST', podcast)
  },
}

export const getters = {
  podcast: (state) => state.currentPodcast,
}
