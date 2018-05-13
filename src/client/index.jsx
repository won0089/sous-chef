import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'stores';
import Weekly from 'containers/Weekly';

const store = configureStore();

render(
    <Provider store={store}>
        <Weekly />
    </Provider>,
    document.getElementById('app')
);
