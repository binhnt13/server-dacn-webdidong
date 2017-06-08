import React, {Component} from "react";
import {Link} from "react-router";

require("./Layer.scss");

class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuActive: {
                0: 'active'
            }
        }
    }

    activeMenu(name) {
        let selected = this.state.menuActive;
        selected = {};
        selected[name] = this.state.menuActive === 'active' ? '':'active';
        this.setState({
            menuActive: selected
        })
    }

    render () {
        const navigates = {
            "Danh Mục Sản Phẩm" : '/',
            "Sản Phẩm Bán Chạy" : '/best-seller',
            "Sản Phẩm Mới Nhất" : '/detail-product',
            "Sale" : '',
            "Trả Góp" : '',
            "Tư vấn trực tuyến" : ''
        };
        return (
            <div className="container-header clearfix">
                <ul className="menu">
                    {
                        Object.keys(navigates).map((navigate, index) => {
                            return (
                                <li
                                    key={index}
                                    className={this.state.menuActive[index]}
                                    onClick={this.activeMenu.bind(this, index)}
                                >
                                    <Link to={navigates[navigate]}>{navigate}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Header;
