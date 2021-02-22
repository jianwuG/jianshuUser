import Mock from 'mockjs'


Mock.mock('/api/getSearchList','get',{
    status:200,
    message:'成功',
    'data|28':[
        {
            id:'@increment(1)',
            name:'@cword(2,6)'
        }
    ]
});
