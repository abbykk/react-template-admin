import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './Admin'
import Home from './pages/Home'
import Login from './pages/Login'
import Buttons from './pages/Ui/buttons'
import Modals from './pages/Ui/modals'
import Loadings from './pages/Ui/loadings'
import Notice from './pages/Ui/notice'
import Messages from './pages/Ui/messages'
import Tabs from './pages/Ui/tabs'
import Gallery from './pages/Ui/gallery'
import Carousel from './pages/Ui/carousel'
import FormLogin from './pages/Form/login'
import FormRegister from './pages/Form/register'
import BasicTable from './pages/Table/basicTable'
import HighTable from './pages/Table/highTable'
import City from './pages/City/index'
import Order from './pages/Order/index'
export default class ERouter extends React.Component {

    render() {
        return (
            <HashRouter>
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/"  render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/home' exact  component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
            </HashRouter>
        );
    }
}