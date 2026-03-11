# 机器学习在线学习平台

一个基于 React + TypeScript 的机器学习在线学习平台，提供知识点学习、案例库、练习区和可视化工具等功能。

## 技术栈

- **前端框架**：React 18 + TypeScript
- **路由**：React Router v6
- **数据可视化**：ECharts
- **数学公式渲染**：MathJax
- **构建工具**：Vite
- **样式**：CSS3

## 功能特性

- **响应式设计**：适配不同浏览器宽度，在移动设备上自动切换为汉堡菜单
- **苹果极简配色**：采用苹果风格的极简配色方案，界面简洁美观
- **知识点学习**：包含有监督学习、无监督学习、强化学习和深度学习等核心知识点
- **案例库**：提供实际应用案例，帮助理解机器学习算法的应用场景
- **练习区**：提供交互式练习，巩固学习成果
- **可视化工具**：包含混淆矩阵、ROC曲线、聚类散点图和时序趋势图等可视化工具
- **数学公式**：集成 MathJax 用于渲染复杂的数学公式

## 快速开始

### 前置要求

- Node.js 16.x 或更高版本
- npm 7.x 或更高版本

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

然后在浏览器中访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录中

## 项目结构

```
MachineLearning/
├── public/            # 静态资源
├── src/               # 源代码
│   ├── components/    # 组件
│   │   └── Navigation.tsx  # 导航栏组件
│   ├── data/          # 数据
│   │   └── knowledge.ts    # 知识点数据
│   ├── pages/         # 页面
│   │   ├── HomePage.tsx           # 首页
│   │   ├── KnowledgeListPage.tsx  # 知识点列表页
│   │   ├── KnowledgeDetailPage.tsx # 知识点详情页
│   │   ├── CasesListPage.tsx      # 案例库页面
│   │   ├── PracticePage.tsx       # 练习区页面
│   │   └── VisualizationPage.tsx  # 可视化工具页面
│   ├── utils/         # 工具函数
│   │   └── mathjax.ts  # MathJax 初始化工具
│   ├── App.tsx        # 应用主组件
│   ├── App.css        # 全局样式
│   ├── main.tsx       # 应用入口
│   └── index.css      # 基础样式
├── index.html         # HTML 模板
├── package.json       # 项目配置
├── tsconfig.json      # TypeScript 配置
├── vite.config.ts     # Vite 配置
└── README.md          # 项目说明
```

## 核心功能

### 1. 知识点学习

- **有监督学习**：分类、回归、决策树、SVM、逻辑回归、朴素贝叶斯、随机森林、梯度提升机、神经网络
- **无监督学习**：聚类、降维、主成分分析(PCA)、奇异值分解(SVD)、自动编码器、深度学习
- **强化学习**：基于模型的强化学习、无模型强化学习、基于价值的方法、基于策略的方法、Actor-Critic方法
- **深度学习**：卷积神经网络(CNN)、循环神经网络(RNN)、长短期记忆网络(LSTM)、生成对抗网络(GAN)、Transformer

### 2. 案例库

提供机器学习算法在广告和风控场景中的应用案例，帮助用户理解算法的实际应用。

### 3. 练习区

提供交互式练习，巩固学习成果，包括选择题和编程题。

### 4. 可视化工具

- **混淆矩阵**：展示分类模型的预测结果
- **ROC曲线**：评估分类模型的性能
- **聚类散点图**：可视化数据聚类结果
- **时序趋势图**：展示时间序列数据的变化趋势

## 响应式设计

- **大屏幕**：显示完整的导航链接，无截断问题
- **中等屏幕**：自动调整导航链接的间距和字体大小
- **小屏幕**：自动切换到汉堡菜单模式，点击汉堡菜单可以展开/收起导航链接

## 如何贡献

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 联系方式

- 项目链接：[https://github.com/wenbo030509/MachineLearningPlatform](https://github.com/wenbo030509/MachineLearningPlatform)

---

感谢使用机器学习在线学习平台！希望它能帮助你更好地学习和理解机器学习知识。