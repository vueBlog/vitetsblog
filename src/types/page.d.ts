import { asideItemModel, asideAuthorItemModel } from './aside'

export interface pageAsideModel {
  loading: boolean
  list: asideItemModel[]
}