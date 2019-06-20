#!/usr/bin/env node
const program = require('commander')
require('./setting').init()

program
    .version('1.0.0')
    .description('这是一个命令行工具')
    .command('get', '读取设置')
    .command('set', '添加设置')
    .parse(process.argv)
