---
name: "科学、技术与文明"
description: "面向长时段科学史阅读的微缩胶片阅览室"
colors:
  vermilion-signal: "#e45d43"
  graphite-room: "#10181c"
  deep-room: "#0a1013"
  smoked-film: "#131e23"
  projected-paper: "#eee9dc"
  projected-ink: "#172021"
  archive-ink: "#e9e6dc"
  archive-muted: "#9aa6a8"
typography:
  display:
    fontFamily: "Geist, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 5.1rem)"
    fontWeight: 540
    lineHeight: 1.08
    letterSpacing: "-0.065em"
  body:
    fontFamily: "Geist, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  archival-label:
    fontFamily: "Geist Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.69rem"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  control: "7px"
  panel: "14px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "44px"
  section: "92px"
components:
  filter-control:
    backgroundColor: "{colors.smoked-film}"
    textColor: "{colors.archive-ink}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 12px"
  selected-event:
    backgroundColor: "rgba(228, 93, 67, 0.15)"
    textColor: "{colors.archive-ink}"
    rounded: "0"
    padding: "12px 18px 12px 14px"
  projected-reading-pane:
    backgroundColor: "{colors.projected-paper}"
    textColor: "{colors.projected-ink}"
    rounded: "0"
    padding: "42px 52px 70px"
---

# Design System: 科学、技术与文明

## Overview

**Creative North Star: "Scientific Microfilm Reading Room"**

界面是一台用于近距离阅读的科学史仪器，而不是营销首页。暗色房间承载索引和时间膜，暖白投影纸承载长文，朱红信号只负责当前选择、关键编号和焦点转移。桌面三栏是主构图，移动端只是可靠的单流退化。

它应显得克制、精密、可长期使用。历史密度来自结构、标线与文本层级，不来自卡片堆叠或无关装饰。

**Key Characteristics:**

- 九时代索引、三轨时间膜、投影读稿组成稳定的桌面阅读仪器。
- 科学、技术、文明以圆、方、菱形同时区分，颜色不是唯一信号。
- 人物与群体绑定贡献、条件和争议，不形成名人墙。
- 颗粒只出现在胶片层，长文区域保持清晰。

## Colors

配色由一个朱红信号色和一组石墨、烟蓝、投影纸中性色构成。

### Primary

- **朱红信号** (`#e45d43`)：当前节点、编号、焦点和少量关键状态。单屏占比保持稀少。

### Neutral

- **石墨暗室** (`#10181c`)：索引和页面主背景。
- **深暗室** (`#0a1013`)：页眉、边界和最深层。
- **烟蓝胶片** (`#131e23`)：时间轴承载面。
- **投影纸** (`#eee9dc`)：右侧精读面。
- **投影墨** (`#172021`)：纸面正文。
- **档案墨** (`#e9e6dc`)：暗面主文字。
- **档案灰** (`#9aa6a8`)：暗面说明文字。

**The One Signal Rule.** 朱红是唯一强调色，不为装饰增加第二个高饱和色。

## Typography

**Display Font:** Geist 与中文系统无衬线回退  
**Body Font:** Geist 与中文系统无衬线回退  
**Label/Mono Font:** Geist Mono

中文标题依靠紧凑字距和中等字重建立档案气质。长文读稿允许使用宋体回退，日期、时代代码和英文微标签只用等宽体。

### Hierarchy

- **Display**：`clamp(2.35rem, 5vw, 5.1rem)`，用于思想框架的大标题。
- **Headline**：`clamp(1.65rem, 2.4vw, 2.65rem)`，用于节点读稿标题。
- **Title**：`0.9rem` 至 `1.15rem`，用于时间轴节点和框架条目。
- **Body**：`1rem`、`1.65` 行高；纸面长文使用约 `1.85` 行高。
- **Label**：等宽体、较宽字距，只用于编号、日期和轨道元数据。

**The Archive Label Rule.** 等宽体不承担连续中文正文。

## Layout

桌面首屏在 60px 页眉下使用三栏：约 224px 时代索引、可伸缩的中央时间膜、至少 350px 的右侧投影读稿。1440×900 是主要校准尺寸，九时代应在左栏同屏出现。时间膜与读稿各自纵向滚动，选中节点、胶片位置、网址哈希和读稿顶部保持同步。

内容框架使用最大 1220px 的阅读宽度和 92px 章节节奏。960px 以下改为单流，隐藏常驻读稿栏，用原生对话框呈现详情；680px 以下再压缩网格和边距。主要断点为 680、960、1040、1220px。

## Elevation & Depth

系统以色调分层和细边框为主。常规面板不使用卡片阴影；只有投影读稿和移动详情层使用环境阴影，表达真实的光面覆盖关系。模糊只用于固定页眉和对话框遮罩。

### Shadow Vocabulary

- **投影阴影**：`0 22px 70px rgba(0,0,0,.32), 0 0 38px rgba(247,238,213,.08)`，只用于纸面读稿。
- **移动详情阴影**：`0 -22px 70px rgba(0,0,0,.34)`，只用于底部详情层。

**The Flat Room Rule.** 暗室中的静态容器保持平坦，层级主要由明度、线条和空间建立。

## Shapes

面板圆角为 14px，控件圆角为 7px，筛选标签可使用胶囊形。时间轴主体保持直角和连续标线。三条轨道的核心形状固定为科学圆形、技术方形、文明菱形，任何主题下都不得只靠颜色区分。

## Components

### Buttons

- **Shape:** 7px 控件圆角，最小触控高度 44px。
- **Default:** 透明或胶片色背景，1px 语义边框。
- **Hover / Focus:** 轻微表面明度变化，焦点使用 2px 朱红高可见轮廓，不移动布局。

### Chips

- **Style:** 轨道标签包含形状字标和文字；选中态以底部朱红线补充。
- **State:** `aria-pressed` 表达筛选状态。

### Inputs / Fields

- **Style:** 暗色表面、1px 边框、7px 圆角、44px 最小高度。
- **Focus:** 边框切换为朱红；保留可见标签，不依赖占位符。

### Navigation

页眉保持 60px，品牌居左、页面锚点居中、档案标识居右。移动端只保留最关键锚点。时代索引使用原生按钮，活动时代以左侧朱红标线和淡色底纹共同标识。

### Timeline Event

节点行包含日期、三条连续轨道、事件标题和人物摘要。活动节点只增加左侧信号线和淡朱红投影，不变成悬浮卡片。相关节点和哈希直达必须把该行滚入桌面时间膜视野。

### Projected Reading Pane

纸面依次呈现转折、人物与群体、条件与影响、张力及关键词。纸面是唯一允许长段宋体阅读和显著环境阴影的区域。

## Do's and Don'ts

### Do:

- **Do** 让历史位置、选中状态、网址和读稿同步。
- **Do** 在节点列表直接显示人物或群体摘要。
- **Do** 保持桌面三栏为主体验，并在 1440×900 检查九时代总览。
- **Do** 用真实语义控件、键盘焦点和减少动态效果偏好。

### Don't:

- **Don't** 把页面改成 Hero 加等宽卡片的通用落地页。
- **Don't** 用未经授权的历史人物肖像或虚构引文。
- **Don't** 用单一英雄替代共同体、工程化和制度条件。
- **Don't** 把颗粒、阴影、胶囊和朱红扩散到所有区域。
