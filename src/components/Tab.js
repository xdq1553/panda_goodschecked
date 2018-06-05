import { classGoodsUpdate } from "../actions"
import {connect} from "react-redux"
import { ENGINE_METHOD_DIGESTS } from "constants";
import { Link } from "react-router-dom";

class TabControler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current_index: 0
        }
    }
    // 定义一个方法，传递形参“当前点击的下标”，触发方法改变当前的类名
    // 这是点击按钮的样式，分为当前样式btn_active_style和一般的样式btn_common_style
    btn_click = (index) => {
        // 这里使用三目运算符的方式判断当前下标，是就把当前样式赋给他
        return index === this.state.current_index ? "btn_active_style" : "btn_common_style"
       
    }
    // 定义一个方法，传递形参“当前点击的下标”，触发方法改变当前内容的类名
    // 这是点击改变的内容的样式，分为当前样式content_active_style和一般的样式content_common_style
    content_change = (index) => {
        return index === this.state.current_index ? "content_active_style" : "content_common_style"
    }
    componentWillReceiveProps(){
        // 这里可以更新数据
       
    }
    render(){
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

        return (
            <div className="tab_text">
                {/* 点击按钮 */}
                <ul className="ul_c">
                    {btn_box}
                </ul>
                {/* 改变的内容 */}
                <div className="change_box">
                    {content_box}
                </div>
            </div>
        )     
    }
}

 class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        console.log(this.props.tabs);
        let classgoods = this.props.tabs.map((goods,i)=>{
            let content = goods.goods.map((goods,i)=>{
                return (
                    <li key={i}>
                        <Link to="/goodsdetail" className="goodsdetail">
                        <div className="goodsImg"><img src={goods.goodsImg} /></div>
                        <p className="goodsText">{goods.goodsName}</p>
                        <div className="cat">
                            <p className="skyCat">天猫</p>
                            <p className="pinkage">包邮</p>
                        </div>
                        <div className="money">
                            <p className="price">¥<span>{goods.goodsPrice}</span><span>{goods.goodsBuy}</span>人已买</p>
                            <p className="chit">{goods.chit}</p>
                        </div>
                        </Link>
                    </li>
                )
            })
            return (
                <div name={goods.title} key={i}>
                    <div className="goods">
                        <ul >
                            {content}
                        </ul>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <TabControler>
                    {classgoods}
                </TabControler>
            </div>
        )
    }
}


// 加载数据
let mapStateToProps = ({ classGoods }) => ({tabs: classGoods.tabs});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})

export const Tabchange = connect(mapStateToProps,mapDispatchToProps)(Tab);