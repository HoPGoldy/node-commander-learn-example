#!/usr/bin/env node

const program = require('commander')

program
    .version('1.0.0')
    .description('这是一个命令行工具')

program
    .command('add')
    .description('添加')
    .action(cmd => {
        console.log('添加')
    })

program
    .command('config')
    .description('配置')
    .action(cmd => {
        console.log('配置')
    })

program.parse(process.argv)