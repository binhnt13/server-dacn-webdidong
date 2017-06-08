/**
 * Created by slinker on 4/13/17.
 */
import React from "react";

class Cart extends React.Component {

    render () {
        const {
            products
        } = this.props;
        return(
            <div>
                <div className="page-wrapper">
                    <section className="section" id="page-cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table cart-table" cellSpacing={"0"}>
                                            <thead>
                                            <tr>
                                                <th className="product-remove">&nbsp;</th>
                                                <th className="product-thumbnail">&nbsp;</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                products.map((product, index) => {
                                                    return (
                                                        <tr className="item">
                                                            <td scope="row" className="product-remove">
                                                                <a href="#!" className="remove"
                                                                   title="Remove this item">
                                                                    <i className="lil-close"/>
                                                                </a>
                                                            </td>
                                                            <td className="product-thumbnail">
                                                                <a href="product.html">
                                                                    <img src={product.productImage}
                                                                         className="img-responsive"/>
                                                                </a>
                                                            </td>
                                                            <td className="product-name">
                                                                <a href="product.html">{product.productName}</a>
                                                                {
                                                                    product.moreSpec ? <table className="variation">
                                                                        <tbody>
                                                                        <tr>
                                                                            <th className="variation-size">Size:</th>
                                                                            <td className="variation-size">
                                                                                <p>{product.moreSpec.size}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th className="variation-color">Color:</th>
                                                                            <td className="variation-color">
                                                                                <p>{product.moreSpec.color}</p>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table> : null
                                                                }
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="amount">${product.productPrice}</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="quantity">
                                                                    <input type="button" value={"+"} className="plus"/>
                                                                    <input type="number" step="1" max="5" min="1"
                                                                           value={"1"}
                                                                           title="Qty" className="qty" size="4"/>
                                                                    <input type="button" value={"-"} className="minus"/>
                                                                </div>
                                                            </td>
                                                            <td className="product-subtotal">
                                                                <span className="amount">$90.00</span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            <tr>
                                                <td colSpan={"6"} className="actions">
                                                    <div className="coupon col-md-5 col-sm-5 no-padding-left">
                                                        <div className="row">
                                                            <div className="col-xs-6">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Coupon Code"/>
                                                            </div>
                                                            <div className="col-xs-6">
                                                                <input type="submit" className="btn btn-default"
                                                                       value={"Apply Coupon"}/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="cart-collaterals col-md-5 col-sm-7 col-md-offset-2 no-padding-right">
                                                        <div className="cart-totals">
                                                            <h2>Cart Totals</h2>
                                                            <table className="table table-condensed" cellSpacing={"0"}>
                                                                <tbody>
                                                                <tr className="cart-subtotal">
                                                                    <th>Subtotal</th>
                                                                    <td className="text-right">
                                                                        <span className="amount">$899.00</span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="shipping">
                                                                    <th>Shipping</th>
                                                                    <td className="text-right">
                                                                        <span className="amount">$50.00</span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Total</th>
                                                                    <td className="text-right">
                                                                        <strong><span className="amount">$999.00</span></strong>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                            <div className="form-group clearfix">
                                                                <div className="pull-left">
                                                                    <input type="submit" className="btn btn-primary"
                                                                           value={"Update Cart"}/>
                                                                </div>
                                                                <div className="pull-right text-right">
                                                                    <a href="checkout.html" className="btn btn-default">Proceed
                                                                        to Checkout</a>
                                                                </div>
                                                            </div>

                                                            <div className="text-right">
                                                                <a href="#!"
                                                                   className="shipping-calculator-button effect"
                                                                   data-slide-toggle=".shipping-calculator-form">Calculate
                                                                    Shipping</a>
                                                            </div>

                                                            <div
                                                                className="shipping-calculator-form inputs-border inputs-bg"
                                                                style={{
                                                                    "display": "none"
                                                                }}>
                                                                <div className="form-group">
                                                                    <select className="form-control">
                                                                        <option>Select a Country..</option>
                                                                        <option value={"SY"}>Syria</option>
                                                                        <option value={"UK"}>United Kingdom</option>
                                                                        <option value={"US"}>United States</option>
                                                                        <option value={"TR"}>Turkey</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <select className="form-control">
                                                                        <option>Select an City..</option>
                                                                        <option value={"SY"}>Syria</option>
                                                                        <option value={"UK"}>United Kingdom</option>
                                                                        <option value={"US"}>United States</option>
                                                                        <option value={"TR"}>Turkey</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control"
                                                                           placeholder="Postcode / Zip"/>
                                                                </div>
                                                                <div className="form-group text-right">
                                                                    <button type="submit" className="btn btn-default">
                                                                        Update Totals
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Cart.defaultProps = {
    products: [
        {
            productName: 'Patterned Scarf',
            productImage: '/img/products/1.jpg',
            productPrice: '90.00',
        },
        {
            productName: 'Men Cap',
            productImage: '/img/products/20.jpg',
            productPrice: '450.00',
            moreSpec: {
                size: 'Large',
                color: 'Dark Grey'
            }
        },
        {
            productName: 'Twill Silk Scarf',
            productImage: '/img/products/12.jpg',
            productPrice: '200.00',
            moreSpec: {
                size: 'Large',
                color: 'Dark Grey'
            }
        }
    ]
};

export default Cart;
