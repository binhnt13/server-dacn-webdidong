import React, {Component} from 'react';

// import {} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
            <div>
                <footer className="container-footer clearfix">
                    <div className="col-xs-12 col-md-7 col-lg-7">
                        <div className="bgInfo">
                            <ul>
                                <li className="title">Thông tin cửa hàng</li>
                                <li className="title">Câu hỏi thường gặp mua hàng</li>
                                <li className="title">Các chính sách FPT Shop</li>
                                <li className="title">Hệ thống bảo hành</li>
                            </ul>
                        </div>
                        <div className="bgInfo">
                            <ul>
                                <li className="title">Tin tuyển dụng</li>
                                <li className="title">Tin khuyến mãi</li>
                                <li className="title">Hướng dẫn mua online</li>
                                <li className="title">Hướng dẫn mua trả góp</li>
                            </ul>
                        </div>
                        <div className="bgInfo">
                            <ul>
                                <li className="title">Hệ thống cửa hàng</li>
                                <li className="title">Kiểm tra hàng Apple chính hãng</li>
                                <li className="title">Giới thiệu máy đổi trả</li>
                                <li className="title">Giới thiệu xả hàng</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-5 col-lg-5">
                        <div className="support">
                            <span>Hỗ trợ thanh toán</span>
                            <a className="fs-ftr-vs"/>
                            <a className="fs-ftr-mt"/>
                            <a className="fs-ftr-atm"/>
                        </div>
                        <div className="fs-ftr3">
                            <a className="fs-ftr-cthuong"/>
                            <a className="fs-ftr-dmca"/>
                            <a className="fs-ftr-sp"/>
                            <a className="fs-ftr-thieuvn"/>
                        </div>
                    </div>
                    <div className="social col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Youtube</span>
                        <span>Google Plus</span>
                        <span>© Copyright 2003 - 2017 E-Commerce Pty. Ltd. </span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;