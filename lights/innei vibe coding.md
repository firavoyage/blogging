# AI 编码方法论：从探索到精进的系统化实践

2025 年 7 月 17 日 星期四(已编辑)

技术  / ai

5434

24

当前 2 人正在阅读

AI·GEN

### 关键洞察

本文梳理 AI 编码方法论演进：从提示工程（对话式迭代、探索性强但效率低），到探索式工程（结构化需求、架构预研、降低重构成本），再到上下文工程（构建完整项目上下文、PRD 模板与自动化命令以确保一致性）。配套实践包括项目知识图谱与规范化规则注入、Claude Code 与 SuperClaude 集成及全局记忆配置。核心认知转变是将 AI 从单纯执行者转为长期协作伙伴，实现开发过程的确定性、可维护性与可扩展性。

这篇文章上次修改于  2025 年 9 月 16 日 星期二，可能部分内容已经不适用，如有疑问可询问作者。

### 阅读此文章之前，你可能需要首先阅读以下的文章才能更好的理解上下文。

- [初探 Context Engineering](https://innei.in/posts/programming/exploring-context-engineering)

# AI 编码方法论：从探索到精进的系统化实践

> Important
>
> 此文章由 AI 总结和润色内部分享，由笔者校对，请注意甄别。

## 方法论演进路径[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#0__%E6%96%B9%E6%B3%95%E8%AE%BA%E6%BC%94%E8%BF%9B%E8%B7%AF%E5%BE%84)

### 阶段一：提示工程（Prompt Engineering）[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#1__%E9%98%B6%E6%AE%B5%E4%B8%80%E6%8F%90%E7%A4%BA%E5%B7%A5%E7%A8%8Bprompt-engineering)

作为 AI 辅助开发的最基础形态，提示工程采用离散式交互模式。开发者通过连续对话逐步细化需求，AI 基于即时反馈进行代码迭代。该模式在需求边界模糊、探索性强的场景中具有天然优势，但存在显著的效率瓶颈。

#### 特征分析[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#2__%E7%89%B9%E5%BE%81%E5%88%86%E6%9E%90)

- **交互模式**：线性对话驱动，缺乏系统性规划
- **迭代成本**：高频率人工介入，需求理解偏差导致的重构成本显著
- **时间复杂度**：需求复杂度指数增长
- **质量曲线**：收敛速度慢，最终效果依赖开发者经验判断

#### 实践案例研究[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#3__%E5%AE%9E%E8%B7%B5%E6%A1%88%E4%BE%8B%E7%A0%94%E7%A9%B6)

**案例 1：高性能图片预览库开发**

项目背景：构建基于 WebGL 的高性能图片预览解决方案

开发过程回溯：

![](https://innei.in/_next/image?url=https%3A%2F%2Fobject.innei.in%2Fbed%2F2025%2F07%2F17%2F1752764264285.png&w=3840&q=75)

![](https://innei.in/_next/image?url=https%3A%2F%2Fobject.innei.in%2Fbed%2F2025%2F07%2F17%2F1752764264285.png&w=3840&q=75)

![](https://object.innei.in/bed/2025/07/17/1752764266866.png)

在  [afilmory 项目](https://github.com/Afilmory/afilmory/blob/main/.specstory/history/2025-05-25_08-48-%E9%AB%98%E6%80%A7%E8%83%BD%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88%E5%BA%93%E9%9C%80%E6%B1%82.md)  中，初期采用纯对话式开发模式。经过数周的探索性开发，通过 20+ 轮次的需求澄清和架构重构，最终采用 Gemini-2.5-pro-preview-0605 进行系统性重写，产出  [最终方案](https://github.com/Afilmory/afilmory/tree/main/packages/webgl-viewer)。

**案例 2：Landing Page 重构**

需求描述："重新构建  [folo.is](https://folo.is/) landing page 的 UI，使其现代化，AI 风格。样式参考 Vercel、Linear 的 landing page 设计"

交互过程可视化：

![](https://object.innei.in/bed/2025/07/17/1752764286476.png)

通过 12 轮精细化微调，涵盖：

- 视觉层次优化（图片错位修正）
- 色彩系统统一（移除紫色渐变，采用主题色方案）
- 交互元素规范化（圆角、阴影、动效）
- 信息架构重组（Accordion 组件移除，内容整合至详情页）

### 阶段二：探索式工程（Exploratory Engineering）[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#4__%E9%98%B6%E6%AE%B5%E4%BA%8C%E6%8E%A2%E7%B4%A2%E5%BC%8F%E5%B7%A5%E7%A8%8Bexploratory-engineering)

该模式构建了需求澄清的系统性框架，将 AI 从代码实现者转变为架构顾问。通过结构化的需求勘探，显著降低后期重构成本。

#### 案例实践：Feature Flags 系统[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#5__%E6%A1%88%E4%BE%8B%E5%AE%9E%E8%B7%B5feature-flags-%E7%B3%BB%E7%BB%9F)

探索式对话过程：

![](https://object.innei.in/bed/2025/07/17/1752764321353.png)

![](https://object.innei.in/bed/2025/07/17/1752764323342.png)

![](https://object.innei.in/bed/2025/07/17/1752764325418.png)

#### 流程优化[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#6__%E6%B5%81%E7%A8%8B%E4%BC%98%E5%8C%96)

1.  **需求解构**：将模糊需求分解为可验证的技术命题
2.  **架构预研**：基于约束条件评估技术方案可行性
3.  **风险识别**：提前暴露实现路径中的潜在阻塞点
4.  **决策固化**：形成可执行的技术规格说明书

> **💡 关键提示**：在探索式对话确定最终方案后，务必让 AI 将完整的架构决策、技术选型、接口设计等核心要素输出到结构化文档（如  `ARCHITECTURE_DECISION_RECORD.md`）。这能防止后续实现过程中因上下文窗口限制或记忆衰减导致的方向偏离，确保实现过程与既定方案保持严格一致。

### 阶段三：上下文工程（Context Engineering）[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#7__%E9%98%B6%E6%AE%B5%E4%B8%89%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B7%A5%E7%A8%8Bcontext-engineering)

实现从"AI 能做什么"到"AI 应该怎么做"的认知跃迁。通过构建完整的项目上下文，将隐性知识显性化，确保 AI 行为与项目规范高度一致。

#### 上下文构建框架[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#8__%E4%B8%8A%E4%B8%8B%E6%96%87%E6%9E%84%E5%BB%BA%E6%A1%86%E6%9E%B6)

**1\. PRD Specification Template**

```
# Product Requirements Document (PRD)

## Objective
- [Clearly defined, measurable feature goals]

## Technical Constraints
- [Non-negotiable technical decisions]
- [Architectural principles that must be followed]

## Quality Standards
- [Performance benchmarks]
- [Maintainability requirements]
- [Test coverage criteria]

## Integration Requirements
- [External dependencies inventory]
- [Interface specifications]

## Deliverables Definition
- [Code organization patterns]
- [Documentation requirements]
```

展开

**2\. Context Engineering Automation**

[

context-engineering-intro12130Context engineering is the new vibe coding - it's the way to actually make AI coding assistants work. Claude Code is the best for this so that's what this repo is centered around, but you can apply this strategy with any AI coding assistant!](https://github.com/coleam00/context-engineering-intro)

**PRD Generation Workflow:**

![1752764432740](https://object.innei.in/bed/2025/07/17/1752764432740.png)

---

1752764432740

**Implementation Execution:**

![1752764438107](https://object.innei.in/bed/2025/07/17/1752764438107.png)

---

1752764438107

**Core Commands:**

- `/generate-prps`: Generate technical implementation plan from PRD specifications
- `/execute-prp`: Execute development tasks according to predefined plan

## 项目认知增强体系[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#9__%E9%A1%B9%E7%9B%AE%E8%AE%A4%E7%9F%A5%E5%A2%9E%E5%BC%BA%E4%BD%93%E7%B3%BB)

### 知识图谱构建[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#10__%E7%9F%A5%E8%AF%86%E5%9B%BE%E8%B0%B1%E6%9E%84%E5%BB%BA)

AI 的认知受限于上下文窗口，无法完整理解项目所有细节。通过构建可维护的知识图谱，实现项目智慧的持续积累。

#### 1\. 项目索引初始化[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#11__1-%E9%A1%B9%E7%9B%AE%E7%B4%A2%E5%BC%95%E5%88%9D%E5%A7%8B%E5%8C%96)

Claude Code：

```
# 初始化项目认知
/init
```

生成基础项目记忆，包括：

- 技术栈识别
- 目录结构解析
- 构建流程梳理
- 基础约束提取

#### 2\. 规范化知识注入[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#12__2-%E8%A7%84%E8%8C%83%E5%8C%96%E7%9F%A5%E8%AF%86%E6%B3%A8%E5%85%A5)

**案例：UIKit 颜色系统规范**

Prompt：

> 你应该使用 tailwindcss-uikit-color 文档是  [https://github.com/Innei/apple-uikit-colors](https://github.com/Innei/apple-uikit-colors), 使用这个颜色系统去编写组件，这个规则写到 claude.md

AI 理解的规范化表达：

```
### UI/UX Guidelines
- Use Apple UIKit color system via tailwind-uikit-colors package
- Prefer semantic color names: `text-primary`, `fill-secondary`, `material-thin`, etc.
- Follow system colors: `red`, `blue`, `green`, `mint`, `teal`, `cyan`, `indigo`, `purple`, `pink`, `brown`, `gray`
- Use material design principles with opacity-based fills and proper contrast
```

#### 3\. 约束规则持续集成[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#13__3-%E7%BA%A6%E6%9D%9F%E8%A7%84%E5%88%99%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90)

**i18n 规范示例**

Prompt：

> 你在编写 i18n key 时，应该使用扁平 key，不能使用冲突的 key 如 exif.custom.rendered.custom 和 exif.custom.rendered，你应该遵循语言的规则；最后把这个规则写到 claude.md 中。

通过交互式反馈，将隐式约束转化为显式规则：

````
#### i18n Writing Guidelines

1. Follow [i18next formatting guidelines](https://www.i18next.com/translation-function/formatting)
2. **Use flat keys only** - Use `.` notation for separation, no nested objects
3. For plural-sensitive languages, use `_one` and `_other` suffixes
4. **Avoid conflicting flat keys** - During build, flat dot-separated keys (e.g., 'exif.custom.rendered.custom') are automatically converted to nested objects, which can cause conflicts.

Example:
```json
{
  "personalize.title": "Personalization",
  "personalize.prompt.label": "Personal Prompt",
  "shortcuts.add": "Add Shortcut",
  "shortcuts.validation.required": "Name and prompt are required"
}
```
````

展开

## Claude Code 增强实践[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#14__claude-code-%E5%A2%9E%E5%BC%BA%E5%AE%9E%E8%B7%B5)

### SuperClaude 集成[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#15__superclaude-%E9%9B%86%E6%88%90)

[SuperClaude](https://github.com/NomenAK/SuperClaude)  提供了一系列增强命令：

- `/document`: 自动化文档生成
- `/review`: 代码质量审查
- `/refactor`: 重构建议

### 全局记忆配置[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#16__%E5%85%A8%E5%B1%80%E8%AE%B0%E5%BF%86%E9%85%8D%E7%BD%AE)

在  `~/.claude/CLAUDE.md`  中配置全局行为准则：

```

### Code Structure & Modularity
- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.

### Documentation & Explainability
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add an inline `# Reason:` comment** explaining the why, not just the what.

### 🧠 AI Behavior Rules
- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.
- **Security** You are prohibited from accessing the contents of any .env files within the project.
```

## 方法论总结[](https://innei.in/posts/tech/ai-coding-methodology-systematic-practice#17__%E6%96%B9%E6%B3%95%E8%AE%BA%E6%80%BB%E7%BB%93)

AI 编码已从简单的代码生成演进为系统化的工程实践。关键认知转变：

1.  **从工具到伙伴**：AI 从执行者转变为协作伙伴
2.  **从随机到确定**：通过上下文工程消除不确定性
3.  **从短期到长期**：构建可持续演进的项目知识体系
4.  **从个体到系统**：形成可复制、可扩展的 AI 协作框架

最终，AI 工程的核心在于**将人类的专业判断与 AI 的执行能力有机结合**，在保持技术前瞻性的同时，确保交付物的工程质量和长期可维护性。

### 关联阅读

- [初探 Context Engineering](https://innei.in/posts/programming/exploring-context-engineering)

文章标题：AI 编码方法论：从探索到精进的系统化实践

文章作者：Innei

文章链接：https://innei.in/posts/tech/ai-coding-methodology-systematic-practice \[复制\]

最后修改时间: 2025 年 09 月 16 日 17:57

---

商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。  
本文采用  [CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

使用社交账号登录

- ![](https://authjs.dev/img/providers/google.svg)

免登录评论

- ![insv's avatar](https://avatars.githubusercontent.com/u/132447577?v=4)

  insv2025 年 8 月 20 日 星期三#5 来自：香港九龍城區意法半

  > 探索式对话过程： 你好，这个与 Claude Code 对话的界面是哪个软件呢?

- ![lommm's avatar](https://cravatar.cn/avatar/bd41c229312c99637044b7e965062e63?d=retro)

  lommm2025 年 7 月 21 日 星期一#4 来自：美国加州洛杉矶

  还得是 innei，刚好在苦恼这个，方法就来了，爱死

- ![保罗's avatar](https://cravatar.cn/avatar/d22eb460ecab37fcd7205e6a3c55c228?d=retro)

  [保罗](https://paugram.com/)2025 年 7 月 18 日 星期五#2 来自：日本东京都东京

  78 个人正在阅读，牛逼

- ![Berny Linville's avatar](https://avatars.githubusercontent.com/u/86948998?v=4)

  Berny Linville2025 年 7 月 18 日 星期五#1 来自：中国浙江杭州

  请教下作者，你的截图里面用的是什么软件

- ![Innei's avatar](https://cravatar.cn/avatar/6e08b60f32277bc359aacdac2712dd0f?d=retro)

  [Innei](https://innei.ren/)2025 年 7 月 18 日 星期五#1#1

  哪个

- ![unknown_'s avatar](https://cravatar.cn/avatar/737ac67c9716a14ea88075d9eb61379a?d=retro)

  unknown_2025 年 7 月 19 日 星期六#1#1#1 来自：新加坡 North West 新加坡

  请问下使用的那个 AI chatbot 软件是什么 ？
