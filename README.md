# 尚品汇vue项目

## 9.22学习

> ### 内容
>

完成非路由组件的配置（Header、Footer）

添加路由器和路由组件，实现了点击 登录、注册 进行路由跳转(Login、Register)

> ### 注意
>

样式使用less需要less-loader(npm i less-loader@3.0.0)

路由中路径跳转用 to=”***“



## 9.23学习

> ### 内容
>

1.完成首页中各组件的配置，配置template、css

2.重写路由push和replace方法，实现search提交多次不报错

3.重写axios，配置基本路径'/api'。重写axios请求拦截器和响应拦截器，实现请求结果、响应结果反馈

4.统一管理接口，封装接口请求方法

5.解决跨域问题，vue.config.js配置，利用webpack文档

> ### 重点
>

1.axios二次封装，axios拦截器重写

2.重写路由push和replace方法

3.封装接口统一管理方法



## 9.24学习

> ### 内容
>

1.使用nprogress进度条，展现请求资源加载进度

2.配置vuex

3.解决导航栏三级联动数据请求及展现

4.实现导航栏三级联动点击路由跳转

> ### 重点
>

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

> ### 内容
>

1.Nav组件在Home组件下一直展示，在Search组件下被动展示。在Search组件下，Nav组件展示增加过度动画

2.合并提交给Search路由组件的参数。点击Nav提交query参数，搜索框提交params参数，对其进行合并提交

3.安装配置mockjs插件，获取虚拟随机数据

> ### 重点
>

1.数据请求优化，避免使用Nav时多次请求相同数据造成资源浪费。把数据请求函数放在App根组件的mounted中实现只请求一次数据

2.通过v-show来实现Nav组件在不同情况下的展示状态

3.过渡动画需要在有v-if、v-show的情况下使用，再次学习过度动画的实现。transition标签加name，简化less书写。

​	.className-动作（开始状态） .className-动作-to（结束状态） .className-动作-active（动画调用）

​	tip：在 .className-动作-active加入overflow:hidden 避免文字提前展示

4.如果需要用params传参，路由配置中需要在path中添加预定key值（' search/:keyword1/:keyword2/.../? '）

​	需要在Nav和搜索框中分别设置参数组合

5.mockjs，提供随机虚拟数据。



## 9.26学习

> ### 内容
>

1.使用swiper实现轮播图

2.实现向mock请求数据，动态配置Banner、Floor组件数据

3.封装轮播图，形成Carousel组件

> ### 重点
>

1.实现swiper：

​	①引入依赖包（swiper.js/swiper.css）

​	②配置相应template

​	③初始化swiper实例：在watch中，使用$nextTick()初始化swiper，启用立即监听：immediate：true

2.$nextTick:在下次DOM更新循环结束后，执行回调。在修改数据之后，立刻执行方法



## 9.28学习

> ### 内容
>

1.配置Search组件

2.配置Search的api请求，使用post方法，需要至少一个空对象作为参数 request({path:'/list', method:"post", params})

3.配置vuex，actions -> mutations -> state -> Search下dispatch

> ### 重点
>

在post请求中，需要传入至少一个空对象最为参数



## 10.10学习

> ### 内容
>

1.动态获取search页导航栏内容

2.实现传参查找商品，nav参数和搜索框参数结合，动态返回商品列表

> ### 重点
>

对于搜索，用到watch监听route，因为每次搜索都是路由传参从而导致数据持续变化，watch能持续获取数据



## 10.15学习

> ### 内容
>

nav数据，search数据，品牌信息和商品属性添加到面包屑

> #### 重点
>

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

> ### 内容
>

1.内容排序

2.封装分页器组件（编写分页器逻辑）

> ### 重点
>

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



## 10.21

> ### 内容
>

完成分页器，实现分页器功能

> ### 重点
>

1.通过props，进行父传子

2.通过自定义事件，进行子传父



## 10.22

> ### 内容
>

1.完成detail静态页面，形成组件

2.使用vuex动态展示detail页面

