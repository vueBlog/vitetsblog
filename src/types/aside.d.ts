interface asideItemInfoItemModel {
  id: number
  num: number
  title: string
}

export interface asideItemModel {
  info: asideItemInfoItemModel[]
  title: string
  type: number
}

export interface asideAuthorItemModel {
  asideArticle?: asideItemModel
  authorEmail: string
  authorHeadimg: string
  authorId: number
  authorIntroduce: string
  authorName: string
  natureOne?: number
  natureTwo?: number
  natureZero?: number
  stars?: number
  views?: number
}