/**
 * Created by slinker on 4/12/17.
 */
import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <div className="page-head content-top-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-7">
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">My Account</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <section className="section" id="page-login">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="box">
                                        <h2>Login</h2>
                                        <br/>
                                        <form action="#!" method="POST" className="login-form inputs-border inputs-bg">
                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="text" className="form-control"
                                                           placeholder="Username or email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="password" className="form-control"
                                                           placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input type="checkbox" id="rememberme"/>
                                                <label for="rememberme" className="checkbox">Remember me</label>
                                                <a href="#!" className="effect pull-right">Forgot your password?</a>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-default">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="box">
                                        <h2>Register</h2>
                                        <br/>
                                        <form action="#!" method="POST"
                                              className="register-form inputs-border inputs-bg">
                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="email" className="form-control"
                                                           placeholder="Email address"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="password" className="form-control"
                                                           placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-default">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Login;