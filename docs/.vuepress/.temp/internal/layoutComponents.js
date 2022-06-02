import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/hoantvh/micro-frontend/component-library/hoangtvh-vue3-component-library/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/hoantvh/micro-frontend/component-library/hoangtvh-vue3-component-library/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
