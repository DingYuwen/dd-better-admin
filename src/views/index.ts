import type { RouteComponent } from 'vue-router';

export const views: Record<RouterPage.LastDegreeRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  'active-management_list': () => import('./active-management/list/index.vue'),
  'active-management_template': () => import('./active-management/template/index.vue'),
  'document_project-link': () => import('./document/project-link/index.vue'),
  document_vue: () => import('./document/vue/index.vue'),
  home: () => import('./home/index.vue'),
  management_auth: () => import('./management/auth/index.vue'),
  management_role: () => import('./management/role/index.vue'),
  management_route: () => import('./management/route/index.vue'),
  management_user: () => import('./management/user/index.vue'),
  'multi-menu_first_second-new_third': () => import('./multi-menu/first/second-new/third/index.vue'),
  'multi-menu_first_second': () => import('./multi-menu/first/second/index.vue')
};
