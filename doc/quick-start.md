# 快速上手

本节将介绍如何在项目中使用 @oasis-end/utils。

## 版本

@oasis-end/utils 目前还处于快速开发迭代中。

[![An image](/image/share.svg)](https://github.com/joo1es/utils)


**使用包管理器安装**

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 @oasis-end/utils。
````
# 选择一个你喜欢的包管理器

# NPM
$ npm install @oasis-end/utils  --save --global

# Yarn
$ yarn add @oasis-end/utils --save --global

# pnpm
$ pnpm i @oasis-end/utils --save --global
````

如果您的网络环境不好，建议使用相关镜像服务例如 [npm-cnpm](https://github.com/cnpm/cnpm) 等。
```
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

## 用法

**完整引入**

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```ts
// main.ts
import { createApp } from 'vue'
import utilsPreset from '@oasis-end/utils/preset'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

**按需导入**

您需要使用额外的插件来导入要使用的组件。
###### <div class="auto-import">自动导入 ![An image](/image/recommend.svg)</div>
```
npm install unplugin-auto-import -D
```
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

**vite**
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: ['@oasis-end/utils'],
    }),
  ],
})
```
**Webpack**
```ts
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      imports: ['@oasis-end/utils'],
    }),
  ],
}
```

###### 手动导入

@oasis-end/utils 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)  功能。
```ts
// APP.ts
import { treeMap } from '@oasis-end/utils'

treeMap({})
```


## 开始使用

现在你可以启动项目了。 对于每个组件的用法，请查阅 [对应的独立文档](/api-examples)。
