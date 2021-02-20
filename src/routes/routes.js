import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import Menu from '../components/Menu';


class Routes extends React.Component {
    render(){
    return (
        <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/" component={Main} />
        </Switch>
        )
    }
}
export default withRouter(Routes)