export default async function ({ store, from }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      await store.dispatch('articles/getArticles')
      await store.dispatch('videos/getVideos')
      await store.dispatch('podcasts/getPodcasts')
      await store.dispatch('projects/getProjects')
      await store.dispatch('comments/getComments')
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
