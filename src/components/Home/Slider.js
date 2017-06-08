/**
 * Created by Lotus on 4/21/17.
 */
import React, {Component} from "react";

require('./../Flickity.scss');
require('./../Custom.scss');
const Flickity = require('react-flickity-component')(React);

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    imagesLoaded: true,
    lazyLoad: true,
    bgLazyLoad: true,
    autoPlay: 10000
};

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgList: props.imgList
        }
    }

    render() {
        const {
            imgList
        } = this.state;
        return (
            <div className="container-banner-slider clearfix" style={{backgroundColor: '#ffffff'}}>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                >
                    {
                        imgList.map((o,i) => {
                            return (
                                <div
                                    key={i} className="carousel-cell flickity-bg-lazyloaded"
                                    style={{
                                        backgroundImage: `url(${require(`./../../../dist/img/slides/${o.img}`)})`,
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            )
                        })
                    }
                </Flickity>
            </div>
        )
    }
}

Slider.defaultProps = {

};

export default Slider;
