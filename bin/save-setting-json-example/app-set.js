const program = require('commander')
let setting = require('./setting')

program
    .option('-k, --key <设置的键>', '想要储存的设置的键')
    .option('-v, --value <设置的值>', '想要储存的设置的值')
    .action((cmd) => {
        if (!cmd.key || !cmd.value) {
            return console.log('请输入必要参数')
        }

        let settingData = setting.load()
        settingData[cmd.key] = cmd.value
        setting.save(settingData)
        console.log('保存完成')
    })
    .parse(process.argv)
