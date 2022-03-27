import axios from './http'
import { asideItemModel, asideAuthorItemModel } from './../types'

interface apigetAsideResModel {
  data: {
    list: asideItemModel[]
  }
  isok: boolean
  msg: string
}

export function apigetAside(): Promise<apigetAsideResModel> {
  return axios.get('/aside')
}

interface apigetAsideAuthorResModel {
  data: asideAuthorItemModel[]
  isok: boolean
  msg: string
}

export function apigetAsideAuthor(): Promise<apigetAsideAuthorResModel> {
  return axios.get('/aside/author')
}
