## 项目说明
项目使用*soybean-admin*， 用来学习ts, vite, vue3

## 目录说明

```bash
.
├── .husky                     //git commit提交钩子，提交前检查代码格式和提交commit内容的格式
├── .vscode                    //vscode插件和设置
│   ├── extensions.json        //vscode推荐的插件
│   └── settings.json          //vscode配置(在该项目中生效，可以复制到用户配置文件中)
├── build                      //vite构建相关配置和插件
│   ├── config                  //构建打包配置
│   │   ├── define.ts           //定义的全局常量，通过vite构建时注入
│   │   └── proxy.ts           //网络请求代理
│   ├── plugins                //构建插件
│   │   ├── compress.ts        //代码压缩插件
│   │   ├── html.ts            //html插件(注入变量，压缩代码等)
│   │   ├── mock.ts            //mock插件
│   │   ├── unocss.ts          //原子css框架unocss插件
│   │   ├── unplugin.ts        //自动导入UI组件、自动解析iconify图标、自动解析本地svg作为图标
│   │   ├── visualizer.ts      //构建的依赖大小占比分析插件
│   │   └── vue.ts             //vue相关vite插件
│   └── utils                  //构建相关工具函数
├── mock                       //mock
│   ├── api                    //mock的接口
│   └── model                  //mock的数据
├── patch                      //修改的node_modules依赖的补丁文件
├── public                     //公共目录(文件夹里面的资源打包后会在根目录下)
│   ├── resource               //资源文件夹
│   └── favicon.ico            //网站标签图标
├── src
│   ├── assets                 //静态资源
│   │   ├── imgs               //图片
│   │   ├── svg-icon           //本地svg图标
│   │   └── fonts              //字体
│   ├── components             //全局组件
│   │   ├── business           //业务相关组件
│   │   ├── common             //公共组件
│   │   └── custom             //自定义组件
│   ├── composables            //组合式函数(从外部引入状态+内部状态)
│   │   ├── echarts.ts         //echarts相关
│   │   ├── events.ts          //事件相关
│   │   ├── layout.ts          //布局相关
│   │   ├── router.ts          //路由相关
│   │   └── system.ts          //系统相关
│   ├── config                  //全局常量配置
│   │   ├── map-sdk.ts         //地图插件的sdk配置
│   │   ├── regexp.ts          //常用正则
│   │   └── service.ts         //请求相关配置
│   ├── context                //上下文状态
│   │   └── demo.ts            //上下文状态示例写法
│   ├── directives             //vue指令
│   │   ├── login.ts           //登录指令
│   │   ├── network.ts         //网络检测指令
│   │   └── permission.ts      //权限指令
│   ├── enum                   //TS枚举
│   │   ├── business.ts        //业务相关枚举
│   │   ├── common.ts          //通用枚举
│   │   └── system.ts          //系统相关枚举
│   ├── hooks                  //组合式的函数hooks(状态从函数里面产生)
│   │   ├── business           //业务相关hooks
│   │   │   ├── useCountDown   //倒计时
│   │   │   ├── useImageVerify //图片验证那
│   │   │   └── useSmsCode     //短信验证码
│   │   └── common             //通用hooks
│   │       ├── useBoolean     //boolean
│   │       ├── useContext     //上下文(provide、inject)
│   │       ├── useLoading     //加载
│   │       ├── useLoadingEmpty//加载和空状态
│   │       └── useReload      //重载
│   ├── layouts                //布局组件
│   │   ├── BasicLayout        //基本布局(包含全局头部、多页签、侧边栏、底部等公共部分)
│   │   ├── BlankLayout        //空白布局组件(单个页面)
│   │   └── common             //全局头部、多页签、侧边栏、底部等公共部分组件
│   │       ├── GlobalBackTop  //全局回到顶部
│   │       ├── GlobalContent  //全局主体内容
│   │       ├── GlobalFooter   //全局底部
│   │       ├── GlobalHeader   //全局头部
│   │       ├── GlobalLogo     //全局Logo
│   │       ├── GlobalSearch   //全局搜索
│   │       ├── GlobalSider    //全局侧边栏
│   │       ├── GlobalTab      //全局标签页
│   │       └── SettingDrawer  //项目配置抽屉
│   ├── plugins                //插件
│   │   └── assets.ts          //各种依赖的静态资源导入(css、scss等)
│   ├── router                 //vue路由
│   │   ├── guard              //路由守卫
│   │   ├── helpers            //路由相关的辅助函数
│   │   ├── modules            //静态(static)模式的路由数据
│   │   └── routes             //声明的固定路由
│   ├── service                //网络请求
│   │   ├── adapter            //接口适配器
│   │   ├── api                //接口api
│   │   └── request            //封装的请求函数
│   ├── settings               //项目初始配置
│   │   ├── color.ts           //传统颜色相关信息
│   │   └── theme.ts           //项目主题初始配置
│   ├── store                  //pinia状态管理
│   │   ├── modules            //状态管理划分的模块
│   │   │   ├── app            //app状态(页面重载、菜单折叠、项目配置的抽屉)
│   │   │   ├── auth           //auth状态(用户信息、用户权益)
│   │   │   ├── route          //route状态(动态路由、菜单、路由缓存)
│   │   │   ├── tab            //tab状态(多页签、缓存页面的滚动位置)
│   │   │   └── theme          //theme状态(项目主题配置)
│   │   └── subscribe          //订阅状态(状态变更后执行一些操作)
│   │       ├── app.ts         //订阅app的状态(配置弹窗打开时禁用body的滚动)
│   │       └── theme.ts       //订阅theme的状态(主题颜色变更、暗黑模式变更、页面横向滚动)
│   ├── styles                 //全局样式
│   │   ├── css                //css
│   │   └── scss               //scss
│   ├── typings                //TS类型声明文件(*.d.ts)
│   │   ├── api.d.ts           //请求接口返回的数据的类型声明
│   │   ├── business.d.ts      //业务相关的类型声明
│   │   ├── components.d.ts    //自动导入的组件的类型声明
│   │   ├── env.d.ts           //vue路由描述和请求环境相关的类型声明
│   │   ├── expose.d.ts        //defineExpose暴露出变量的类型
│   │   ├── global.d.ts        //全局通用类型
│   │   ├── package.d.ts       //第三方依赖包的类型声明
│   │   ├── route.d.ts         //路由系统的类型声明
│   │   ├── router.d.ts        //vue的路由描述的类型声明
│   │   ├── system.d.ts        //系统的类型声明
│   │   └── utils.d.ts         //类型工具合集
│   ├── utils                  //全局工具函数(纯函数，不含状态)
│   │   ├── auth               //用户鉴权工具函数
│   │   ├── common             //通用工具函数
│   │   ├── crypto             //数据加密工具函数
│   │   ├── form               //表单相关工具函数
│   │   ├── router             //路由相关工具函数
│   │   ├── service            //请求相关的工具函数
│   │   └── storage            //存储相关工具函数
│   ├── views                  //页面
│   ├── App.vue                //vue文件入口
│   └── main.ts                //项目入口ts文件
├── .cz-config.js               //git cz提交配置
├── .editorconfig               //统一编辑器配置
├── .env                       //环境文件
├── .env-config.ts              //请求环境的配置文件
├── .eslintignore              //忽略eslint检查的配置文件
├── .eslintrc.js               //eslint配置文件
├── .gitattributes             //git配置，统一eol为LF
├── .gitignore                 //忽略git提交的配置文件
├── .prettierrc.js             //prettier代码格式插件配置
├── CHANGELOG.md               //项目变更日志
├── commitlint.config.js        //commitlint提交规范插件配置
├── components.d.ts            //自动引入的组件的类型声明
├── index.html
├── package.json               //npm依赖描述文件
├── pnpm-lock.yaml             //npm包管理器pnpm依赖锁定文件
├── README.md                  //项目介绍文档
├── tsconfig.json               //TS配置
├── uno.config.js               //原子css框架unocss配置
└── vite.config.ts              //vite配置

```

