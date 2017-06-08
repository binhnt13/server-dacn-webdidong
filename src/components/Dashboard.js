/**
 * Created by slinker on 2/14/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    RaisedButton,
} from 'material-ui';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <RaisedButton
                    label='DISCONNECT'
                    primary
                    onClick={this.props.disconnect}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Dashboard);