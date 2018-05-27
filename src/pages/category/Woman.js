import { HomeCategory } from "../../components/Header";
import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";

export class Woman extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(1);
    }

    render(){
        return (
            <div>
                <Search location={ this.props.location }  />
                <HomeCategory />
                <h1>1111</h1>
                <HomeSort />
            </div>
        )
    }
}