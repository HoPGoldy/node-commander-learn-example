const program = require('commander')
let setting = require('./setting')

program
    .action(() => {
        console.log(setting.load())
    })
    .parse(process.argv)
