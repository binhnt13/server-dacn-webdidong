/**
 * Created by Lotus on 4/23/17.
 */
import React, {Component} from "react";

import {
    Grid,
    Thumbnail,
    DropdownButton,
    Checkbox
} from "react-bootstrap";
import {Slider, Cate} from "./../../components";

require("./Style.scss");
require("./../../components/Custom.scss");

class DetailProduct extends Component{

    constructor() {
        super();
        this.state = {
            qty: 1,
            price: 10696000,
            openForm: false
        };
        this.addQty = this.addQty.bind(this);
        this.subQty = this.subQty.bind(this);
        this.openForm = this.openForm.bind(this);
    }

    addQty() {
        this.setState({
            qty: this.state.qty+1
        })
    }

    subQty() {
        this.setState({
            qty: this.state.qty > 1 ? this.state.qty-1 : 1
        })
    }

    openForm() {
        this.setState({openForm: true})
    }

    render() {
        return(
            <div className="container-detailProduct">
                <Slider imgList={this.props.imgList}/>
                <Grid>
                    <br/>
                    <br/>
                    <div className="title-bestSeller">
                        CHI TIẾT SẢN PHẨM
                    </div>
                    <div className="col-xs-12 col-sm-3 product">
                        <Thumbnail
                            src={require(`./../../../dist/img/products/${this.props.product.img}`)}
                        />
                        <div className="bottom-thumb">
                            <DropdownButton
                                id={0}
                                className="filter-option" title={"Màu sắc"}
                            >
                                <div className="custom-checkbox-menu">
                                    <Checkbox>Màu xanh</Checkbox>
                                    <Checkbox>Màu đỏ</Checkbox>
                                    <Checkbox>Màu đen</Checkbox>
                                    <Checkbox>Màu trắng</Checkbox>
                                </div>
                            </DropdownButton>
                            <div className="quantity clearfix">
                                <div className="col-xs-7">
                                    Số lượng: {this.state.qty}
                                </div>
                                <div className="col-xs-5">
                                    <div className="col-xs-6" onClick={this.addQty}> + </div>
                                    <div className="col-xs-6" onClick={this.subQty}> - </div>
                                </div>
                            </div>
                            <div className="price">Tổng: 10.696.000đ</div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 info">
                        <h4>Thông số kĩ thuật</h4>
                        <ul className="table-info clearfix">
                            {

                            }
                            <li className="bgGrey clearfix">
                                <div className="col-xs-4">Màn hình:</div>
                                <div className="col-xs-8">IPS LCD, 6", Full HD</div>
                            </li>
                            <li className="bgWhite clearfix">
                                <div className="col-xs-4">Hệ điều hành:</div>
                                <div className="col-xs-8">Android 6.0 (Marshmallow)</div>
                            </li>

                            <li className="bgGrey clearfix">
                                <div className="col-xs-4">Camera sau:</div>
                                <div className="col-xs-8">16 MP</div>
                            </li>
                            <li className="bgWhite clearfix">
                                <div className="col-xs-4">Camera trước:</div>
                                <div className="col-xs-8">16 MP và 8 MP</div>
                            </li>

                            <li className="bgGrey clearfix">
                                <div className="col-xs-4">CPU:</div>
                                <div className="col-xs-8">Snapdragon 653 8 nhân 64-bit</div>
                            </li>
                            <li className="bgWhite clearfix">
                                <div className="col-xs-4">RAM:</div>
                                <div className="col-xs-8">4 GB</div>
                            </li>

                            <li className="bgGrey clearfix">
                                <div className="col-xs-4">Bộ nhớ trong:	</div>
                                <div className="col-xs-8">64 GB</div>
                            </li>
                            <li className="bgWhite clearfix">
                                <div className="col-xs-4">Thẻ nhớ:</div>
                                <div className="col-xs-8">MicroSD, hỗ trợ tối đa 256 GB</div>
                            </li>

                            <li className="bgGrey clearfix">
                                <div className="col-xs-4">Thẻ SIM:</div>
                                <div className="col-xs-8">2 Nano SIM, hỗ trợ 4G</div>
                            </li>
                            <li className="bgWhite clearfix">
                                <div className="col-xs-4">Dung lượng pin:</div>
                                <div className="col-xs-8">4000 mAh, có sạc nhanh</div>
                            </li>

                        </ul>
                        <div className="two-button">
                            <button className="muangay" onClick={this.openForm}>Mua ngay</button>
                            <button className="tragop">Trả góp</button>
                        </div>
                    </div>
                    <br/>
                </Grid>
                <br/>
                <Grid>
                    {
                        this.state.openForm ?
                            <div className="form">
                                <h4>Thông tin liên hệ</h4>
                                <div className="info-user">
                                    <p>Anh chị:</p>
                                    <input type="text" placeholder="Nguyễn Văn A"/>
                                </div>
                                <div className="info-user">
                                    <p>Email hoặc số điện thoại:</p>
                                    <input type="text" placeholder="0996999666"/>
                                </div>
                                <div className="info-user">
                                    <p>Địa chỉ:</p>
                                    <input type="text" placeholder="Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.Hồ Chí Minh"/>
                                </div>
                                <div className="thanhtoan">
                                    <h3>Chọn hình thức thanh toán</h3>
                                    <button className="ttknh">Thanh toán khi nhận hàng</button>
                                    <button className="ttol">Thanh toán online</button>
                                    <br/>
                                </div>
                            </div>
                            :
                            <div/>
                    }
                </Grid>
                <br/>
                <div className="banner"/>
            </div>
        )
    }
}

DetailProduct.defaultProps = {
    imgList: [
        {img: 'slider1.png'},
        {img: 'slider2.png'},
    ],
    product: {
        img: 'oppo-f3-plus-pp-300x300.jpg'
    },
    // infoProduct: [
    //     {
    //         title: 'Màn hình'
    //     }
    // ]
};

export default DetailProduct;