## 特性

- **最新技术栈**：使用 Vue3/Vite3 等前端前沿技术开发, 使用高效率的 npm 包管理器 pnpm
- **主题**：丰富可配置的主题、暗黑模式，基于原子 css 框架 - UnoCSS 的动态主题颜色
- **权限路由**：简易的路由配置、基于 mock 的动态路由能快速实现后端动态路由
- **请求函数**：基于 axios 的完善的请求函数封装，提供 Promise 和 hooks 两种请求函数，加入请求结果数据转换的适配器

## 安装使用

- 环境配置
  **本地环境需要安装 pnpm 7.x 、Node.js 14.18+ 和 Git**

- 克隆代码

- 安装依赖

```bash
pnpm i
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## Git 提交规范

项目已经内置 angular 提交规范，通过 git cz 代替 git commit 命令即可。

git cz 命令需要全局安装 commitizen

```bash
pnpm i -g commitizen
```

## scripts 解释

```bash
"scripts": {
  # 安装依赖
  "bootstrap": "yarn install",
  # 运行项目
  "serve": "npm run dev",
  # 运行项目
  "dev": "vite",
  # 构建项目
  "build": "vite build && esno ./build/script/postBuild.ts",
  # 清空缓存后构建项目
  "build:no-cache": "yarn clean:cache && npm run build",
  # 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看
  "report": "cross-env REPORT=true npm run build",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 直接预览本地 dist 文件目录
  "preview:dist": "vite preview",
  # 删除缓存
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
  "clean:lib": "rimraf node_modules",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # 执行 stylelint 格式化
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  # 重新安装依赖，见下方说明
  "reinstall": "rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
},

```

```js
{
  // 本地运行(dev环境)
  "dev": "cross-env VITE_ENV_TYPE=dev vite",
  // 本地运行(test环境)
  "dev:test": "cross-env VITE_HTTP_ENV=test vite",
  // 本地运行(prod环境)
  "dev:prod": "cross-env VITE_HTTP_ENV=prod vite",
  // 构建打包(prod环境)
  "build": "npm run typecheck && cross-env VITE_HTTP_ENV=prod vite build",
  // 构建打包(dev环境)
  "build:dev": "npm run typecheck && cross-env VITE_HTTP_ENV=dev vite build",
  // 构建打包(test环境)
  "build:test": "npm run typecheck && cross-env VITE_HTTP_ENV=test vite build",
  // 构建打包(部署vercel)
  "build:vercel": "cross-env VITE_HASH_ROUTE=true vite build",
  // 本地环境预览构建后的dist
  "preview": "vite preview",
  // vue文件的ts检查
  "typecheck": "vue-tsc --noEmit --skipLibCheck",
  // 检测代码是否符合eslint规范并自动修复
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
  // 初始化husky
  "prepare": "husky install",
  // 记录对某个node_modules依赖包的修改
  "postinstall": "patch-package"
}
```
