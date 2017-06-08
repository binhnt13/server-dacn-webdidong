/**
 * Created by slinker on 12/29/16.
 */
import React from "react";
import {connect} from "react-redux";
// Module
import {Footer, Header} from "../Layer";

class App extends React.Component {

    componentWillMount() {
    }

    render() {
        const {
            children
        } = this.props;
        return (
            <div>
                <Header/>
                <div className='content'>
                    {children}
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
