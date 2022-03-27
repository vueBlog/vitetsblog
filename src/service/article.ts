import axios from './http'
import { articleReqModel, articleListModel, columnDetailReqModel, columnDetailModel } from './../types'

interface apiArticleListResModel {
  data: articleListModel
  isok: boolean
  msg: string
}
export const apiArticleList = (paramsData: articleReqModel): Promise<apiArticleListResModel> => {
  return axios.get('/articleList', {
    params: paramsData
  })
}

interface apiColumnDetailResModel {
  data: columnDetailModel
  isok: boolean
  msg: string
}
export const apiColumnDetail = (paramsData: columnDetailReqModel): Promise<apiColumnDetailResModel> => {
  return axios.get('/column/detail', {
    params: paramsData
  })
}
