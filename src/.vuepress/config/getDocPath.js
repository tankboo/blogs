const fs = require('fs')
const path = require('path')

/**
  * 获取目录下的所有文件的相对路径
  * 解决路由名称枚举问题
*/
function getDocPath(title, relativePath, collapsable =true) {
    const absolutePath = path.join(__dirname, '../..' + relativePath)
    const files = fs.readdirSync(absolutePath)
    const children = []
    // 排除检查的文件
    var excludes = ['.DS_Store']
    let arr = files.sort(function(a, b) {
      return a.split('.')[0] - b.split('.')[0];
    });
    arr.forEach(function (item) {
      if (excludes.indexOf(item) < 0) {
        let stat = fs.lstatSync(absolutePath + '/' + item)
        if (item == 'README.md') {
          children.unshift(relativePath)
        } else if (!stat.isDirectory()) {
          let res = item.replace('.md', '');
          children.push(relativePath + res)
        } else {
          let res = item.replace('.md', '');
          getDocPath(relativePath + res)
        }
      }
    })
    let frame = {
      title,
      sidebarDepth: 2,
      collapsable,
      children
    }
    return frame
}

module.exports = getDocPath