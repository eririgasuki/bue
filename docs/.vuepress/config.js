module.exports = {
  base: '/bue/',
  title: 'Bue UI',
  description: '基于 Vue 仿 Element 思路的 UI 框架',
  themeConfig: {
    sidebar: [{
        title: '入门',
        collapsable: false,
        children: ['/install/',
          '/get-started/'
        ]
      },

      {
        title: '组件',
        collapsable: false,
        children: ['/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast'
        ]
      }
    ]
  }
}