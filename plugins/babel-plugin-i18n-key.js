const fs = require('fs');
const { resolve } = require('path');

const keyMap = {};

process.on('exit', () => {
  console.log('seagull plugin exit')
  fs.writeFileSync(resolve(__dirname, './seagullKeyMap.json'), JSON.stringify(keyMap, null, 2), {encoding: 'utf8'})
})

module.exports = function (babel) {
  const { types: t } = babel;
  
  return {
    name: "i18n-key", // not required
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name === 't') {
        	const seagullKey = path.node.arguments[0].value
          const defaultValue = path.node.arguments[1] ? path.node.arguments[1].value : ''
          if (!keyMap[seagullKey]) {
            keyMap[seagullKey] = defaultValue
          }
        }
      }
    }
  };
}
