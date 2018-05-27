
export class Search extends React.Component{
    constructor(props){
        super(props);
        //默认搜索
        this.state = {
            text : "短袖  男"
        }
    }
    // 显影
    showman(){
        let man = document.getElementsByClassName("man")[0];
        let woman  = document.getElementsByClassName("woman")[0];
        man.style.display = "none"; 
    }
    showwoman(){
        let man = document.getElementsByClassName("man")[0];
        let woman  = document.getElementsByClassName("woman")[0];
        man.style.display = "block"; 
    }

    render(){
        console.log(this.props.location);
        if(this.props.location.pathname == "/home"){
            return (
                <div className="search_box">
                    {/* 男女切换 */}
                    <div className="change_box">
                        <div className="man" onClick={this.showman.bind(this)}>男</div>
                        <div className="woman" onClick={this.showwoman.bind(this)}>女</div>
                    </div>
                    {/* 搜索栏 */}
                    <div className="input_box">
                        <span className="iconfont icon-sousuoicon"></span>
                        <span className="word">{this.state.text}</span>
                        {/* <input type="text" placeholder={this.state.text} /> */}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="search_box">
                    {/* 搜索栏 */}
                    <div className="input_box" style={{width:"10.08rem"}}>
                        <span className="iconfont icon-sousuoicon"></span>
                        <span className="word">{this.state.text}</span>
                        {/* <input type="text" placeholder={this.state.text} /> */}
                    </div>
                </div>
            )
        }
        
    }

}