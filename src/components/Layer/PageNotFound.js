/**
 * Created by slinker on 4/13/17.
 */
import React, {Component} from "react";

class PageNotFound extends Component {

    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <section className="section" id="page-404">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3 text-center">
                                    <h1>404</h1>
                                    <h3>Sorry, the page you were looking for doesn’t exist.</h3>
                                    <p>Let's get back on track..</p>
                                    <div className="button-group">
                                        <a href="/#/" className="btn btn-primary">Home</a>
                                        <a href="products-sidebar-right.html" className="btn btn-default">Shop</a>
                                    </div>
                                    <h2 className="or">OR</h2>
                                    <form action="/#/" method="GET" className="inputs-border">
                                        <input type="text" className="form-control" placeholder="What's on your mind?"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default PageNotFound;