3.完成轮播图

> ### 重点
>

1.由search到detail进行了路由跳转。

​	router属性 behavior：'smooth'，让页面跳转后滚动更顺畅

​					  y：0 让页面回到最顶端

2.①轮播图通过swiper组件来实现 ②选图片让大图展示对应图片：兄弟组件传参数用全局事件总线，通过轮播图传出对应图片id，让大图获取对应id后展示图片

###### **3.重要：**

​	一、完成一个新页面

​		①拆分静态页面和样式

​		②配置接口api

​		③配置路由

​		④配置vuex

​			1）state，actions，mutations，getters

​			2）actions：异步调用api获取数据

​			3）mutations：获取到数据后写入state

​			4）getters：计算state属性，让组件调用更简单

​			5）对应组件在mounted中dispatch来请求数据



## 10.23

> ### 内容
>

1.完成detail页面数量选择，加入购物车跳转

2.完成成功添加购物车组件

> ### 重点
>

1.选择数量为input框，防止用户输入非法内容，需要进行判断

2.配置add组件api

3.配置vuex

​	①因为不是请求数据，所以只需要配置actions。如果异步请求失败，返回promise.reject()

​	②当点击加入购物车，实行异步操作，使用try catch 来处理请求。成功则将detail数据传入会话存储空间，并进行路由跳转到AddCartSuccess（query）

4.动态展示add组件内容 



## 10.24

> ### 内容
>

1.返回detial

2.购物车静态组件

3.发请求，获取购物车数据，配置vuex，组件展示数据

4.用nanoid给游客身份

5.改变商品数量

> ### 重点
>

1.返回detial。通过获取sessionstorge数据，进行路由跳转

2.配置shopCart的vuex

​	重点重点：mutations：函数获取state中数据要用state.info[]，而不是this.info[]

3.因为需要总是请求数据，所以封装getData()方法

4.在ajax封装中，使用nanoid，将nanoid放入请求头中。并运用单例模式，使id唯一

5.改变数量有三种选择，通过传入不同的参数来判断数量改变方式。处理用户输入后，提交修改请求，利用promise.then()重新请求数据




## 10.31学习
> ### 内容
>

1.实现购物车删除功能，数量为0也删除

2.对数量改变进行节流

3.改变商品是否被选中，以及全选功能

4.删除选中的商品

5.注册和登录静态页面

6.完成注册页面业务逻辑，但是没有进行表单验证

7.完成登录业务逻辑

> ### 重点

1.节流使用lodash工具库，不用自行封装函数

2.删除选中商品，重新在仓库actions写方法，不在forEach中调用删除单个商品的函数是因为减少请求次数。改变全选 道理相同

3.注册逻辑，主要是通过接口调用，传入不同参数来实现注册请求

4.登录逻辑，调用登录请求后，得到token，将其存储在sessionStorage中



## 11.1

> ### 内容

1.获取token后，通过发送token验证请求，来获取用户信息，将header登录处内容改变

2.持久化储存token

> ### 重点

1.发送token，不带参数，而是利用请求拦截器发送请求头config.headers.token

2.在登录请求中，actions中将token储存到sessionStorage，state中token直接寻找sessionStorage来获取token



## 11.2

> ### 内容

1.退出登录

2.将关于token的操作进行封装

3.设置路由守卫（登录后不能跳转login，非登录不能跳转shopCart）

4.trade静态页面，配置路由跳转

> ### 重点

1.退出登录，需要将仓库token，userData清空，将sessionStorage的token清空

2.全局前置守卫：

​	当用户已经登录：

​		①token有效：用户不能跳转login

​		②token有效，有用户信息：可以通行

​		③token有效，无用户信息：先请求获取用户信息，再跳转

​		④token无效：用户退出，token清除，用户信息清除，返回login

​	

## 11.3

> ### 内容

1.配置trade的仓库和接口，获取用户地址和用户商品

2.动态展示收件人信息和提交订单上的地址

3.排他思想选择地址

4.使用find()查找，返回一个对象

### 