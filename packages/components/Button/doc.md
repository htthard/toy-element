# 需求分析[XQFX]组件库按钮组件

## 用户调研摘要
### 用户痛点
- 用户在使用组件库时，经常需要快速实现不同样式和功能的按钮，但现有的组件库可能样式单一、功能有限，难以满足多样化的设计需求。

### 期望功能
- 用户期望组件库能提供多种按钮样式（如基础、朴素、圆角、圆形等），支持自定义图标和加载状态，以及能够适应不同的使用场景（如禁用状态、按钮组、不同尺寸等）。

### 安全性需求
- 用户需要确保按钮组件在不同浏览器和设备上都能保持一致的表现，并且能够防止恶意代码注入，保障页面安全。

## 竞品对比报告
- 竞品A提供了丰富的按钮样式和图标，但在自定义标签和节流模式上支持不足。
- 竞品B在按钮尺寸和类型上有较多选择，但缺乏对加载状态的自定义支持。
- 竞品C在安全性和跨平台兼容性上表现优秀，但在UI自定义性上较为保守。

## 市场趋势分析
- 当前市场上对于组件库的需求趋向于高自定义性、易用性和安全性。
- 用户越来越重视组件的响应式设计和跨平台兼容性。
- 随着Web应用的复杂度增加，用户对于组件的性能和节流模式的需求也在上升。

# 功能点设计[GNSJ]

## 功能描述
- **基础用法**：提供基础按钮样式，支持类型、朴素、圆角和圆形等属性定义。
- **禁用状态**：通过`disabled`属性定义按钮的禁用状态。
- **图标按钮**：使用`icon`属性定义按钮图标，支持多种图标。
- **按钮组**：通过`<er-button-group>`实现多个按钮的分组。
- **加载状态**：通过`loading`属性定义按钮的加载状态，支持自定义加载图标。
- **按钮尺寸**：通过`size`属性定义按钮的尺寸，包括大、默认和小三种尺寸。
- **自定义标签**：通过`tag`属性自定义按钮的HTML标签。
- **节流模式**：通过`useThrottle`属性定义按钮是否使用节流模式。

## API设计
### Props
| Name          | Description                            | Type             | Default |
| ------------ | ------------------------------ | --------------- | ------- |
| size         | 尺寸                                  | `enum` \- `'large'| 'default'| 'small'` | — |
| type         | 类型                                  | `enum` \- `'primary'| 'success'| 'warning'| 'danger'| 'info'` | info |
| plain        | 是否为朴素按钮                          | `boolean`        | false   |
| round        | 是否为圆角按钮                          | `boolean`        | false   |
| circle       | 是否为圆形按钮                          | `boolean`        | false   |
| loading      | 是否为加载中状态                        | `boolean`        | false   |
| loading-icon | 自定义加载中状态图标组件                  | `string`         | spinner |
| disabled     | 按钮是否为禁用状态                      | `boolean`        | false   |
| icon         | 按钮图标                              | `string`         | -       |
| autofocus    | 是否自动聚焦(原生 `autofocus` 属性)        | `boolean`        | false   |
| native-type  | 原生 type 属性                          | `enum` \- `'button'| 'submit'| 'reset'` | button |
| tag          | 自定义元素标签                          | `string`/ `Component` | button  |
| use-throttle | 是否使用节流模式                        | `boolean`        | true    |
| throttle-duration | 节流模式下，节流时间间隔(ms)        | `number`         | 500     |

### Events
| Name  | Description             | Type                |
| ----- | --------------------- | ------------------ |
| click | 按钮点击事件             | `(event: MouseEvent)=> void` |

### Slots
| Name    | Description          |
| ------- | -------------------- |
| default | 默认插槽, 按钮内容    |
| loading | 自定义加载图标       |

## 交互关系
- 用户可以通过设置不同的属性来改变按钮的外观和行为。
- 按钮组内的按钮可以共享某些属性，如尺寸和类型。
- 加载状态和禁用状态可以独立控制，以适应不同的使用场景。
- 自定义标签允许按钮在不同上下文中以不同形式展现，如`div`、`a`等。