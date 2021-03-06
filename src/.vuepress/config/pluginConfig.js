module.exports=[
  ["@vuepress/nprogress"],
  ["@vuepress-reco/vuepress-plugin-kan-ban-niang",{
    theme:['whiteCat'],
    clean: true,
    modelStyle:{
      right: 0,
      bottom: '-20px',
      opacity: '0.9'
    }
  }],
  ['@vuepress/pwa',{
    serviceWorker: false,
    updatePopup: {
      message: "发现新内容可用!",
      buttonText: "刷新"
    }
  }],
  ['dynamic-title',{
    showIcon: "/favicon.ico",
    showText: "(/≧▽≦/)咦！又好了！",
    hideIcon: "/failure.ico",
    hideText: "(●—●)喔哟，崩溃啦！",
    recoverTime: 20000
  }],
  // ['cursor-effects'],
  // ['ribbon'],
  // ['go-top']
]