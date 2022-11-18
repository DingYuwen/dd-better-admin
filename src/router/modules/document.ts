const document: AuthRoute.Route = {
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
};

export default document;
