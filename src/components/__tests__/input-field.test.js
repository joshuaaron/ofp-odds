import React from 'react';
import { mount } from 'enzyme';
import { App } from 'components/App';
import { InputField } from 'components/InputField';

let wrapped;
beforeEach(() => {
	wrapped = mount(
		<App>
			<InputField />
		</App>
	)
});

afterEach(() => {
	wrapped.unmount();
});

describe('the input field', () => {
	it('renders an input element', () => {
		expect(wrapped.find('input').length).toEqual(1);
	});

	it('lets the user type into the field', () => {
		wrapped.find('input').simulate('change', {
			target: { value: 'test' }
		});
		wrapped.update();

		expect(wrapped.find('input').prop('value')).toEqual('test');
	});
})
