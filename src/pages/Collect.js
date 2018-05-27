import { HomeSort } from "../components/Footer";
import { GoodsList } from "../components/Goods";

export class Collect extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(1);
    }

    render(){
        

        return (

            <div>
                {/* 顶部收藏 */}
                <div className="collect">
                    收藏
                    <span>管理</span>
                </div>
                {/* 收藏页 */}
                <div className="collectImg">
                    {/* 我的收藏 */}
                    <div className="myCollect">
                        <div className="oneCollect">
                            <div className="left">
                                <img src="" />
                            </div>
                            <div className="right">
                                <p className="name">
                                    <span className="iconfont icon-tianmao"></span>
                                    <span className="iconfont icon-baoyou"></span>
                                    四喜家 夏日清凉感绿色/白色宽松韩版后背撞色字母印花t恤女 短袖
                                </p>
                                <p className="date">8小时后过期</p>
                                <div className="price">
                                    <p className="money"><span>¥9.8</span><span>¥12.9</span></p>
                                    <p className="chit">券15元</p>
                                </div>
                            </div>
                        </div>

                         <div className="oneCollect">
                            <div className="left">
                                <img src="" />
                            </div>
                            <div className="right">
                                <p className="name">
                                    <span className="iconfont icon-tianmao"></span>
                                    <span className="iconfont icon-baoyou"></span>
                                    四喜家 夏日清凉感绿色/白色宽松韩版后背撞色字母印花t恤女 短袖
                                </p>
                                <p className="date">8小时后过期</p>
                                <div className="price">
                                    <p className="money"><span>¥9.8</span><span>¥12.9</span></p>
                                    <p className="chit">券15元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 中间的过度 */}
                    <div className="more">
                        <p><span className="iconfont icon-fengexianzuo"></span><span className="iconfont icon-icon2 left"></span>收藏夹猜你喜欢<span className="iconfont icon-icon2 right"></span><span className="iconfont icon-fengexianyou"></span></p>
                    </div>
                    <GoodsList  />
                </div>

                <HomeSort />
            </div>
        )
    }
}