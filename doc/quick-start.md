# 快速上手

本节将介绍如何在项目中使用 @oasis-end/utils。

## 版本

@oasis-end/utils 目前还处于快速开发迭代中。

[![An image](/image/share.svg)](https://github.com/joo1es/utils)


**使用包管理器安装**

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 @oasis-end/utils。

````sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install @oasis-end/utils

# Yarn
$ yarn add @oasis-end/utils

# pnpm
$ pnpm i @oasis-end/utils
````

如果您的网络环境不好，建议使用相关镜像服务例如 [npm-cnpm](https://github.com/cnpm/cnpm) 等。

```sh
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

## 用法

**完整引入**

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
import * as oeUtils from '@oasis-end/utils'
```

**按需导入**

只需要导入你用到的函数，现代打包工具会自动处理 tree-shaking （树摇优化）。

```ts
import { unqiue } from '@oasis-end/utils'
```

###### <div class="auto-import">自动导入 ![An image](/image/recommend.svg)</div>
```sh
npm install unplugin-auto-import -D
```
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

**vite**
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { oasisEndUtilsPresets } from '@oasis-end/utils/dist/preset'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: [
        oasisEndUtilsPresets
      ],
    }),
  ],
})
```
**Webpack**
```ts
// webpack.config.js
const { oasisEndUtilsPresets } = require('@oasis-end/utils/dist/preset')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      imports: [
        oasisEndUtilsPresets
      ],
    }),
  ],
}
```


## 开始使用

现在你可以启动项目了。 对于每个函数的用法，请查阅 [对应的独立文档](/api-examples)。
