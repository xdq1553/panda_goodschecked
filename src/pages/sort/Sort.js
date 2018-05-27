import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";
import { CategoriesController } from "../../components/Categories";
import { connect } from "react-redux";
import { categoryUpdate } from "../../actions"

class Sort extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(1);
    }

    render(){
        // 加载数据
        console.log(this.props.navList)
        let navList = this.props.navList.map((category,i)=>{
            // let sortlist = category.sort.map((item,j)=>{
            //     console.log(item.sortImg)
            //     return (
            //         <li key={j}>
            //             <a name=""> 
            //                 <div className="pic"><img src={item.sortImg}/></div>
            //                 <p>{item.sortName}</p>
            //             </a>
            //         </li>
            //     )
            // })

            return (
                <div className="right" key={i}>
                    <p className="sortName"><span className="iconfont icon-fengexianzuo"></span>{category.name}<span className="iconfont icon-fengexianyou"></span></p>
                    <div className="sortbottom">
                        <ul>
                            {/* {sortlist} */}
                            <li>
                                <a name="man"> 
                                    <div className="pic"><img src=""/></div>
                                    <p>111</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Search location={ this.props.location }  />
                <CategoriesController />
                {/* 右边的分类 */}
                <div className="rightCategory">
                    {navList}
                </div>
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
export const Sortcontroller = connect(mapStateToProps,mapDispatchToProps)(Sort);