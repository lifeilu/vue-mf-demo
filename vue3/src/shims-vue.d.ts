/**
 * common file type define
 */

 declare module '*.vue' {
  import type { DefineComponent } from 'vue3';

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.svg' {
  const content: any;
  export default content;
}