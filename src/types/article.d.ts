export interface articleReqModel {
  columnId?: string
  dateTime?: string
  justOriginal: boolean
  limit: number
  order?: number
  page: number
}

export interface articleItemModel {
  articleAuthorId: number
  articleCreateTime: string
  articleId: number
  articleNature: number
  articleStart: number
  articleSubTitle: string
  articleTitle: string
  articleView: number
}

export interface articleListModel {
  list: articleItemModel[]
  total: number
}

export interface columnDetailReqModel {
  id: number | string
}

export interface columnDetailModel {
  columnContent?: string
  columnId: number
  columnNumber: number
  columnTitle?: string
  time: string
}