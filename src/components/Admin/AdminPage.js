/**
 * Created by slinker on 4/15/17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import withWidth from "material-ui/utils/withWidth";
import ThemeDefault from "../../theme-default";
//
import {AdminActions as actions} from "../../actions";
//
import SideBar from "./SideBar";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false
        };
    }

    componentWillMount() {
        this.props.checkAuthen();
        // this.props.getTotalUser();
    }


    render() {

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                {
                    this.props.isAuthen ?
                        <div>
                            <SideBar />
                            <div>
                                {this.props.children}
                            </div>
                        </div> : null
                }
            </MuiThemeProvider>
        );
    }
}

AdminPage.propTypes = {
    children: React.PropTypes.element,
    width: React.PropTypes.number
};

AdminPage.propTypes = {
    isAuthen: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthen: state.admin.isAuthen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkAuthen: bindActionCreators(actions.checkAuthen, dispatch),
        getTotalUser: bindActionCreators(actions.getTotalUser, dispatch)
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(withWidth()(AdminPage));