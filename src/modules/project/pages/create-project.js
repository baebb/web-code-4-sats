// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Spin } from 'antd';

// Local Dependencies
import { checkRepoSignal } from '../actions';

class CreateProject extends Component {
    static propTypes = {
        checkRepo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    render() {
        const { loading } = this.state;
        // const { checkRepo } = this.props;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="loading..." size="large" style={{ marginTop: '200px' }} />
                </div>
            );
        }

        return (
            <div>lol</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
        // droneOnline: state.cockpit.droneOnline,
        // cockpitLoading: state.cockpit.cockpitLoading
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        checkRepo: checkRepoSignal.request
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
