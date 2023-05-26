##  vueplugin

## vue3开发组件库汇总。


## 特别说明
- 这里的组件库开发完成后，使用的样式都是自己自定义的实现样式和相关的市面UI框架不产生耦合。

- 适用于自己私有化定制：这种私有化定制非常深，导致不需要UI。



## 总结一下组件库开发方案。

### Vue组件库（不带组件库，自己写样式，自己写实现）
不需要外部UI框架非常私有化的组件实现方案。

这里用Toast组件为例。

### headless组件库
和UI库无关。

### 组件库基于elementPlus
- 方法1：直接在源码上面改出一套公司内部使用的。
patch-module模块进行调试。
这样npm包可以自行修改。

- 方法2：使用当前的框架UI中进行引入二次封装。
使用components文件夹中放入自己二次封装的组件实现。

- 方法3：直接在源码中重新创建新的文件夹。
这个和方法1有一点区别：就是增量修改，不在源码上面修改，但是也是在源码文件夹，
最后还是通过patch-module使用。



### 组件库基于antDesing
和上面基于elementPlus相同的实现思路。



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
