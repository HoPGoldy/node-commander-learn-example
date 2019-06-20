#!/usr/bin/env node
const program = require('commander')

program
    .version('1.0.0')
    .description('这是一个命令行工具')
    .option('-t, --test [测试参数]', '输入测试参数')
    .command('add', '添加')
    .parse(process.argv)