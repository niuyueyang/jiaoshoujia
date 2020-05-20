/*
* @desc 配置文件
* @private
* */
module.exports = {
    promptTypeList:[
        {
            type: 'list',
            message: '请选择拉取的模版类型:',
            name: 'type',
            choices:[
                {
                    name: '微信小程序',
                    value: {
                        url: 'https://github.com/niuyueyang/miscroXcx.git',
                        gitName: 'miscroXcx',
                        val:'微信小程序架构'
                    }
                },
                {
                    name: 'uni',
                    value: {
                        url: '',
                        gitName: '',
                        val:''
                    }
                },
                {
                    name: 'pc端后台模板',
                    value: {
                        url: '',
                        gitName: '',
                        val:''
                    }
                },
                {
                    name: '前端微服务（qiankun）vue',
                    value: {
                        url: '',
                        gitName: '',
                        val:''
                    }
                },
                {
                    name: '前端微服务（iframe）vue',
                    value: {
                        url: '',
                        gitName: '',
                        val:''
                    }
                },
                {
                    name: '前端微服务（single-spa）vue',
                    value: {
                        url: '',
                        gitName: '',
                        val:''
                    }
                }
            ]
        }
    ]
}
