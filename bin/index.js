#!/usr/bin/env node

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const chalk = require('chalk');
const commander = require('commander');
const checkDire = require('./utils/checkDire.js');
const {exec} = require('child_process');
const { version } = require('../package.json');
const { promptTypeList } = require('./config');
const process = require('process')

// version版本号
//设置当前命令的版本
//第一个参数是版本，第二个参数可选，默认设置版本使用的是-V,可以使用第二个参数修改
commander.version(version,'-v --version')
    .command('init <projectName>')
    .alias('i')
    .description("输入项目名称，初始化项目模版")
    .action(async(projectName, cmd) => {
        await checkDire(path.join(process.cmd(), projectName), projectName); // 检测创建项目文件夹是否存在
        inquirer.prompt(promptTypeList).then(result=> {
            const {url, gitName, val} = result.type;
            console.log("您选择的模版类型信息如下：" + val);
            console.log('项目初始化拷贝获取中...');
            if(!url){
                console.log(chalk.red(`${val} 该类型暂不支持...`));
                process.exit(1);
            }
            exec('git clone '+url, function (error, stdout, stderr) {
                if(error !== null){
                    console.log(chalk.red(`${val} clone fail，${error}`));
                    return;
                }
                fs.rename(gitName, projectName, function (err) {
                    if(err){
                        exec('rm -rf '+gitName, function (err, out) {});
                        console.log(chalk.red(`The ${projectName} project template already exist`));
                    }
                    else {
                        console.log(chalk.green(`The ${projectName} project template successfully create(项目模版创建成功)`));
                    }
                })
            })
        })
    })


commander.parse(process.argv);
