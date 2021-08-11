### 命令记录

-

```json
// package.json
"scripts": {
    "install": "npm-run-all --serial install:*",
    "install:main": "cd main && yarn install",
    "install:sub-app": "cd sub-app && yarn install",
    "install:micro-app": "cd micro-app && yarn install",
    "start": "npm-run-all --parallel start:*",
    "start:micro-app": "cd micro-app && yarn start",
    "start:sub-app": "cd sub-app && yarn serve",
    "start:main": "cd main && yarn serve",
    "build": "npm-run-all --serial build:*",
    "build:main": "cd main && yarn build",
    "build:sub-app": "cd sub-app && yarn build",
    "build:micro-app": "cd micro-app && yarn build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

npm-run-all 提供了多种运行多个命令的方式，常用的有以下几个：:
`--parallel`并行运行多个命令，例如：`npm-run-all --parallel lint build`
`--serial`: 多个命令按排列顺序执行，例如：`npm-run-all --serial clean lint build:**`
`--continue-on-error`: 是否忽略错误，添加此参数 `npm-run-all` 会自动退出出错的命令，继续运行正常的
`--race`: 添加此参数之后，只要有一个命令运行出错，那么 `npm-run-all` 就会结束掉全部

### history 路由

```js
history.pushState(null, '/one', '/one'); 
```
