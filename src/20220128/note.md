### React 优化

## 减少渲染
- purecompent，shouldComponentUpdate，useMemo，React.memo，useCallback
- 缓存reactElement
- context变化，不会被阻止
- 适用场景，数据量大、表单组件、距离Root近的组件

## 组件懒加载
- React.lazy
- ErrorComponent (componentDidCatch / getDerivedStateFromError)
- 数组使用key

## 大数据优化
- 虚拟列表
- 时间分片

## 通用
- 防抖截流
- 按需引入
- React动画

