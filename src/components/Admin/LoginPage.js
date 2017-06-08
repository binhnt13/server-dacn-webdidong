/**
 * Created by slinker on 4/15/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {hashHistory} from "react-router";
//
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ThemeDefault from "../../theme-default";
// Import actions
import {AdminActions as actions} from "../../actions";
//
import {LoginPageStyle as styles} from "./Styles";
import Progress from "../Progress";

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            isProgress: false,
            username: 'admin',
            password: '123456',
            errorText: '',
            isAdmin: true
        };
        this.login = this.login.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillMount() {

        if (this.props.isAuthen) {
            hashHistory.replace('/admin');
        }
    }

    onChangeHandler(params, e) {
        switch (params) {
            case 'username':
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
        }
    }

    login() {
        const self = this;
        const {
            username,
            password,
            isAdmin
        } = this.state;
        self.setState({
            isProgress: true
        });
        this.props.login({
            username,
            password,
            isAdmin
        }, function (err) {
            if (err) {
                self.setState({
                    errorText: err,
                    isProgress: false
                })
            }
        });
    }

    render() {
        const {
            isProgress
        } = this.state;
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Progress isShow={isProgress}/>
                    <div style={styles.loginContainer}>
                        <div>
                            <div className="box">
                                <h2>Login</h2>
                                <br/>
                                <form action="#!" method="POST" className="login-form inputs-border inputs-bg">
                                    <div className="form-group">
                                        <div className="required">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username or email"
                                                value={this.state.username}
                                                onChange={(e) => {
                                                    this.onChangeHandler('username', e);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="required">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={this.state.password}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="rememberme"/>
                                        <label for="rememberme" className="checkbox">Remember me</label>
                                        <a href="#!" className="effect pull-right">Forgot your password?</a>
                                    </div>
                                    <div className="form-group text-right">
                                        <button type="button"
                                                className="btn btn-default"
                                                disabled={!this.state.username || !this.state.password}
                                                onClick={this.login}
                                        >
                                            Login
                                        </button>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen
    };
}

LoginPage.propTypes = {
    isAuthen: React.PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(actions.login, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginPage);
