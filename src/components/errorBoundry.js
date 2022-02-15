import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError : false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>
                      Oooops. that is not good
                </h1>
            );
        }
        return this.props.children;
    }
}

ErrorBoundry.propTypes = {};

export default ErrorBoundry;
