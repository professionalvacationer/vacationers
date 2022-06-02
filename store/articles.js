export const state = () => ({
  articles: [],
  currentArticle: [],
})
export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_CURRENT_ARTICLE(state, article) {
    state.currentArticle = article
  },
}
export const actions = {
  async getArticles({ commit }) {
    const query = { type: 'article' }
    const articles = await this.$axios.$post('http://localhost:5000/find', {
      query,
    })
    try {
      for (const e of articles) {
        this.articles.push(e)
      }
    } catch (error) {
      this.articles = []
    }
    commit('SET_ARTICLES', articles)
  },

  getCurrentArticle({ commit }, article) {
    commit('SET_CURRENT_ARTICLE', article)
  },
}

export const getters = {
  article: (state) => state.currentArticle,
}
