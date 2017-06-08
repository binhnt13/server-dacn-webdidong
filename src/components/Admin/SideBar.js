/**
 * Created by situan on 13/04/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    FaAngleDown,
    FaAngleRight,
    FaCcDiscover,
    FaCheck,
    FaFacebookSquare,
    FaGlobe,
    FaHome,
    FaPlusCircle,
    FaSearch,
    FaShoppingCart,
    FaSlack,
    FaTag,
    FaUser,
    FaWechat,
    FaWrench
} from "react-icons/lib/fa";

import {Link} from "react-router";

import {OverlayTrigger, Popover} from "react-bootstrap";
import {AdminActions as actions} from "../../actions";

require('./SideBar.scss');

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySearch: 'none',
            subMenu: {},
            openTopicDisplay: 'none',
        };
    }

    render() {
        const Item = [
            {
                info1: 'Home'

            }
        ];
        const popoverTop = (
            <Popover id="popover-positioned-top">
                <a href="#">Shopify Help Center</a>
                <br/>
                <a href="#">Community forums</a>
                <br/>
                <a href="#">Hire an Expert</a>
                <br/>
                <a href="#">Keyboard shortcuts</a>
                <hr/>
                <a href="#">Your profile</a>
                <br/>
                <a onClick={() => {
                    this.props.logout();
                }}>Log out </a>
            </Popover>
        );
        return (
            <div>
                <div className="middle-column">
                    {
                        Item.map((o, i) => {
                            return (
                                <div className="slider-menu flex-display" key={i}>
                                    <div className="menu-header flex-display">
                                        <a href="" className="shopping-cart"><FaShoppingCart size="30px"/> shopping
                                            carts</a>
                                    </div>
                                    <div className="search-box">
                                        <span className="icon-search">
                                            <FaSearch size="20px"/>
                                        </span>
                                        <input className="search-input"/>
                                    </div>
                                    <div className="bg-sub-menu-column flex-display">
                                        <div className="sub-menu-column" tabIndex={1}>
                                            <div className="menu-section-header flex-display">
                                                <FaHome size="20px"/>
                                                Home
                                                <div className="carret_icon">
                                                    <FaAngleRight className="fa-caret-right" size="20px"/>
                                                    <FaAngleDown className="fa-caret-down" size="20px"/>
                                                </div>
                                            </div>
                                            <div className="menu-topic">
                                                <ul>
                                                    <li><a href="">{o.info1}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column" tabIndex={2}>
                                            <div className="menu-section-header flex-display">
                                                <FaCheck size="20px"/>
                                                Orders
                                                <div className="carret_icon">
                                                    <FaAngleRight className="fa-caret-right" size="20px"/>
                                                    <FaAngleDown className="fa-caret-down" size="20px"/>
                                                </div>
                                            </div>
                                            <div className="menu-topic">
                                                <ul>
                                                    <li><a href="">{o.info1}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column" tabIndex={3}>
                                            <div className="menu-section-header flex-display">
                                                <FaTag size="20px"/>
                                                Products
                                                <div className="carret_icon">
                                                    <FaAngleRight className="fa-caret-right" size="20px"/>
                                                    <FaAngleDown className="fa-caret-down" size="20px"/>
                                                </div>
                                            </div>
                                            <div className="menu-topic">
                                                <ul>
                                                    <li><a href="">{o.info1}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column" tabIndex={4}>
                                            <div className="menu-section-header flex-display">
                                                <FaUser/>
                                                Customers
                                                <div className="carret_icon">
                                                    <FaAngleRight className="fa-caret-right" size="20px"/>
                                                    <FaAngleDown className="fa-caret-down" size="20px"/>
                                                </div>
                                            </div>
                                            <div className="menu-topic">
                                                <ul>
                                                    <li><a href="">{o.info1}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                                <FaCcDiscover/>
                                                Discounts
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                                SALES CHANNEL
                                                <div className="carret_icon">
                                                    <FaPlusCircle className="fa-caret-right" size="20px"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                                <FaGlobe/>
                                                Online Store
                                            </div>
                                        </div>
                                        <Link to="/admin/facebook-messenger">
                                            <div className="sub-menu-column">
                                                <div className="menu-section-header flex-display">
                                                    <FaWechat/>
                                                    Messenger

                                                </div>
                                            </div>
                                        </Link>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                                <FaFacebookSquare/>
                                                Facebook
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                                <FaSlack/>
                                                App
                                            </div>
                                        </div>
                                        <div className="sub-menu-column" tabIndex={5}>
                                            <div className="menu-section-header flex-display">
                                                <FaWrench/>
                                                Setting
                                                <div className="carret_icon">
                                                    <FaAngleRight className="fa-caret-right" size="20px"/>
                                                    <FaAngleDown className="fa-caret-down" size="20px"/>
                                                </div>
                                            </div>
                                            <div className="menu-topic">
                                                <ul>
                                                    <li><a href="">{o.info1}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-menu-column">
                                            <div className="menu-section-header flex-display">
                                            </div>
                                        </div>

                                        <div className="sub-menu-column" tabIndex={8}>
                                            <div className="sub-menu-column" tabIndex={8}>
                                                <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                                                    <div className="logo flex-display">
                                                        <img src="http://lorempixel.com/output/people-q-g-64-64-1.jpg"
                                                             className="img-responsive"
                                                        />
                                                        <span>CUSTOMERS</span>
                                                    </div>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(actions.logout, dispatch),
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(SideBar);