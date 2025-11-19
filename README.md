<h1 align="center">
  <p>万能工科生笔记</p>
</h1>

<div align="center">

[![GitHub deployments](https://img.shields.io/github/deployments/maindraster/awesome-tutorials/production?style=flat&logo=vercel&label=vercel)](https://indratang.top/)
[![LICENSE](https://img.shields.io/badge/license-Apache--2.0-blue?logo=apache)](https://github.com/maindraster/awesome-tutorials/blob/v2.0/LICENSE)
[![CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://github.com/maindraster/awesome-tutorials/blob/v2.0/LICENSE-CC-BY-NC-SA)
</div>

<div align=center>
<img src="./pictures/overview.jpg"/>
</div>

## 简介

本项目是为工科生们准备的**开源**入门教程文档+视频网站，包含：
- 各类工科技术的入门，前后端、嵌入式、建模、仿真等等
- 机器人前沿技术
- ……（持续更新中）

> v2.0对网站布局整体结构进行了更新以获得更舒适的阅读体验。

### 特性

本网站已进行特定优化，完全可以作为一个模板使用。
[PageSpeed](https://pagespeed.web.dev/)成绩如下：

![性能](./pictures/performance.png)

- [x] 快速高性能
- [x] 仿FumaDocs简单干净的设计
- [x] 浅色/深色模式
- [x] 响应式设计
- [x] 使用 [Pagefind](https://pagefind.app/) 构建的全站搜索
- [x] 友好的 SEO
- [x] 目录和可折叠侧边栏
- [x] 一键Markdown复制、PDF导出和询问AI
- [x] 支持Starlight插件（评论功能等）

## 本地开发

由于本网站目前依托于Vercel的SSR（Service Side Render）服务，所以需要翻墙才能访问，且对网络要求较高。以下提供本地部署的方案，只是无法进行评论。

首先你需要下载或git clone这个仓库。
```
git clone https://github.com/maindraster/starlight-blog
```
然后进入到根目录文件夹下，执行
```
pnpm i
```
再执行以下命令，你就可以在 http://localhost:4321/ 当中查看了。
```
pnpm dev
```

## 鸣谢

- 基础模板：[Starlight](https://github.com/withastro/starlight)
- 主题和组件：[starlight-theme-nova](https://github.com/ocavue/starlight-theme-nova), [starlight-theme-rapide](https://github.com/HiDeoo/starlight-theme-rapide)以及[所有使用到的插件](./astro.config.mjs)
- 艺术审美参考：[Fumadocs](https://fumadocs.dev/docs/ui)

## 许可证

本仓库采用双许可证，使用本仓库即同意条款，违规使用将依法追责。规范内容与模板使用权限如下：

### 博客内容许可（正文、素材类）
- 适用范围：博客正文、原创图片、教程文稿等所有内容
- 许可协议：CC BY-NC-SA 4.0

### 网站模板许可（代码、布局类）
- 适用范围：HTML/CSS/JS/Astro布局、组件、页面框架等代码
- 许可协议：Apache License 2.0
