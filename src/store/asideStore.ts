import { Module, GetterTree } from 'vuex'
import { apigetAside, apigetAsideAuthor } from './../service/aside'
import { stateModel, asideStateModel } from './types'
import { asideItemModel, asideAuthorItemModel } from './../types'

export default {
  namespaced: true,
  state: {
    aside: [],
    asideAuthor: []
  },
  mutations: {
    setAside(state: asideStateModel, value: asideItemModel[]) {
      state.aside = value
    },
    setAsideAuthor(state: asideStateModel, value: asideAuthorItemModel[]) {
      state.asideAuthor = value
    }
  },
  actions: {
    async apigetAsideMethod({ commit }) {
      let result = await apigetAside()
      if (result.isok) {
        commit('setAside', result.data.list)
      }
    },
    async apigetAsideAuthorMethod({ commit }) {
      let result = await apigetAsideAuthor()
      if (result.isok) {
        commit('setAsideAuthor', result.data)
      }
    }
  }
} as Module<asideStateModel, stateModel>
