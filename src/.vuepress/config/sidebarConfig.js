const getDocPath = require('./getDocPath')

module.exports={
  // '/docs/markdown/':[
  //   ''
  // ],
  '/docs/css/':[
    getDocPath('css', '/docs/css/')
  ],
  "/docs/javascript/":[
    getDocPath('对象', '/docs/javascript/object/'),
    getDocPath('babel', '/docs/javascript/babel/'),
    getDocPath('V8引擎', '/docs/javascript/V8/'),
    getDocPath('你不知道的JavaScript', '/docs/javascript/dykjs/')
  ],
}