import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import asideStore from './asideStore'
import { stateModel, allStateModel } from './types'

export const storeKey: InjectionKey<Store<stateModel>> = Symbol()

export const store = createStore({
  state() {
    return {
      logoText: import.meta.env.VITE_title || "",
      logoDescription: import.meta.env.VITE_description || "",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    asideStore,
  },
});

export function useStore<T = allStateModel>() {
  return baseUseStore<T>(storeKey)
}
