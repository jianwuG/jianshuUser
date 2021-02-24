import Mock, {Random} from 'mockjs'


Mock.mock('/api/getSearchList', 'get', {
    status: 200,
    message: '成功',
    'data|28': [
        {
            id: '@increment(1)',
            name: '@cword(2,6)'
        }
    ]
});
Random.extend({
    projectName: function () {
        let projectInfo = ['web前端之路', 'java之路', '学习之路', '娱乐之路', '永远的神']
        return this.pick(projectInfo)
    }
});
Random.projectName();

Mock.mock('/api/getBloggerInfo', 'get', {
    status: 200,
    message: '获取博主信息成功',
    data: {
        id: '@increment(1)',
        name: '@cname(3,10)',
        url: "@dataImage('100x100')",
        gender: "@natural(0,1)",
        numInfo: [
            {
                num: '@natural(1,20)',
                text: '关注',
                canClick: true,
            },
            {
                num: '@natural(20,20000)',
                text: '粉丝',
                canClick: true,
            },
            {
                num: '@natural(1,50)',
                text: '文章',
                canClick: true,
            },
            {
                num: '@natural(1000,5000000)',
                text: '字数',
                canClick: false,
            },
            {
                num: '@natural(1000,5000000)',
                text: '收藏喜欢',
                canClick: false,
            },
            {
                num: '@natural(1000,5000000)',
                text: '总资产',
                canClick: false,
            },
        ],
        'createProject|3-10': [{
            id: '@increment(1)',
            name: '@projectName',
            icon: "@dataImage('100x100')"
        }],
        'managementProject|1-10': [{
            id: '@increment(1)',
            name: '@projectName',
            icon: "@dataImage('100x100')"
        }],
        'corpus|1-10': [{
            id: '@increment(1)',
            name: '@ctitle(3,8)',
        }]

    }
});


Mock.mock('/api/login','post',{
    status:200,
    message:'登录成功'

})
