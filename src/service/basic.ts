import axios from './index.js'
import { searchModel, searchItemModel } from './../types'

interface apiSearchResModel {
  data: {
    searchList: searchItemModel[]
  }
  isok: boolean
  msg: string
}

export function apiSearch(paramsData: searchModel): Promise<apiSearchResModel> {
  return axios.post('/search', paramsData)
}
