# SquadLink 设计系统 —— Y2K × Windows 98 版

> 千禧年美学 · Windows 98 经典界面 · 粗野像素风 · 高饱和撞色

---

## 一、设计理念

SquadLink 是一款为游戏玩家打造的轻量化语音开黑工具。这一次，我们将视觉语言彻底转向 **Y2K 千禧年美学 × Windows 98 经典界面** 的融合。

想象一台 1999 年的 Windows 98 电脑，显示器是厚重的 CRT，桌面上浮着几个应用程序窗口。你双击 "SQUADLINK.EXE"，一个经典的灰色窗口弹出来，里面有凹陷的输入框、凸起的 3D 按钮、蓝色的标题栏——但所有的强调色都是刺眼的荧光粉、青、橙、绿。

**核心气质：粗糙、立体、怀旧、刺眼。**

---

## 二、色彩系统

### 2.1 Windows 98 框架色

| Token | Hex | 名称 | 使用场景 |
|-------|-----|------|---------|
| `win-desk` | `#008080` | 经典青绿 | **页面主背景**。Windows 98 最标志性的桌面色 |
| `win-gray` | `#C0C0C0` | 按钮灰 | 窗口背景、按钮底色、面板 |
| `win-light` | `#FFFFFF` | 高光白 | 凸起边框的上/左边 |
| `win-highlight` | `#DFDFDF` | 浅灰 | 窗口外边框、滚动条轨道 |
| `win-shadow` | `#808080` | 中灰 | 凸起边框的下/右边（第二层） |
| `win-dark` | `#404040` | 深灰 | 凸起边框的下/右边（最外层） |
| `win-black` | `#000000` | 纯黑 | 窗口最外层阴影边框 |

### 2.2 Windows 98 标题栏色

| Token | Hex | 使用场景 |
|-------|-----|---------|
| `win-title` | `#000080` | 标题栏起始色（深蓝） |
| `win-title-active` | `#1084D0` | 标题栏结束色（亮蓝），与 `#000080` 组成渐变 |
| `win-title-inactive` | `#808080` → `#A0A0A0` | 非活动窗口标题栏（灰渐变） |

### 2.3 Y2K 强调色

**在灰色的 Win98 框架上，Y2K 强调色像霓虹灯一样刺眼。**

| Token | Hex | 名称 | 使用场景 |
|-------|-----|------|---------|
| `y2k-pink` | `#FF0099` | 荧光粉 | **主行动色**。START 按钮、核心图标、Logo 阴影 |
| `y2k-cyan` | `#00FFFF` | 电光青 | 次级强调、装饰、在线状态 |
| `y2k-lime` | `#CCFF00` | 荧光黄绿 | 语音激活、波形条、在线指示 |
| `y2k-orange` | `#FF6600` | 亮橙 | 分隔线、编号标签、次级按钮 |
| `y2k-purple` | `#9900FF` | 电光紫 | 特殊装饰、图标着色 |
| `y2k-red` | `#FF0000` | 纯红 | 错误、断开、警告 |
| `y2k-yellow` | `#FFFF00` | 纯黄 | 高亮、选中、特殊状态 |

### 2.4 文字色

在 Win98 灰色背景上使用黑色系文字，保持经典可读性：

| Token | Hex | 使用场景 |
|-------|-----|---------|
| `fg-primary` | `#000000` | 正文、标题 |
| `fg-secondary` | `#404040` | 次级文字、描述 |
| `fg-muted` | `#808080` | 占位符、时间戳、禁用状态 |
| `fg-inverse` | `#FFFFFF` | 深色背景上的白字（标题栏、粉色按钮上） |

---

## 三、Windows 98 组件规范

### 3.1 窗口（Window）

Win98 窗口有两层边框：

```css
.win-window {
  background: #C0C0C0;
  /* 外层 2px */
  border-top:    2px solid #FFFFFF;   /* 高光 */
  border-left:   2px solid #FFFFFF;
  border-right:  2px solid #000000;   /* 阴影 */
  border-bottom: 2px solid #000000;
  /* 外投影 */
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.25);
}
```

内容区域再包一层内边框：

```css
.win-content {
  /* 内层 2px */
  border-top:    2px solid #DFDFDF;   /* 浅灰 */
  border-left:   2px solid #DFDFDF;
  border-right:  2px solid #808080;   /* 中灰 */
  border-bottom: 2px solid #808080;
}
```

### 3.2 标题栏（Title Bar）

活动窗口使用经典蓝渐变：

