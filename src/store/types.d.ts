import { asideItemModel, asideAuthorItemModel } from './../types'
export interface stateModel {
  logoText: string,
  logoDescription: string
}

export interface asideStateModel {
  aside: asideItemModel[]
  asideAuthor: asideAuthorItemModel[]
}

export interface allStateModel extends stateModel {
  asideStore: asideStateModel
}