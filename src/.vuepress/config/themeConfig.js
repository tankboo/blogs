const navConfig = require('./navConfig')
const sidebarConfig = require('./sidebarConfig')

module.exports={
    //导航栏
  nav: navConfig,

  sidebar:sidebarConfig,

  type: 'blog',
  // 启用页面滚动效果
  // smoothScroll: true,
  // 博客配置
  blogConfig:{
    // category: {
    //   location: 3,     // 在导航栏菜单中所占的位置，默认2
    //   text: '分类' // 默认文案 “分类”
    // },
    tag: {
      location: 4,     // 在导航栏菜单中所占的位置，默认3
      // text: '标签'      // 默认文案 “标签”
    }
  },
  logo: '/images/rocket.png',
  authorAvatar: '/images/avatar.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  subSidebar: 'auto',
  //侧边栏深度
  sidebarDepth: 4,
  // 最后更新时间
  lastUpdated: 'Last Updated',
  // 作者
  // author: 'leo_tan',

   // 备案号
   record: '蜀ICP备20024139号',
   // 项目开始时间
   startYear: '2020',
}