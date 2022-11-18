export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
      name: 'home',
      path: '/home',
      component: 'self',
      meta: {
        title: '首页',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        requiresAuth: true,
        singleLayout: 'basic'
      }
    },
    {
      name: 'document',
      path: '/document',
      component: 'basic',
      children: [
        {
          name: 'document_vue',
          path: '/document/vue',
          component: 'self',
          meta: {
            title: 'vue文档',
            requiresAuth: true,
            icon: 'logos:vue'
          }
        },
        {
          name: 'document_project-link',
          path: '/document/project-link',
          meta: {
            title: '项目文档(外链)',
            requiresAuth: true,
            localIcon: 'logo',
            href: 'https://docs.soybean.pro/'
          }
        }
      ],
      meta: {
        title: '文档',
        icon: 'mdi:file-document-multiple-outline',
        order: 2
      }
    },
    {
      name: 'multi-menu',
      path: '/multi-menu',
      component: 'basic',
      children: [
        {
          name: 'multi-menu_first',
          path: '/multi-menu/first',
          component: 'multi',
          children: [
            {
              name: 'multi-menu_first_second',
              path: '/multi-menu/first/second',
              component: 'self',
              meta: {
                title: '二级菜单',
                requiresAuth: true,
                icon: 'mdi:menu'
              }
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    requiresAuth: true,
                    icon: 'mdi:menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                icon: 'mdi:menu'
              }
            }
          ],
          meta: {
            title: '一级菜单',
            icon: 'mdi:menu'
          }
        }
      ],
      meta: {
        title: '多级菜单',
        icon: 'carbon:menu',
        order: 3
      }
    },
    {
      name: 'active-management',
      path: '/active-management',
      component: 'basic',
      children: [
        {
          name: 'active-management_template',
          path: '/active-management/template',
          component: 'self',
          meta: {
            title: '活动模板',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'active-management_list',
          path: '/active-management/list',
          component: 'self',
          meta: {
            title: '活动列表',
            requiresAuth: true,
            icon: 'material-symbols:route'
          }
        }
      ],
      meta: {
        title: '活动管理',
        icon: 'carbon:cloud-service-management',
        order: 4
      }
    }
  ],
  admin: [
    {
      name: 'home',
      path: '/home',
      component: 'self',
      meta: {
        title: '首页',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        requiresAuth: true,
        singleLayout: 'basic'
      }
    },
    {
      name: 'management',
      path: '/management',
      component: 'basic',
      children: [
        {
          name: 'management_auth',
          path: '/management/auth',
          component: 'self',
          meta: {
            title: '权限管理',
            requiresAuth: true,
            icon: 'ic:baseline-security'
          }
        },
        {
          name: 'management_role',
          path: '/management/role',
          component: 'self',
          meta: {
            title: '角色管理',
            requiresAuth: true,
            icon: 'carbon:user-role'
          }
        },
        {
          name: 'management_user',
          path: '/management/user',
          component: 'self',
          meta: {
            title: '用户管理',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'management_route',
          path: '/management/route',
          component: 'self',
          meta: {
            title: '路由管理',
            requiresAuth: true,
            icon: 'material-symbols:route'
          }
        }
      ],
      meta: {
        title: '系统管理',
        icon: 'carbon:cloud-service-management',
        order: 9
      }
    }
  ],
  user: [
    {
      name: 'home',
      path: '/home',
      component: 'self',
      meta: {
        title: '首页',
        icon: 'mdi:monitor-dashboard',
        order: 1,
        requiresAuth: true,
        singleLayout: 'basic'
      }
    }
  ]
};
