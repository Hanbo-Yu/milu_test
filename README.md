# 麋鹿性偏向测试

一个基于 Vue 3 的性偏向测试网页应用，包含68道题目和22个评估维度。

## 功能特点

- 完整的测试流程：首页 → 指导页 → 测试页 → 结果页
- 68道测试题目，22个评估维度
- 雷达图可视化展示测试结果
- 支持生成结果图片分享
- 响应式设计，适配移动端和桌面端
- 流畅的动画和过渡效果

## 技术栈

- Vue 3.0
- Vite
- Element Plus
- ECharts
- GSAP
- html2canvas

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions 自动部署

1. 在 GitHub 上创建新仓库
2. 将项目推送到仓库
3. 在仓库中创建 `.github/workflows/deploy.yml` 文件，内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. 在仓库设置中启用 GitHub Pages：
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"

5. 推送代码到 main 分支，GitHub Actions 会自动构建并部署

### 方法二：手动部署

1. 构建项目：

```bash
npm run build
```

2. 将 `dist` 文件夹推送到 `gh-pages` 分支：

```bash
git checkout -b gh-pages
git add -f dist
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

3. 在仓库设置中启用 GitHub Pages：
   - 进入 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `gh-pages` 和 `/ (root)`

## 项目结构

```
├── src/
│   ├── components/       # Vue 组件
│   │   ├── HomePage.vue   # 首页
│   │   ├── GuidePage.vue  # 指导页
│   │   ├── TestPage.vue   # 测试页
│   │   └── ResultPage.vue # 结果页
│   ├── data/             # 数据文件
│   │   └── questions.js   # 题目数据
│   ├── styles/           # 样式文件
│   │   └── global.css     # 全局样式
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── index.html            # HTML 模板
├── package.json          # 项目配置
├── vite.config.js        # Vite 配置
└── .gitignore            # Git 忽略文件
```

## 许可证

MIT
