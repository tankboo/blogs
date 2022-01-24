const plugins = require('./config/pluginConfig')
const themeConfig = require('./config/themeConfig')
const headConfig = require('./config/headConfig')

module.exports ={
  // 站点配置
  title: '学习记录',
  description: '日常学习, 总结, 便于以后查阅',
  head: headConfig,
  //本地化
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  // 主题和它的配置
  theme: 'reco',
  //主题
  themeConfig,
  // 插件
  plugins,

  markdown:{
    lineNumbers:true // 代码显示行号
  }

}