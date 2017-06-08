/**
 * Created by slinker on 12/13/16.
 */
// Core
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
// Import reducer
import init from "./init";
import admin from "./admin";
import facebook from "./facebook";

export default combineReducers({
    init,
    admin,
    facebook,
    routing: routerReducer
});
