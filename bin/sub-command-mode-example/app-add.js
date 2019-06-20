var program = require('commander')

program
    .option('-t, --test [测试]', '测试参数')
    .action(cmd => cmdAction(cmd))
    .parse(process.argv)

function cmdAction(cmd) {
    console.log('添加')
}