/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_host: string;
  readonly VITE_detailPath: string;
  readonly VITE_publicPath: string;
  readonly VITE_pathname: string;
  readonly VITE_listLimit: string;
  readonly VITE_title: string;
  readonly VITE_keywords: string;
  readonly VITE_description: string;
  readonly VITE_friendLink: string;
  readonly VITE_author: string;
  readonly VITE_record_link: string;
  readonly VITE_qiniu_domain: string;
  readonly VITE_img_domain: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
