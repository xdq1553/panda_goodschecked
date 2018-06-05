import { HomeCategory } from "../../components/Header";
import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";
import { connect } from "react-redux";
import { categoryUpdate } from "../../actions"
import { Tabchange as Tab   } from "../../components/Tab";

class Woman extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(1);
    }

    render(){
        let categoryList = this.props.navList.map((category,i)=>{
        if(this.props.location.pathname == category.path){
            // 这里返回一个返回的html代码，对数据进行遍历
                   return  category.sort.map((item,j)=>{
                        return (
                            <li key={j}>
                                <a href="#"> 
                                    <div className="category_pic"><img src={item.sortImg}/></div>
                                    <p>{item.sortName}</p>
                                </a>
                            </li>
                        )
                    })
                }
        })
         
        return (
            <div>
                <Search location={ this.props.location }  />
                <HomeCategory />
                {/* 中间主体部分 */}
                <div className="woman_content">
                    {/* 头部大图 */}
                    <div className="top_bg">
                        <div className="top_flex">
                            <div className="top_pic_left">
                                <img src="http://img1.lukou.com/static/p/commodity/img/20180518-163454.png" />
                            </div>
                            <div className="top_pic_right">
                                <img src="http://img1.lukou.com/static/p/commodity/img/20180523-104306.png" />
                            </div>
                        </div>
                    </div>
                    {/* 中间分类 */}
                    <div className="middle_category">
                        <ul>
                            {categoryList}
                        </ul>
                    </div>
                </div>
                {/* 后面的选项卡 */}
                <Tab />
                <HomeSort />
            </div>
        )
    }
}


// 加载数据
let mapStateToProps = ({ category }) => ({navList:category.navList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const Womancontroller = connect(mapStateToProps,mapDispatchToProps)(Woman);