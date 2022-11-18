const activeManagement: AuthRoute.Route = {
  name: 'active-management',
  path: '/active-management',
  component: 'basic',
  children: [
    {
      name: 'active-management_auth',
      path: '/active-management/auth',
      component: 'self',
      meta: {
        title: '权限管理',
        requiresAuth: true,
        icon: 'ic:baseline-security'
      }
    },
    {
      name: 'active-management_role',
      path: '/active-management/role',
      component: 'self',
      meta: {
        title: '角色管理',
        requiresAuth: true,
        icon: 'carbon:user-role'
      }
    },
    {
      name: 'active-management_user',
      path: '/active-management/user',
      component: 'self',
      meta: {
        title: '用户管理',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts'
      }
    },
    {
      name: 'active-management_route',
      path: '/active-management/route',
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
    order: 4
  }
};

export default activeManagement;
