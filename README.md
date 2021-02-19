## jianshu User Demo


####多环境打包
* npm run eject弹出配置，这个过程是不可逆的，不推荐
* 推荐使用第三方工具进行修改
    * 推荐react-app-rewired。它的作用是用来帮助你重写react脚手架配置
    * react-app-rewired需要搭配customize-cra使用
    * customize-cra的作用是帮助你自定义react脚手架配置
    
* 基本使用
  * 安装:yarn add react-app-rewired customize-cra
  * 新建config-overrides.js文件
  ```
  module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config
  }
  
  ```
  * 修改package.json文件
  ```
    {
      // ...
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },
      // ...
    }
 
  ```
* 配置多环境
   * 安装dotenv yarn add dotenv
   * 新增.env.dev .env.pord 
   * 修改package.json文件
   ```
   {
     // ...
     "scripts": {
       "start": "dotenv -e .env.dev react-app-rewired start",
       "build:sit": "dotenv -e .env.sit react-app-rewired build",
       "build:prod": "dotenv -e .env.prod react-app-rewired build",
       "test": "react-app-rewired test",
       "eject": "react-scripts eject"
     },
     // ...
   }
    //在index.html中使用%REACT_APP_URL_API%
    //在js/jsx中：process.env.REACT_APP_URL_API

   ```
  



