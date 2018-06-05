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
                {/* 切换 */}
                <div className="change">
                    <div className="change_bg">
                        <div className="left">
                            <p>切换到男生版</p>
                            <p>男/女生版推荐有不同~可以随时换回女生版</p>
                        </div>
                        <div className="right">
                            <div className="change_box">
                                <div className="man">男</div>
                                <div className="woman">女</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 一些配置栏 */}
                <div className="bottom_text">
                    <div className="recommend">
                        <p>推荐APP给小伙伴<span className="iconfont icon-jiantou"></span></p>
                    </div>
                    <div className="good">
                        <p>求打分好评啊<span className="iconfont icon-jiantou"></span></p>
                    </div>
                    <div className="help">
                        <p>帮助与反馈<span className="iconfont icon-jiantou"></span></p>
                    </div>
                    <div className="regard">
                        <p>关于熊猫优选<span className="iconfont icon-jiantou"></span></p>
                    </div>
                </div>

                <HomeSort />
            </div>
            
        )
    }
}