```css
.win-title-bar {
  background: linear-gradient(90deg, #000080, #1084D0);
  padding: 3px 4px 3px 6px;
}
```

非活动窗口使用灰渐变：

```css
.win-title-bar-inactive {
  background: linear-gradient(90deg, #808080, #A0A0A0);
}
```

右侧三个控制按钮（最小化/最大化/关闭）：

```css
.win-title-btn {
  background: #C0C0C0;
  border-top:    1px solid #FFFFFF;
  border-left:   1px solid #FFFFFF;
  border-right:  1px solid #404040;
  border-bottom: 1px solid #404040;
  width: 16px;
  height: 14px;
  font-size: 9px;
  font-weight: bold;
  color: #000000;
}
```

### 3.3 按钮（Button）

**凸起效果**（默认态）：

```css
.win-btn {
  background: #C0C0C0;
  border-top:    2px solid #FFFFFF;
  border-left:   2px solid #FFFFFF;
  border-right:  2px solid #404040;
  border-bottom: 2px solid #404040;
  padding: 6px 16px;
}
```

**凹陷效果**（按下态）：

```css
.win-btn:active {
  border-top:    2px solid #404040;
  border-left:   2px solid #404040;
  border-right:  2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  /* 文字右下偏移 1px，模拟按下 */
  padding: 7px 15px 5px 17px;
}
```

**主按钮（Y2K 粉）**：

```css
.win-btn-primary {
  background: #FF0099;
  color: #FFFFFF;
}
```

### 3.4 输入框（Input）

Win98 输入框是**凹陷**的（与按钮相反）：

```css
.win-input {
  background: #FFFFFF;
  border-top:    2px solid #404040;   /* 阴影 */
  border-left:   2px solid #404040;
  border-right:  2px solid #FFFFFF;   /* 高光 */
  border-bottom: 2px solid #FFFFFF;
  padding: 8px 12px;
}
```

聚焦时显示经典虚线框（Dotted Focus Ring）：

```css
.win-input:focus {
  outline: 1px dotted #000000;
  outline-offset: -4px;
}
```

### 3.5 分组框（Group Box）

Win98 的分组框有凹陷边框，左上角带标签：

```css
.win-group {
  border-top:    2px solid #808080;
  border-left:   2px solid #808080;
  border-right:  2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  padding: 12px;
  position: relative;
}

.win-group-label {
  position: absolute;
  top: -9px;
  left: 12px;
  background: #C0C0C0;   /* 与窗口同色，覆盖边框 */
  padding: 0 6px;
  font-family: monospace;
  font-size: 11px;
  font-weight: bold;
}
```

### 3.6 列表项（List Item）

```css
.win-list-item {
  padding: 4px 8px;
  cursor: pointer;
}

.win-list-item:hover,
.win-list-item-selected {
  background: #000080;   /* 选中用深蓝 */
  color: #FFFFFF;
}
```

### 3.7 状态栏（Status Bar）

```css
.win-status-bar {
  border-top:    2px solid #FFFFFF;
  border-left:   2px solid #FFFFFF;
  border-right:  2px solid #808080;
  border-bottom: 2px solid #808080;
  background: #C0C0C0;
  padding: 2px 6px;
}
```

### 3.8 分隔线

```css
.win-hr {
  height: 2px;
  border: none;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #FFFFFF;
}
```

### 3.9 滚动条

Win98 经典滚动条：

```css
::-webkit-scrollbar {
  width: 16px;
  background: #DFDFDF;
}
::-webkit-scrollbar-track {
  background: #DFDFDF;
  border-left: 1px solid #808080;
}
::-webkit-scrollbar-thumb {
  background: #C0C0C0;
  border-top:    2px solid #FFFFFF;
  border-left:   2px solid #FFFFFF;
  border-right:  2px solid #404040;
  border-bottom: 2px solid #404040;
}
::-webkit-scrollbar-button {
  background: #C0C0C0;
  /* 同 thumb 的凸起边框 */
}
```

---

## 四、桌面环境规范

### 4.1 桌面背景

```css
body {
  background-color: #008080;   /* 经典 Windows 98 青绿色桌面 */
}
```

### 4.2 桌面图标

- 图标下方文字带**黑色描边阴影**（模拟 Win98 桌面文字效果）
- Hover 时文字背景变为 `#000080`（深蓝），文字变白
- 文字大小：11px，居中，最多两行

```css
.desktop-icon-label {
  font-size: 11px;
  color: #FFFFFF;
  text-align: center;
  text-shadow: 1px 1px 0 #000000;
}

.desktop-icon:hover .desktop-icon-label {
  background: #000080;
  color: #FFFFFF;
}
```

