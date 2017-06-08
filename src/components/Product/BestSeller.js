/**
 * Created by Lotus on 4/23/17.
 */
import React, {Component} from "react";

import {Grid} from "react-bootstrap";
import {Slider, Cate} from "./../../components";

require("./Style.scss");

class BestSeller extends Component{
    render() {
        return(
            <div className="container-bestSeller">
                <Slider imgList={this.props.imgList}/>
                <br/>
                <br/>
                <Grid>
                    <div className="title-bestSeller">
                        SẢN PHẨM BÁN CHẠY
                    </div>
                    <br/>
                    <Cate listProduct={this.props.listProduct}/>
                </Grid>
                <br/>
                <div className="banner"/>
            </div>
        )
    }
}

BestSeller.defaultProps = {
    imgList: [
        {img: 'slider1.png'},
        {img: 'slider2.png'},
    ],
    listProduct: [
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
    ]
};

export default BestSeller;