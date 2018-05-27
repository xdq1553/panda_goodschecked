import { HomeSort } from "../components/Footer";

export class Mycenter extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(1);
    }

    render(){
        return (
            <div>
                <div className="bgpic">
                    <p className="setting"><span className="iconfont icon-shezhi"></span></p>
                    {/* 头像 */}
                    <div className="header">
                            <img src="" />
                    </div>
                    {/* 登录 */}
                    <div className="login">
                        <p className="clicklogin">点击登录</p>
                        <ul>
                            <li> 
                                <div className="pic">
                                    <p className="list"><span className="iconfont icon-dingdan"></span></p>
                                    <p className="text">我的订单</p>
                                </div>
                                <p className="line"></p>
                            </li>
                            <li> 
                                <div className="pic">
                                    <p className="list"><span className="iconfont icon-gouwuche"></span></p>
                                    <p className="text">淘宝购物车</p>
                                </div>
                                <p className="line"></p>
                            </li>
                            <li> 
                                <div className="pic">
                                    <p className="list"><span className="iconfont icon-shoucang1"></span></p>
                                    <p className="text">收藏商品</p>
                                </div>
                                <p className="line"></p>
                            </li>
                            <li> 
                                <div className="pic">
                                    <p className="list"><span className="iconfont icon-zuji"></span></p>
                                    <p className="text">浏览足迹</p>
                                </div>
                                <p className="line"></p>
                            </li>

                        </ul>
                    </div>
                </div>
                <HomeSort />
            </div>
            
        )
    }
}