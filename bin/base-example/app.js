#!/usr/bin/env node
const program = require('commander')

program
    .version('1.0.0')
    .description('这是一个命令行工具')
    .option('-t, --test [测试参数]', '输入测试参数')

program
    .command('add')
    .description('添加')
    .action(cmd => {
        console.log(cmd)
    })

program
    .command('config')
    .description('配置')
    .action(cmd => {
        console.log('配置')
    })

program.parse(process.argv)