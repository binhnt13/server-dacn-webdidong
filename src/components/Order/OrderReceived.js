/**
 * Created by slinker on 4/14/17.
 */
import React, {Component} from "react";

class OrderReceived extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <section className="section" id="page-order-received">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="alert alert-success active">Thank you, Your order has been received.</div>
                                    <ul className="order-details">
                                        <li className="order">
                                            Order Number: <strong>963</strong>
                                        </li>
                                        <li className="date">
                                            Date: <strong>March 25, 2016</strong>
                                        </li>
                                        <li className="total">
                                            Total: <strong><span className="amount">$499.00</span></strong>
                                        </li>
                                        <li className="method">
                                            Payment Method: <strong>Cheque Payment</strong>
                                        </li>
                                    </ul>

                                    <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                    <div className="box table-responsive">
                                        <h3 className="title">Order Details</h3>
                                        <table className="table cart-table order-details-table">
                                            <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="item">
                                                <td className="product-name">
                                                    <a href="product.html">Patterned Scarf</a> <strong className="product-quantity">× 1</strong> </td>
                                                <td className="product-total">
                                                    <span className="amount">$90.00</span>
                                                </td>
                                            </tr>
                                            <tr className="item">
                                                <td className="product-name">
                                                    <a href="product.html">Bag Maroon</a> <strong className="product-quantity">× 1</strong>
                                                    <table className="variation">
                                                        <tbody>
                                                        <tr>
                                                            <th className="variation-size">Size:</th>
                                                            <td className="variation-size">
                                                                <p>Large</p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td className="product-total">
                                                    <span className="amount">$450.00</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th scope="row">Subtotal:</th>
                                                <td><span className="amount">$540.00</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Shipping:</th>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Payment Method:</th>
                                                <td>Cheque Payment</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total:</th>
                                                <td><span className="amount">$540.00</span></td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="text-right">
                                        <a href="index.html" className="btn btn-default">Go Back</a>
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

export default OrderReceived;