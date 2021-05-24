const fs = require('fs')
const path = require('path')

const gitRootDir = __dirname + '/../'
console.log('process.env.HUSKY_GIT_PARAMS', process.env.$1, process.env)
// 拿到git commit message 判断是否是chore(package.version)，是的话就执行 npm run initChangelog
if (process.env.HUSKY_GIT_PARAMS) {
  const messageFile = path.normalize(gitRootDir + '/' + process.env.HUSKY_GIT_PARAMS.split(' ')[0])
  let commitMessage = `\nproject commit:\n`
  commitMessage += fs.readFileSync(messageFile, { encoding: 'utf-8' })
  console.log('commitMessage', commitMessage)
}
