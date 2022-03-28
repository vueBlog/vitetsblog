import { asideItemModel, asideAuthorItemModel } from './aside'

export interface pageAsideModel {
  loading: boolean
  list: asideItemModel[]
}
export interface pageAsideAuthorModel {
  loading: boolean
  list: asideAuthorItemModel[]
}