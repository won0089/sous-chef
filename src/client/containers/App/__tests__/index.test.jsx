
import * as React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import App from 'containers/App';

describe('<App /> tests', () => {
    const mockStore = configureStore([thunk]);

    it('should render', () => {
        const wrapper = shallow(<App store={mockStore({})} />);

        expect(wrapper.dive()).toMatchSnapshot();
    });
});