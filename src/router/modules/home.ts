const home: AuthRoute.Route = {
  name: 'home',
  path: '/home',
  component: 'self',
  meta: {
    title: '首页',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'mdi:monitor-dashboard',
    order: 1
  }
};

export default home;
