- ref赋值会执行两次一次是detachRef（拆卸），一次是attachRef（装载）
- 并不是每次渲染都会重新执行ref，而是ref创建或ref指向改变时才会执行 （effectTag = Ref)    

- 高阶组件的正向模式和反向模式