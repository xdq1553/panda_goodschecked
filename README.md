# panda_goodschecked
这是熊猫优选的仿写

>#### 一、第一次修改

>1、利用react的脚手架工具搭建了环境
    npm i

>2、简单的搭建了home、sort、collect和mycenter页面

>3、谢了一些简单的静态页面


>#### 二、第二次修改

>1、针对home页导航、搜索写了公共插件

>2、同时自己写了一些假数据，通过redux的数据流方法，把数据成功渲染到页面

>3、引入swiper轮播图的插件并实现

>4、完成了大部分静态页的书写

>#### 三、第三次修改

>1、详细写了一个react组件的选项卡

>2、选项卡中用到了react.children的方法

        // 这里遍历子元素，获取点击的当前class名，
            let btn_box = React.Children.map(this.props.children,(node,index) => {
            
                return(
                    // 这里使用匿名函数，不用再生命周期和点击函数中再更新数据
                    // 点击事件，改变当前下标，同时classname执行函数方法返回当前类名
                    <li onClick = { ()=>{ this.setState({ current_index: index }) } }  className={ this.btn_click(index) }>
                        {node.props.name}
                    </li>
                )
            })
            // 这里遍历子元素，获取下标，改变内容
            let content_box = React.Children.map(this.props.children,(node,index) => {
                return(
                    <div onClick = { ()=>{ this.setState({ current_index: index }) } }  className={ this.content_change(index) } >
                        { node }
                    </div>
                )
            })

