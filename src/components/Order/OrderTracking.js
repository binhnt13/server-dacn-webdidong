/**
 * Created by slinker on 4/14/17.
 */
import React, {Component} from "react";

class OrderTracking extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <section className="section" id="page-order-tracking">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <div className="box">
                                        <h2>Order Tracking</h2>
                                        <p>To track your order please enter your Order ID in the box below and press the
                                            "Track" button. This was given to you on your receipt and in the
                                            confirmation email you should have received.</p>
                                        <form method="POST" className="tracking-form inputs-border inputs-bg">
                                            <div className="form-group">
                                                <input type="text" id="order_id" className="form-control"
                                                       placeholder="Order ID*"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" id="billing_email" className="form-control"
                                                       placeholder="Billing Email*"/>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-default">Track</button>
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

export default OrderTracking;