// React core module
import React from "react";
import ReactDOM from "react-dom";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {Provider} from "react-redux";
// Reducer
import configureStore from "./stores/configureStore";
// Theme
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import muiTheme from "./config/material-ui-config";
//
import {
    Home,
    About,
    AdminPage,
    App,
    Cart,
    Checkout,
    Login,
    LoginPage,
    OrderReceived,
    OrderTracking,
    PageNotFound,
    Wishlist,
    Slinker,
    Answer,
    BestSeller,
    DetailProduct,
} from "./components";

import "../styles/index.scss";
// Import our component

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/user/login-register" component={Login}/>
                    {/**/}
                    <Route path="/order/cart" component={Cart}/>
                    <Route path="/order/checkout" component={Checkout}/>
                    <Route path="/order/received" component={OrderReceived}/>
                    <Route path="/order/tracking" component={OrderTracking}/>
                    {/**/}
                    {/**/}
                    <Route path="/about" component={About}/>
                    <Route path="/best-seller" component={BestSeller}/>
                    <Route path="/detail-product" component={DetailProduct}/>
                </Route>
                <Route path={'/admin/login'} component={LoginPage}/>
                <Route path="/admin" component={AdminPage}>
                </Route>
                <Route path='/caller' component={Slinker}/>
                <Route path='/answer' component={Answer}/>
                <Route path='*' component={PageNotFound}/>
            </Router>
        </Provider>
        </ MuiThemeProvider >,
        document.getElementById('app')
    );

    if (module.hot) {
        module.hot.accept();
    }
