# qunar

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 移动端 30 毫秒点击问题

- npm install fastcilck --save

```
 @import '../../../assets/styles/varibles.styl';
 路径优化  webpack 配置
   'styles': resolve('src/assets/styles'),

// 用得到的地方
  @import '~styles/varibles.styl'

```

```
.wrapper /deep/ .swiper-pagination-bullet-active
/deep/   代替 >>>
```

## npm install axios --save

- 全局配置

## 转发机制

- config index.js proxyTable 更改 // 设置跨域请求
  `proxyTable: { // 设置跨域请求 "/api": { target: "http://localhost:5000/api/", changeOrigin: true, pathRewrite: { "^/api": "" } } },`

## npm install better-scroll --save

##swiper

- vue-awesome-swiper

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