### 4.3 任务栏（Task Bar）

```css
taskbar {
  background: #C0C0C0;
  border-top: 2px solid #FFFFFF;
  padding: 2px;
}
```

- 左侧：Start 按钮（带 Y2K 粉 Windows Logo `█`）
- 中间：已打开的程序按钮（凸起的 `win-btn`）
- 右侧：系统托盘 + 时间显示（凹陷的 `win-status-bar`）

---

## 五、CSS 变量定义

```css
:root {
  /* Win98 */
  --win-gray: #C0C0C0;
  --win-light: #FFFFFF;
  --win-highlight: #DFDFDF;
  --win-shadow: #808080;
  --win-dark: #404040;
  --win-black: #000000;
  --win-desk: #008080;
  --win-title: #000080;
  --win-title-active: #1084D0;

  /* Y2K */
  --y2k-pink: #FF0099;
  --y2k-cyan: #00FFFF;
  --y2k-lime: #CCFF00;
  --y2k-orange: #FF6600;
  --y2k-purple: #9900FF;
  --y2k-red: #FF0000;
  --y2k-yellow: #FFFF00;

  /* Text */
  --fg-primary: #000000;
  --fg-secondary: #404040;
  --fg-muted: #808080;
  --fg-inverse: #FFFFFF;
}
```

---

## 六、字体搭配

| 层级 | 字体 | 风格 |
|------|------|------|
| 窗口标题 / 按钮 | `JetBrains Mono` | 等宽，像系统字体 |
| 大标题 / Logo | `Chakra Petch` | 几何科技，粗野感 |
| 正文 / 聊天 | `Noto Sans SC` | 清晰中文黑体 |

所有文字尽可能使用 **等宽字体** 来强化复古计算机感。

---

## 七、Y2K 装饰元素

### 7.1 浮动几何
页面上散布旋转的方形、六角星，颜色为 Y2K 荧光色，低透明度：

- 粉色星 `#FF0099` / 橙色星 `#FF6600`
- 绿色星 `#CCFF00` / 青色星 `#00FFFF`
- 像素方块（旋转 45°）

### 7.2 故障文字（Glitch）
用于特殊标题，粉色和青色两层错位：

```css
.y2k-glitch::before { color: #FF0099; }
.y2k-glitch::after  { color: #00FFFF; }
```

### 7.3 Logo 阴影
SQUADLINK 标题使用粉色硬阴影偏移：

```css
text-shadow: 2px 2px 0 #FF0099;
```

---

## 八、页面场景示例

### 8.1 首页（Home）
- 背景：`#008080` 青绿桌面
- 桌面图标：我的电脑、房间列表、系统设置（带文字标签）
- 中央窗口：`SQUADLINK.EXE`
  - 标题栏：蓝渐变 + Radio 图标 + `_` `□` `×`
  - Logo：SQUADLINK + 粉色硬阴影
  - 输入框：凹陷白底 + `#` 前缀
  - START 按钮：`#FF0099` 粉底 + 凸起边框
  - HOW TO USE 分组框
  - SYSTEM_LOG 分组框
  - 状态栏
- 底部任务栏：Start 按钮 + 时间

### 8.2 聊天室（Rooms）
- 背景：`#008080` 青绿桌面
- 桌面图标：我的电脑、好友列表、离开房间
- 左侧窗口：`ONLINE_USERS.EXE` — 玩家列表（深蓝选中态）
- 中央窗口：`CHAT_ROOM.EXE` — 聊天内容 + 输入区
- 底部任务栏：Start + 已打开的程序按钮 + 系统托盘

---

## 九、核心记忆点

1. **`#008080` 青绿桌面** — Windows 98 最标志性的颜色，一眼回到 1999
2. **`#C0C0C0` 灰色窗口 + 3D 凸起边框** — 每个按钮、每个窗口都有高光和阴影
3. **`#000080` → `#1084D0` 蓝色标题栏** — 活动窗口的灵魂
4. **`#FF0099` 荧光粉 START 按钮** — Y2K 的霓虹灯在 Win98 的灰色世界中亮起
5. **凹陷输入框 + 凸起按钮 + 分组框** — 全套 Windows 98 控件语言
6. **没有圆角，全是直角和 2px 硬边框** — 像素时代的粗野美学

---

> SquadLink —— 双击 SQUADLINK.EXE，灰色窗口弹出，输入频道 ID，点击 START，黑屏亮起，光标跳动，队友上线。
