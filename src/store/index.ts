import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import asideStore from "./asideStore";

export interface State {
  logoText: string,
  logoDescription: string
}

export const key: InjectionKey<Store<State>> = Symbol()

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

export function useStore() {
  return baseUseStore(key)
}
