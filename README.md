# 尚品汇vue项目

## 9.22学习

### 内容

完成非路由组件的配置（Header、Footer）

添加路由器和路由组件，实现了点击 登录、注册 进行路由跳转(Login、Register)

### 注意

样式使用less需要less-loader(npm i less-loader@3.0.0)

路由中路径跳转用 to=”***“



## 9.23学习

### 内容

1.完成首页中各组件的配置，配置template、css

2.重写路由push和replace方法，实现search提交多次不报错

3.重写axios，配置基本路径'/api'。重写axios请求拦截器和响应拦截器，实现请求结果、响应结果反馈

4.统一管理接口，封装接口请求方法

5.解决跨域问题，vue.config.js配置，利用webpack文档

### 重点

1.axios二次封装，axios拦截器重写

2.重写路由push和replace方法

3.封装接口统一管理方法



## 9.24学习

### 内容

1.使用nprogress进度条，展现请求资源加载进度

2.配置vuex

3.解决导航栏三级联动数据请求及展现

4.实现导航栏三级联动点击路由跳转

### 重点

1.vuex：模块化处理

​	①配置store：state,actions,mutations,getter。对外暴露，路由器index.js分别引入需要的模块

​	②actions放置数据请求方法，mutations放置数据处理方法

​	③使用async，await异步请求api数据，请求成功后通过commit将数据传到mutations中的对应方法从而处理state中数据

​	tip：可以对context参数进行结构赋值直接传到actions的方法中{commit}

​	⑤在组件中，使用计算属性获取vuex数据。...mapState获取数据

​	⑥mounted来将请求提交到actions

2.三级联动路由设置：

​	①对标签的父div添加编程式路由，用事件委派对子目标实现路由设置

​	②对需要路由的标签添加自定义属性（：属性名），让路由跳转函数判读是否存在该自定义属性从而让其实现路由跳转

​	③获取自定义属性：event.target.dataset返回数据对象
