/**
 * Created by Lotus on 4/19/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {hashHistory} from "react-router";
// import component
import {Slider} from "./../../components";
import {
    DropdownButton,
    Grid,
    Thumbnail,
    Image,
    Row,
    MenuItem,
    ButtonToolbar,
    Button,
    ButtonGroup,
    Col,
    Checkbox,
    Pagination,
} from "react-bootstrap";
// import "./../../../dist/img/products/iphone-7-plus-128gb-300x300.jpg"
// import "./../../../dist/img/products/iphone-7-plus-256gb-300x300.jpg"
// import "./../../../dist/img/products/iphone-7-plus-red-128gb-300x300.jpg"
// import "./../../../dist/img/products/oppo-f3-plus-pp-300x300.jpg"
// import "./../../../dist/img/products/oppo-a39-300x300.jpg"
// import "./../../../dist/img/products/oppo-f1s-7-300x300.jpg"
// import "./../../../dist/img/products/oppo-f1s-2017-daidiencopy-300x300.jpg"
// import "./../../../dist/img/products/samsung-galaxy-s7-edge-26-300x300.jpg"
// import "./../../../dist/img/products/samsung-galaxy-s7-edge-blue-coral-edition-300x300.jpg"
// import "./../../../dist/img/products/samsung-galaxy-s8-4-300x300.jpg"
// import "./../../../dist/img/products/samsung-galaxy-s8-plus1-1-300x300.jpg"
require("./Home.scss");

export class Cate extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showInfo: {},
            listProduct: props.listProduct
        };
        this.openDetail = this.openDetail.bind(this);
    }

    openDetail() {
        hashHistory.replace('/detail-product');
    }

    showInfo(name) {
        let selected = this.state.showInfo;
        selected = {};
        selected[name] = this.state.showInfo[name] === 'bginfo-show'?'':'bginfo-show';
        this.setState({
            showInfo: selected
        })
    }

    hideInfo(name) {
        let selected = this.state.showInfo;
        selected = {};
        selected[name] = '';
        this.setState({
            showInfo: selected
        })
    };

    render() {
        const {
            listProduct
        } = this.state;
        return(
            <div className="cate clearfix">
                {
                    listProduct.map((o,i) => {
                        return(
                            <Col key={i} md={3} lg={3} className="product"
                                 onMouseEnter={this.showInfo.bind(this, i)}
                                 onMouseLeave={this.hideInfo.bind(this, i)}
                            >
                                <Thumbnail
                                    src={require(`./../../../dist/img/products/${o.img}`)}
                                />
                                <figure className={`bginfo ${this.state.showInfo[i]}`}>
                                    <span className="name">Sony Xperia XZs</span>
                                    <strong>14.990.000₫</strong>

                                    <span>Màn hình: 5.2", Full HD</span>
                                    <span>HĐH: Android 7.0</span>
                                    <span>CPU: Snapdragon 820 4 nhân</span>
                                    <span>RAM: 4 GB, ROM: 64 GB</span>
                                    <span>Camera: 19 MP, Selfie: 13 MP</span>
                                    <span>PIN: 2900 mAh</span>
                                </figure>
                                <div className="title">{o.title}</div>
                                <div className="price">{o.price}</div>
                                <hr/>
                                <div className="promotion">
                                    <p>KH chọn 1 trong 3 KM sau: Trả góp 0% Phiếu mua hàng 700.000đ Phiếu mua hàng 1 triệu khi tham gia CT "Thu cũ đổi mới"</p>
                                    <p>Cơ hội trúng xe SH 150i khi mua iPhone tại Hà Nội, Đà Nẵng</p>
                                </div>
                                <div className="button">
                                    <button className="detail" onClick={this.openDetail}>Xem chi tiết</button>
                                    <button className="buy" onClick={this.openDetail}>Mua ngay</button>
                                </div>
                            </Col>
                        )}
                    )
                }
            </div>
        )
    }
}

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showInfo: {}
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }

    render() {
        return (
            <div className="container-content">
               <Slider imgList={this.props.imgList}/>
                <hr/>
                <Grid>
                    <div className="menu-filter-board clearfix">
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={0}
                                className="filter-option" title={"Hãng"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>IPhone</Checkbox>
                                    <Checkbox>Samsung</Checkbox>
                                    <Checkbox>Oppo</Checkbox>
                                    <Checkbox>Sony</Checkbox>
                                    <Checkbox>Asus (Zenfone)</Checkbox>
                                    <Checkbox>HTC</Checkbox>
                                    <Checkbox>Huawei</Checkbox>
                                    <Checkbox>LG</Checkbox>
                                    <Checkbox>Lenovo</Checkbox>
                                    <Checkbox>Khác</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={1}
                                className="filter-option" title={"Mức giá"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>Dưới 1 triệu</Checkbox>
                                    <Checkbox>Từ 1 - 3 triệu</Checkbox>
                                    <Checkbox>Từ 3 - 7 triệu</Checkbox>
                                    <Checkbox>Từ 7 - 10 triệu</Checkbox>
                                    <Checkbox>Từ 10 - 15 triệu</Checkbox>
                                    <Checkbox>Trên 15 triệu</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={2}
                                className="filter-option" title={"Kích thước"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>Dưới 3 inch</Checkbox>
                                    <Checkbox>Khoảng 3 inch</Checkbox>
                                    <Checkbox>Khoảng 4 inch</Checkbox>
                                    <Checkbox>Khoảng 5 inch</Checkbox>
                                    <Checkbox>Khoảng 6 inch</Checkbox>
                                    <Checkbox>Kích thước khác</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={3}
                                className="filter-option" title={"Hệ điều hành"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>IOS</Checkbox>
                                    <Checkbox>Android</Checkbox>
                                    <Checkbox>Windows Phone</Checkbox>
                                    <Checkbox>Blackberry</Checkbox>
                                    <Checkbox>Hệ điều hành khác</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={4}
                                className="filter-option" title={"Màn hình"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>$0-$1000</Checkbox>
                                    <Checkbox>$0-$1000</Checkbox>
                                    <Checkbox>$0-$1000</Checkbox>
                                    <Checkbox>$0-$1000</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-2 center-width-row">
                            <DropdownButton
                                id={5}
                                className="filter-option" title={"Xếp theo"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>Giá thấp đến cao</Checkbox>
                                    <Checkbox>Giá cao đến thấp</Checkbox>
                                    <Checkbox>Xem nhiều nhất</Checkbox>
                                </div>
                            </DropdownButton>
                        </div>
                    </div>
                    <Cate listProduct={this.props.listProduct}/>
                    <Pagination
                        prev
                        next
                        ellipsis
                        boundaryLinks
                        items={5}
                        maxButtons={4}
                        activePage={this.state.activePage}
                        onSelect={(e) => this.handleSelect(e)}
                    />
                </Grid>
                <div className="banner"/>
            </div>
        )
    }
}

Home.defaultProps = {
    imgList: [
        {img: 'slider1.png'},
        {img: 'slider2.png'},
    ],
    listProduct: [
        {
            img: "iphone-7-plus-128gb-300x300.jpg",
            title: 'iphone 7 plus 128gb',
            price: ' 24.990.000₫'
        },
        {
            img: "iphone-7-plus-256gb-300x300.jpg",
            title: 'iphone 7 plus 256gb',
            price: ' 24.990.000₫'
        },
        {
            img: "iphone-7-plus-red-128gb-300x300.jpg",
            title: 'iphone 7 plus red 128gb',
            price: ' 24.990.000₫'
        },
        {
            img: "oppo-f3-plus-pp-300x300.jpg",
            title: 'oppo f3 plus',
            price: ' 24.990.000₫'
        },
        {
            img: "oppo-a39-300x300.jpg",
            title: 'oppo a39',
            price: ' 24.990.000₫'
        },
        {
            img: "oppo-f1s-7-300x300.jpg",
            title: 'oppo f1s',
            price: ' 24.990.000₫'
        },
        {
            img: "oppo-f1s-2017-daidiencopy-300x300.jpg",
            title: 'oppo f1s 2017',
            price: ' 24.990.000₫'
        },
        {
            img: "samsung-galaxy-s7-edge-26-300x300.jpg",
            title: 'samsung galaxy s7 edge',
            price: ' 24.990.000₫'
        },
        {
            img: "samsung-galaxy-s7-edge-blue-coral-edition-300x300.jpg",
            title: 'samsung galaxy s7 edge blue',
            price: ' 24.990.000₫'
        },
        {
            img: "samsung-galaxy-s8-4-300x300.jpg",
            title: 'samsung galaxy s8',
            price: ' 24.990.000₫'
        },
        {
            img: "samsung-galaxy-s8-plus1-1-300x300.jpg",
            title: 'samsung galaxy s8 plus',
            price: ' 24.990.000₫'
        },
        {
            img: "samsung-galaxy-s7-edge-26-300x300.jpg",
            title: 'samsung galaxy s7 edge',
            price: ' 24.990.000₫'
        },
    ]
};

function mapStateToProps(state) {
    return {
        isConnected: state.init.isConnected
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);