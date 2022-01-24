module.exports =[
  ['link', { rel: 'icon', href: './favicon.ico' }],
  // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

  // 引入鼠标点击脚本
  ['script', {
    'language': 'javascript',
    'type': 'text/javascript',
    'src': '/js/MouseClickEffect.js'
  }]
]