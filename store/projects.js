export const state = () => ({
  projects: [],
  currentProject: [],
})
export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_CURRENT_PROJECT(state, project) {
    state.currentProject = project
  },
}
export const actions = {
  async getProjects({ commit }) {
    const query = { type: 'project' }
    const projects = await this.$axios.$post('http://localhost:5000/find', {
      query,
    })
    try {
      for (const e of projects) {
        this.projects.push(e)
      }
    } catch (error) {
      this.projects = []
    }
    commit('SET_PROJECTS', projects)
  },

  getCurrentProject({ commit }, project) {
    commit('SET_CURRENT_PROJECT', project)
  },
}

export const getters = {
  project: (state) => state.currentProject,
}
