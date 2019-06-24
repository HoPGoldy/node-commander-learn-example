const fs = require('fs')
const path = require('path')

// 设置json保存的位置
const settingFile = path.join(__dirname, 'setting.json')
// 设置的初始模板
const settingTempalte = {
    default: 'default value'
}

// 初始化项目
function init() {
    try {
        fs.statSync(settingFile)
    }
    catch (e) {
        console.log('设置文件不存在, 已新建')
        save(settingTempalte)
    }
}
// 读取配置项
function load() {
    return JSON.parse(fs.readFileSync(settingFile, 'utf8'))
}
// 覆写配置项
function save(data) {
    fs.writeFileSync(settingFile, JSON.stringify(data, null, 4))
}

module.exports = {
    init, 
    load, 
    save
}
