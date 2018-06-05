import {Provider} from "react-redux"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import store from "./store"
import {HomeController as Home} from "./pages/home/Home"
import { Womancontroller} from "./pages/category/Woman"
import { Beauty } from "./pages/category/Beauty"
import { Sortcontroller } from "./pages/sort/Sort"
import { Collect } from "./pages/Collect"
import { Mycenter } from "./pages/Mycenter"


export class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/woman" component={ Womancontroller}/>
                        <Route path="/beauty" component={Beauty}/>
                        <Route path="/sort" component={Sortcontroller}/>
                        <Route path="/collect" component={Collect}/>
                        <Route path="/person" component={Mycenter }/>
                        <Redirect from="/" to="/home" exact={ true } />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}