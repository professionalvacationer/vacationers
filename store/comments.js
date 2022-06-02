export const state = () => ({
  comments: [],
  currentComment: [],
})

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  SET_CURRENT_COMMENT(state, comment) {
    state.currentComment = comment
  },
}
export const actions = {
  async getComments({ commit }) {
    const query = { type: 'comment' }
    const comments = await this.$axios.$post('http://localhost:5000/find', {
      query,
    })
    try {
      for (const e of comments) {
        this.comments.push(e)
      }
    } catch (error) {
      this.comments = []
    }
    commit('SET_COMMENTS', comments)
  },

  getCurrentComment({ commit }, comment) {
    commit('SET_CURRENT_COMMENT', comment)
  },
}

export const getters = {
  comment: (state) => state.currentComment,
  comments: (state) => state.comments,
}
