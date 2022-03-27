import axios from './http'
import { searchReqModel, searchItemModel } from './../types'

interface apiSearchResModel {
  data: {
    searchList: searchItemModel[]
  }
  isok: boolean
  msg: string
}

export function apiSearch(paramsData: searchReqModel): Promise<apiSearchResModel> {
  return axios.post('/search', paramsData)
}
