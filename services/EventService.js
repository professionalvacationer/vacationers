/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import axios from '@nuxtjs/axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: false,
  headers: {
    Accept: `application/json`,
    'Content-Type': `application/json`,
  },
})

export default {
  getArticles() {
    return apiClient.get('/articles')
  },
  getArticle(id) {
    return apiClient.get('/articles/' + id)
  },
}
