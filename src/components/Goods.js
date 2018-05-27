import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { goodsshowUpdate } from "../actions";

class Goods extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let goodsList = this.props.goodsList.map((goods,i)=>{
            let backgroundColor = {background: `url(${goods.goodsImg})`,backgroundSize: `100% 100%`, };
            if(goods.type == "goods"){
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
            }else if(goods.type == "all"){
                return(
                    <li className="allList" key={i}>
                        <Link to={goods.pathname} className="goodsCategory">
                            <h1>{goods.textFirst}</h1>
                            <p className="lowPrice"><span className="iconfont icon-dian1"></span>{goods.textSecond}<span className="iconfont icon-dian1"></span></p>
                            <div className="allPic" style={backgroundColor}></div>
                            <p className="allGoods">全部商品</p>
                        </Link>
                    </li>
                )
            }
        
        })

        return (
            <div className="goods">
                <ul >
                    {/* <li>
                        <Link to="/goodsdetail" className="goodsdetail">
                        <div className="goodsImg"><img src="" /></div>
                        <p className="goodsText">宾志兰氨基酸洗面奶男士女士护肤</p>
                        <div className="cat">
                            <p className="skyCat">天猫</p>
                            <p className="pinkage">包邮</p>
                        </div>
                        <div className="money">
                            <p className="price">¥<span>7.9</span><span>222</span>人已买</p>
                            <p className="chit">15元券</p>
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/goodsdetail" className="goodsdetail">
                        <div className="goodsImg"><img src="" /></div>
                        <p className="goodsText">宾志兰氨基酸洗面奶男士女士护肤</p>
                        <div className="cat">
                            <p className="skyCat">天猫</p>
                            <p className="pinkage">包邮</p>
                        </div>
                        <div className="money">
                            <p className="price">¥<span>7.9</span><span>222</span>人已买</p>
                            <p className="chit">15元券</p>
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/goodsdetail" className="goodsdetail">
                        <div className="goodsImg"><img src="" /></div>
                        <p className="goodsText">宾志兰氨基酸洗面奶男士女士护肤</p>
                        <div className="cat">
                            <p className="skyCat">天猫</p>
                            <p className="pinkage">包邮</p>
                        </div>
                        <div className="money">
                            <p className="price">¥<span>7.9</span><span>222</span>人已买</p>
                            <p className="chit">15元券</p>
                        </div>
                        </Link>
                    </li> */}
                    {goodsList}
                    {/* <li className="allList">
                        <Link to="/goodscategory" className="goodsCategory">
                            <h1>尚热门同款</h1>
                            <p className="lowPrice"><span className="iconfont icon-dian1"></span>超低价买同款<span className="iconfont icon-dian1"></span></p>
                            <div className="allPic"></div>
                            <p className="allGoods">全部商品</p>
                        </Link>
                    </li> */}
                </ul>

            </div>
        )
    }
}
// 加载数据
let mapStateToProps = ({goods}) => ({goodsList:goods.goodsList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const GoodsList = connect(mapStateToProps, mapDispatchToProps)(Goods)