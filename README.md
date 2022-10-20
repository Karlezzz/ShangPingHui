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



## 9.25学习

### 内容

1.Nav组件在Home组件下一直展示，在Search组件下被动展示。在Search组件下，Nav组件展示增加过度动画

2.合并提交给Search路由组件的参数。点击Nav提交query参数，搜索框提交params参数，对其进行合并提交

3.安装配置mockjs插件，获取虚拟随机数据

### 重点

1.数据请求优化，避免使用Nav时多次请求相同数据造成资源浪费。把数据请求函数放在App根组件的mounted中实现只请求一次数据

2.通过v-show来实现Nav组件在不同情况下的展示状态

3.过渡动画需要在有v-if、v-show的情况下使用，再次学习过度动画的实现。transition标签加name，简化less书写。

​	.className-动作（开始状态） .className-动作-to（结束状态） .className-动作-active（动画调用）

​	tip：在 .className-动作-active加入overflow:hidden 避免文字提前展示

4.如果需要用params传参，路由配置中需要在path中添加预定key值（' search/:keyword1/:keyword2/.../? '）

​	需要在Nav和搜索框中分别设置参数组合

5.mockjs，提供随机虚拟数据。



## 9.26学习

### 内容

1.使用swiper实现轮播图

2.实现向mock请求数据，动态配置Banner、Floor组件数据

3.封装轮播图，形成Carousel组件

### 重点

1.实现swiper：

​	①引入依赖包（swiper.js/swiper.css）

​	②配置相应template

​	③初始化swiper实例：在watch中，使用$nextTick()初始化swiper，启用立即监听：immediate：true

2.$nextTick:在下次DOM更新循环结束后，执行回调。在修改数据之后，立刻执行方法



## 9.28学习

### 内容

1.配置Search组件

2.配置Search的api请求，使用post方法，需要至少一个空对象作为参数 request({path:'/list', method:"post", params})

3.配置vuex，actions -> mutations -> state -> Search下dispatch

### 重点

在post请求中，需要传入至少一个空对象最为参数



## 10.10学习

### 内容

1.动态获取search页导航栏内容

2.实现传参查找商品，nav参数和搜索框参数结合，动态返回商品列表

### 重点

对于搜索，用到watch监听route，因为每次搜索都是路由传参从而导致数据持续变化，watch能持续获取数据



## 10.15学习

### 内容

nav数据，search数据，品牌信息和商品属性添加到面包屑

#### 重点

1.nav导航面包屑：

​	①通过vuex获取nav点击的信息

​	②删除：让searchParmas变成空对象，删去所有搜索信息，再路由跳/search，传入search搜索信息（params）

2.search搜索面包屑

​	①通过vuex获取search搜索信息

​	②删除：让keyword为空即可删去search信息，然后路由跳转/search，传入nav点击信息（query）

3.品牌面包屑和属性面包屑

​	①因为在子组件中，需要用进行数据子传父，用了自定义事件，改变searchParams数据，然后需要重新获取数据getDate()。注意：需要判断props数组中是否有重复数据，防止商品属性重复选择（数组去重）

​		自定义事件：

​			子：this.$emit('方法名1',数据)

​			父：在子标签中：@方法名1=“方法名2”，methods{  方法名2（参数）{}   }

​	②删除：删去props数组中指定元素(props.splice())，重新获取数据getDate()

tip:search和nav不用获取数据是因为进行路由跳转带参数，而其他没用进行路由跳转



## 10.20学习

### 内容

1.内容排序

2.封装分页器组件（编写分页器逻辑）

### 重点

1.内容排序

​	①根据searchParams.order来进行排序规则

​	②学习运用阿里icon

​	③计算属性：

​		判断order为1还是2，来决定被选中样式	判断order为desc还是asc，决定icon图标

​	④orderType(flag) 在不同项目中传入不同flag值，代表order的数字。 再次判断原本是否为降序，是则改为asc否则改为desc。（三元运算），重新获取数据getDate()

2.封装分页器组件Pagination

​	①参数有pageNo（当前页），pageSize（一页内容数），total（总内容数），continues（连续页个数）

​	②连续页的start和end逻辑：

```javascript
let start, end = 0
const {
    totalPage,
    continues,
    pageNo
} = this
if (totalPage >= continues + 4) {  //4:首尾页各1，省略号至少代表一页 2
	if (pageNo >= continues && t.pageNo <= totalPage - continues + 1) { // 当前页要处于最小最大分页省略范围内
		start = pageNo - parseInt(continues/2)
	} else {
		if (pageNo < continues) { 
			start = 1
        } else if (pageNo > totalPage - continues + 1) {
            start = totalPage - continues + 1
        }
    }
    end = start + continues - 1
} else {  
    start = 1
    end = totalPage
}
return {
    start,
    end
}
```



