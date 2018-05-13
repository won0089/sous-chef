import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/menuActions';
import CircularProgress from 'material-ui/CircularProgress';


class Weekly extends React.Component {
    render() {
        return (
            this.props.isFetching ? <CircularProgress /> : <div> Weekly </div>
        );
    }

    componentDidMount() {
        this.props.actions.getMenus();
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);