export interface searchModel {
  queryString: string;
}

export interface searchItemModel {
  articleId: number;
  articleTitle: string;
  type: number;
  h0?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  h7?: string;
  [propName: string]: any;
}