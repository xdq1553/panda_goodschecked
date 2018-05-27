import { NavLink } from "react-router-dom"
import { categoryUpdate } from "../actions"
import {connect} from "react-redux"
import { ENGINE_METHOD_DIGESTS } from "constants";


class Header extends React.Component {
    constructor(props){
        super(props);
    }
    //点击按钮的方法
    showCategory(){
       let nav = document.getElementsByClassName("nav")[0];
       let navuser = nav.children[0];
       let downMenu = nav.children[1];
        navuser.style.display = "none";
        downMenu.style.display  = "block";
       
    }
     //点击按钮的方法
     closeCategory(){
        let nav = document.getElementsByClassName("nav")[0];
        let navuser = nav.children[0];
        let downMenu = nav.children[1];
        navuser.style.display = "block";
        downMenu.style.display  = "none";
        
     }

    render(){
        let navList = this.props.navList.map((category,i)=>{
            return (
                <li key={i}>
                    <NavLink to = {category.path}   className="category" activeClassName = "active">
                        <p>{category.name}</p>
                    </NavLink>
                </li>
            )
        })
        // 图片
        let sortList = this.props.navList.map((category,i)=>{
            return (
                <li key={i}>
                    <NavLink to = {category.path}>
                        <div className="img"><img src={category.img} /></div>
                        <p>{category.name}</p>
                    </NavLink>
                </li>
            )
        })

        return(
            <div className="nav">
                <div className="nav_1">
                    {/* 今日推荐 */}
                    <p  className="recommend"  >
                        <NavLink to = "/home" activeClassName = "active">今日推荐</NavLink>
                    </p>
                    {/* 中间分类 */}
                    <div className= "navmove">
                        <ul>
                            {navList}
                        </ul>
                    </div>
                    {/* 点击分类 */}
                    <div className = "category_check" onClick={this.showCategory.bind(this)}>
                        <span className="iconfont icon-fenlei"></span>
                    </div>
                </div>

                {/*  下拉菜单 */}
                <div className="downMenu" >
                    <div className="top_1">
                        <p className="top">
                            全部分类<span className="iconfont icon-quxiao" onClick={this.closeCategory.bind(this)}></span>
                        </p>
                    </div>
                    <div className="allsort">
                        <ul>
                            <li>
                                <a href="/home">
                                    <div className="img"><img src="http://img1.lukou.com/static/p/fb/tab/1.png" /></div>
                                    <p>今日推荐</p>
                                </a>
                            </li>
                            {sortList}
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
    
}

// 加载数据
let mapStateToProps = ({category}) => ({navList:category.navList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const HomeCategory = connect(mapStateToProps,mapDispatchToProps)(Header);