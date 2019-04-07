// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as url from 'url';
import _ from 'lodash';

// UI Dependencies
import { Spin, Form, Input, Button, Row, Col } from 'antd';

// Local Dependencies
import { checkRepoSignal } from '../actions';

class CreateProject extends Component {
    static propTypes = {
        form: PropTypes.shape({
            getFieldDecorator: PropTypes.func.isRequired,
            validateFields: PropTypes.func.isRequired
        }).isRequired,
        checkRepo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { checkRepo, form } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                const { repoUrl } = values;
                let path = url.parse(repoUrl).pathname;

                if (_.endsWith(path, '/')) {
                    path = path.slice(0, -1);
                }

                checkRepo({ path });
            }
        });
    };

    render() {
        const { loading } = this.state;
        const { getFieldDecorator } = this.props.form;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Spin tip="loading..." size="large" style={{ marginTop: '200px' }} />
                </div>
            );
        }

        return (
            <Row type="flex" align="middle" justify="center" style={{ height: '100%' }}>
                <Col style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: 20 }}>First, enter your repo github URL</h2>
                    <Form onSubmit={this.handleSubmit} layout="vertical" hideRequiredMark>
                        <Form.Item>
                            {getFieldDecorator('repoUrl', {
                                rules: [{ required: true, message: 'Repo required' }]
                            })(<Input placeholder="Enter repo URL" />)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
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

const WrappedCreateProject = Form.create()(CreateProject);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCreateProject);
