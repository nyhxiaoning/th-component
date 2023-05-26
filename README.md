## vueplugin

## vue3 开发组件库汇总。

## 特别说明

- 这里的组件库开发完成后，使用的样式都是自己自定义的实现样式和相关的市面 UI 框架不产生耦合。

- 适用于自己私有化定制：这种私有化定制非常深，导致不需要 UI。

## 总结一下组件库开发方案。

### Vue 组件库（不带组件库，自己写样式，自己写实现）

不需要外部 UI 框架非常私有化的组件实现方案。

这里用 Toast 组件为例。

```
\th-component\src\components\Toast\index.ts
```

### headless 组件库

和 UI 库无关。
[技术调研](https://juejin.cn/post/7170302046078238757)

### 组件库基于 elementPlus

- 方法 1：直接在源码上面改出一套公司内部使用的。
  patch-module 模块进行调试。
  这样 npm 包可以自行修改。

- 方法 2：使用当前的框架 UI 中进行引入二次封装。
  使用 components 文件夹中放入自己二次封装的组件实现。

- 方法 3：直接在源码中重新创建新的文件夹。
  这个和方法 1 有一点区别：就是增量修改，不在源码上面修改，但是也是在源码文件夹，
  最后还是通过 patch-module 使用。

### 组件库基于 antDesing

和上面基于 elementPlus 相同的实现思路。



## 目前使用方法：纯组件实现使用:测试使用案例使用
开发完成当前的包之后，先执行npm link然后默认会安装到全局，然后，可以在本机的任意位置，通过npm link packag-name进行安装。
~~~
- 第一步
找到一个vue项目
- 第二步
项目根路径下面进行npm link package-name
比如这里package-name是th-bricks-demo
那么给当前的记录

- 第三步
项目中使用
import { createApp } from 'vue'
import App from './App.vue'
import thBricks from 'th-bricks'
import 'th-bricks/dist/bundle.css'
import router from './router'
import store from './store'
createApp(App)
.use(store)
.use(router)
.use(thBricks)
.mount('#app')

- 第四步测试完成npm发布
（1）发布npm
（2）首先查看是否登录 npm whami
（3）如果已经登录就直接跳过，否则使用npm login进行登录，没有npm账号的就需要注册一个了
（4）发布npm publish

~~~
















