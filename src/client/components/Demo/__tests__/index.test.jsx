import * as React from 'react';
import { shallow } from 'enzyme';
import Demo from 'components/Demo';

describe('<Demo /> tests', () => {
    it('should render', () => {
        const wrapper = shallow(<Demo />);

        expect(wrapper).toMatchSnapshot();
    });
});
