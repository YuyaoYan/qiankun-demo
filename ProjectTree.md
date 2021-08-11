
```
qiankun
├─ .gitignore
├─ Record.md
├─ main-app                 主应用
│  ├─ .en.production
│  ├─ .env.development
│  ├─ build
│  │  ├─ build.js
│  │  ├─ check-versions.js
│  │  ├─ logo.png
│  │  ├─ utils.js
│  │  ├─ vue-loader.conf.js
│  │  ├─ webpack.base.conf.js
│  │  ├─ webpack.dev.conf.js
│  │  └─ webpack.prod.conf.js
│  ├─ config
│  │  ├─ dev.env.js
│  │  ├─ index.js
│  │  └─ prod.env.js
│  ├─ index.html
│  ├─ package.json
│  └─ src
│     ├─ App.vue
│     ├─ components
│     │  └─ HelloWorld.vue
│     ├─ main.js
│     ├─ micro-app.js
│     └─ router
│        └─ index.js
├─ micro-app             微应用1
│  ├─ build
│  │  ├─ build.js
│  │  ├─ check-versions.js
│  │  ├─ logo.png
│  │  ├─ utils.js
│  │  ├─ vue-loader.conf.js
│  │  ├─ webpack.base.conf.js
│  │  ├─ webpack.dev.conf.js
│  │  └─ webpack.prod.conf.js
│  ├─ config
│  │  ├─ dev.env.js
│  │  ├─ index.js
│  │  └─ prod.env.js
│  └─ src
│     ├─ App.vue
│     ├─ components
│     │  ├─ HelloWorld.vue
│     │  ├─ About.vue
│     │  ├─ MicroOne.vue
│     │  └─ MicroTwo.vue
│     ├─ main.js        配置qiankun生命周期
│     └─ router
│        └─ index.js
│  └─ index.html
├─ package.json         启动全部项目配置
└─ sub-app              微应用2
   ├─ build
   │  ├─ build.js
   │  ├─ check-versions.js
   │  ├─ logo.png
   │  ├─ utils.js
   │  ├─ vue-loader.conf.js
   │  ├─ webpack.base.conf.js
   │  ├─ webpack.dev.conf.js
   │  └─ webpack.prod.conf.js
   ├─ config
   │  ├─ dev.env.js
   │  ├─ index.js
   │  └─ prod.env.js
   ├─ index.html
   ├─ package.json
   └─ src
      ├─ App.vue
      ├─ components
      │  └─ HelloWorld.vue
      ├─ main.js
      └─ router
         └─ index.js

```