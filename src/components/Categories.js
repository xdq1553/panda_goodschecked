import { NavLink } from "react-router-dom"
import { categoryUpdate } from "../actions"
import {connect} from "react-redux"

class Categories extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = this.props.navList.map(( categroy,i)=>{
           
            return(
                <li key={i}>
                    <a href={"#"+categroy.hash}>
                        <p>{categroy.name}</p>
                    </a>
                </li>
            )
        })
        return (
            <div className="leftCategory">
                <ul>
                    {navList}
                </ul>
            </div>
        )

    }
}

// 加载数据
let mapStateToProps = ({ category }) => ({navList:category.navList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const CategoriesController = connect(mapStateToProps,mapDispatchToProps)(Categories);