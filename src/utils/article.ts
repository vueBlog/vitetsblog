import { RouteLocationNormalizedLoaded } from 'vue-router'
import { Store } from 'vuex'
import { allStateModel } from './../store/types'
import { apiArticleList } from './../service'
import { articleItemModel } from './../types'

export default async function getArticleEvent(route: RouteLocationNormalizedLoaded, store: Store<allStateModel>) {
  const page = parseInt(route.query.page as string) || 1
  const justOriginal = route.query.original
    ? route.query.original === 'true'
    : false
  const order = parseInt(route.query.order as string) || 0
  const dateTime = route.query.dateTime as string
  const author = route.query.author || 'admin'
  const columnId = route.query.columnId as string
  const limit = import.meta.env.VITE_listLimit
    ? parseInt(import.meta.env.VITE_listLimit as string)
    : 10
  let loading = false
  let articleList: articleItemModel[] = []
  let total = 0

  interface queryModel {
    limit: number
    page: number
    justOriginal: boolean
    order?: number
    dateTime?: string
    columnId?: string,
    author?: any
  }
  let query: queryModel = {
    limit,
    page,
    justOriginal,
    order,
    dateTime,
    columnId
  }
  if (route.name === 'about') {
    query.author = author
  }
  loading = true
  let result = await apiArticleList(query)
  loading = false
  if (result.isok) {
    articleList = result.data.list
    total = result.data.total
  }
  return {
    limit,
    page,
    justOriginal,
    order,
    dateTime,
    columnId,
    loading,
    articleList,
    total
  }
}
