import React from 'react';
import { connect } from 'react-redux';
import Demo from 'components/Demo';

class App extends React.Component {
    render() {
        return (
            <Demo />
        );
    }
}

export default connect()(App);
