:: BASE_DOC ::

## API
### Checkbox Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
align | String | left | 多选框和内容相对位置。可选项：left/right | N
checkAll | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N
checked | Boolean | false | 是否选中 | N
defaultChecked | Boolean | false | 是否选中。非受控属性 | N
children | TNode | - | 多选框内容，同 label。TS 类型：`string | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
content | TNode | - | 多选框内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
contentDisabled | Boolean | - | 是否禁用组件内容（content）触发选中 | N
disabled | Boolean | undefined | 是否禁用组件 | N
icon | Array | - | 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。TS 类型：`Array<TNode>`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
indeterminate | Boolean | false | 是否为半选 | N
label | TNode | - | 主文案。TS 类型：`string | TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts) | N
maxContentRow | Number | 5 | 内容最大行数限制 | N
maxLabelRow | Number | 3 | 主文案最大行数限制 | N
name | String | - | HTML 元素原生属性 | N
readonly | Boolean | false | 只读状态 | N
value | String / Number | - | 多选框的值。TS 类型：`string | number` | N
onChange | Function |  | TS 类型：`(checked: boolean, context: { e: ChangeEvent }) => void`<br/>值变化时触发 | N

### CheckboxGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
disabled | Boolean | false | 是否禁用组件 | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | [] | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string | number | CheckboxOptionObj` `interface CheckboxOptionObj { label?: string | TNode; value?: string | number; disabled?: boolean; name?: string; checkAll?: true }`。[通用类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/checkbox/type.ts) | N
value | Array | [] | 选中值。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string | number>`。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/checkbox/type.ts) | N
defaultValue | Array | [] | 选中值。非受控属性。TS 类型：`CheckboxGroupValue` `type CheckboxGroupValue = Array<string | number>`。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/checkbox/type.ts) | N
onChange | Function |  | TS 类型：`(value: CheckboxGroupValue, context: CheckboxGroupChangeContext) => void`<br/>值变化时触发，`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中。[详细类型定义](https://github.com/TDesignOteam/tdesign-mobile-react/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: ChangeEvent; current: CheckboxOption | TdCheckboxProps; type: 'check' | 'uncheck' }`<br/> | N