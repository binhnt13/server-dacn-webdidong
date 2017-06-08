import React from "react";

class Checkout extends React.Component {

    render () {
        return(
            <div>
                <div className="page-wrapper">
                    <section className="section" id="page-checkout">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="alert alert-info">
                                        <strong>Returning customer?</strong>
                                        <a href="#!" className="effect" data-slide-toggle=".checkout-login-form">
                                            Click here to login
                                        </a>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="alert alert-info">
                                        <strong>Have a coupon?</strong>
                                        <a href="#!" className="effect" data-slide-toggle=".checkout-coupon-form">
                                            Click here to enter your code
                                        </a>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="checkout-login-form box"
                                         style={{
                                             display: "none"
                                         }}
                                    >
                                        <h2>Login</h2>
                                        <p>
                                            If you have shopped with us before, please enter your details in the boxes
                                            below. If you are a new customer please proceed to the Billing &amp;Shipping
                                            section.
                                        </p>
                                        <form action="#!" method="POST" className="login-form inputs-border inputs-bg">
                                            <div className="form-group">
                                                <label for="username">Username or email*</label>
                                                <input type="text" id="username" className="form-control"
                                                       placeholder="Username or email*"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="password">Password*</label>
                                                <input type="password" id="password" className="form-control"
                                                       placeholder="Password*"/>
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
                                    <div className="checkout-coupon-form box"
                                         style={{
                                             display: "none"
                                         }}
                                    >
                                        <form action="#!" method="POST" className="coupon-form inputs-border inputs-bg">
                                            <div className="form-group">
                                                <label for="coupon_code">Coupon code</label>
                                                <input type="text" id="coupon_code" className="form-control"
                                                       placeholder="Coupon code"/>
                                            </div>
                                            <div className="form-group text-right">
                                                <button type="button" className="btn btn-default">Apply Coupon</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="clearfix"/>

                                <form action="#!" method="POST" className="checkout-form inputs-border inputs-bg">
                                    <div className="col-md-6">
                                        <div className="billing-field">
                                            <h3 className="title">Billing Details</h3>

                                            <div className="row">
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="text" className="form-control"
                                                               placeholder="First Name" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="text" className="form-control"
                                                               placeholder="Last Name" required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Company Name"/>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="email" className="form-control"
                                                               placeholder="Email Address" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="tel" className="form-control" placeholder="Phone"
                                                               required/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="required">
                                                    <select className="form-control">
                                                        <option>Select a Country..</option>
                                                        <option value="SY">Syria</option>
                                                        <option value="UK">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="TR">Turkey</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="text" className="form-control"
                                                               placeholder="Address" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <input type="text" className="form-control"
                                                           placeholder="Address 2"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="required">
                                                    <input type="text" className="form-control"
                                                           placeholder="Postcode / ZIP" required/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <input type="text" className="form-control"
                                                               placeholder="Town / City" required/>
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <div className="required">
                                                        <select className="form-control">
                                                            <option>Select a Province..</option>
                                                            <option value="SY">Syria</option>
                                                            <option value="UK">United Kingdom</option>
                                                            <option value="US">United States</option>
                                                            <option value="TR">Turkey</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input type="checkbox" id="create_account"/>
                                                <label for="create_account" className="checkbox"
                                                       data-slide-toggle=".create-account">Create an account?</label>
                                                <div className="create-account box"
                                                     style={{
                                                         display: "none"
                                                     }}
                                                >
                                                    <p>
                                                        Create an account by entering the information below. If you are
                                                        a returning customer please login at the top of the page.
                                                    </p>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control"
                                                               placeholder="Account Password"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <h3>
                                                    <input type="checkbox" id="ship-different-address"/>
                                                    <label for="ship-different-address" className="checkbox"
                                                           data-slide-toggle=".different-address">Ship to a different
                                                        address?</label>
                                                </h3>
                                                <div className="different-address box"
                                                     style={{
                                                         display: "none"
                                                     }}
                                                >
                                                    <div className="row">
                                                        <div className="form-group col-sm-6">
                                                            <div className="required">
                                                                <input type="text" className="form-control"
                                                                       placeholder="First Name" required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <div className="required">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Last Name" required/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Company Name"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="required">
                                                            <select className="form-control">
                                                                <option>Select a Country..</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="UK">United Kingdom</option>
                                                                <option value="US">United States</option>
                                                                <option value="TR">Turkey</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group col-sm-6">
                                                            <div className="required">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Address" required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Address 2"/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="required">
                                                            <input type="text" className="form-control"
                                                                   placeholder="Postcode / ZIP" required/>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="form-group col-sm-6">
                                                            <div className="required">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Town / City" required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <div className="required">
                                                                <select className="form-control">
                                                                    <option>Select a Province..</option>
                                                                    <option value="SY">Syria</option>
                                                                    <option value="UK">United Kingdom</option>
                                                                    <option value="US">United States</option>
                                                                    <option value="TR">Turkey</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Order Notes</label>
                                                <textarea className="form-control"
                                                          placeholder="Notes about your order, e.g. special notes for delivery."
                                                          rows="5"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="review-order">
                                            <div className="box">
                                                <h3 className="title">Your order</h3>
                                                <div className="table-responsive">
                                                    <table className="table cart-table review-order-table">
                                                        <thead>
                                                        <tr>
                                                            <th className="product-name" width="50%">Product</th>
                                                            <th className="product-total">Total</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="item">
                                                            <td className="product-name">
                                                                Twill Silk Scarf <strong className="product-quantity">×
                                                                1</strong></td>
                                                            <td className="product-total">
                                                                <span className="amount">$90.00</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="item">
                                                            <td className="product-name">
                                                                Patterned Scarf <strong className="product-quantity">×
                                                                1</strong>
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
                                                        <tr className="cart-subtotal">
                                                            <th>Subtotal</th>
                                                            <td><span className="amount">$540.00</span></td>
                                                        </tr>
                                                        <tr className="shipping">
                                                            <th>Shipping</th>
                                                            <td>
                                                                <p>Free Shipping</p>
                                                            </td>
                                                        </tr>
                                                        <tr className="order-total">
                                                            <th>Total</th>
                                                            <td>
                                                                <strong><span className="amount">$540.00</span></strong>
                                                            </td>
                                                        </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>

                                                <h2>Payment Method</h2>
                                                <div id="payment" className="checkout-payment">
                                                    <ul className="payment-methods">
                                                        <li className="payment-method">
                                                            <input id="payment_method_cheque" type="radio"
                                                                   name="payment_method" checked="checked"/>
                                                            <label for="payment_method_cheque" className="radio"
                                                                   data-slide-toggle="#payment-cheque"
                                                                   data-parent=".payment-methods">Cheque Payment</label>

                                                            <div className="payment-box" id="payment-cheque">
                                                                <p>Please send your cheque to Store Name, Store Street,
                                                                    Store Town, Store State / County, Store
                                                                    Postcode.</p>
                                                            </div>
                                                        </li>
                                                        <li className="payment-method">
                                                            <input id="payment_method_cod" type="radio"
                                                                   name="payment_method"/>
                                                            <label for="payment_method_cod" className="radio"
                                                                   data-slide-toggle="#payment-cash"
                                                                   data-parent=".payment-methods">Cash on
                                                                Delivery</label>

                                                            <div className="payment-box" id="payment-cash"
                                                                 style={{
                                                                     display: "none"
                                                                 }}
                                                            >
                                                                <p>Pay with cash upon delivery.</p>
                                                            </div>
                                                        </li>
                                                        <li className="payment-method">
                                                            <input id="payment_method_paypal" type="radio"
                                                                   name="payment_method"/>
                                                            <label for="payment_method_paypal" className="radio"
                                                                   data-slide-toggle="#payment-paypal"
                                                                   data-parent=".payment-methods">PayPal</label>

                                                            <div className="payment-box" id="payment-paypal"
                                                                 style={{
                                                                     display: "none"
                                                                 }}
                                                            >
                                                                <img
                                                                    src="../../www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                                                    className="img-responsive"/>
                                                                <p><a href="#!" className="effect">What is PayPal?</a>
                                                                </p>
                                                                <p>Pay via PayPal; you can pay with your credit card if
                                                                    you don’t have a PayPal account.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="text-right">
                                                        <button type="submit" className="btn btn-default">Place order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Checkout;
