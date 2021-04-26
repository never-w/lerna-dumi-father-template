# 常用 React Hooks 集合

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## 使用方式

### 安装依赖

```bash
yarn bootstrap
```

### 清除各个库的 node_modules

```bash
yarn clean
```

### 新增库

```bash
## @fruits-chain/hooks 即 NPM 的模块名称
lerna create @fruits-chain/hooks

## 接下来一路回车就好，会生成初始化模板文件
```

### 添加依赖

```bash
## 对某个库添加第三方依赖
## 似乎只能安装一个一个添加
## @fruits-chain/hooks 即 packages 文件夹内某个 package.json 的 name 值
## --dev devDependencies
## --peer peerDependencies
## 更多阅读 -> https://github.com/lerna/lerna/tree/main/commands/add
lerna add father-build --scope=@fruits-chain/hooks --dev
```

## ESLint

目前使用 `create-react-app` 推荐的 `eslint-config-react-app`。

> yarn add eslint-config-react-app @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library --dev -W

曾想过使用过 `@umijs/fabric`，但是配置后各种报错。

后面可以在团队中自定义一个配置。

## 参考仓库

- [antd-mobile-plus](https://github.com/alitajs/antd-mobile-plus) 这是一个使用 antd-mobile@3 中的规范，从新规划的基于 antd-mobile@2 组件的基础上开发的业务组件
- [lerna-learning](https://github.com/morrain/lerna-learning)
