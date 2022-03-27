import axios from './index.js'
import { asideItemModel, asideAuthorItemModel } from './../types'

interface apigetAsideResModel {
  data: {
    list: asideItemModel[]
  }
  isok: boolean
  msg: string
}

export function apigetAside(paramsData = {}): Promise<apigetAsideResModel> {
  return axios.get('/aside', {
    params: paramsData
  })
}

interface apigetAsideAuthorResModel {
  data: asideAuthorItemModel[]
  isok: boolean
  msg: string
}

export function apigetAsideAuthor(paramsData = {}): Promise<apigetAsideAuthorResModel> {
  return axios.get('/aside/author', {
    params: paramsData
  })
}
