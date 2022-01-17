module.exports ={
  // 站点配置
  lang: 'zh-CN',
  title: '学习记录',
  // description: '日常学习, 总结, 便于以后查阅',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // 主题和它的配置
  theme: 'reco',
  themeConfig:{
    lastUpdated: true,
      //导航栏
    nav: [
        { text: '首页', link: '/', icon: 'reco-home' }, 
        {
          text: "前端",
          items: [
            // { text: "HTML", link: "/docs/html/" },
            { text: "CSS", link: "/docs/css/" },
            { text: "JavaScript", link: "/docs/javascript/" }
          ],
          icon:'reco-blog'
        },
        { text: '时间线', link: '/timeline/', icon: 'reco-date' },
        { text: "关于", link: "/docs/about/", icon: 'reco-three' },
        { text: "Github", link: "https://www.github.com/tankboo" }
    ],
    sidebar:{
      // '/docs/markdown/':[
      //   ''
      // ],
      '/docs/css/':[
        ''
      ],
      "/docs/javascript/":[
        '',
        {
          title: "对象",
          path: "/docs/javascript/object/",
          children: []
        },
        "/docs/javascript/babel/"
        // {
        //   title: "babel",
        //   path: "/docs/javascript/babel/",
        //   children: []
        // }
      ]
    },

    type: 'blog',

    // 博客配置
    blogConfig:{
      // category: {
      //   location: 3,     // 在导航栏菜单中所占的位置，默认2
      //   text: '分类' // 默认文案 “分类”
      // },
      tag: {
        location: 4,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },

    // 自动形成侧边导航
    subSidebar: 'auto',

    logo: '/rocket.png',
    authorAvatar: '/avatar.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    // author: 'reco_luan',

     // 备案号
     record: '蜀ICP备20024139号',
     // 项目开始时间
     startYear: '2020',
  }
}