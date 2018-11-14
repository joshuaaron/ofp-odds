import React from 'react';
import styled, { css } from 'react-emotion';

const Input = styled('input')({
	padding: '2px',
	width: '120px',
	background: 'none',
	color: 'inherit',
	fontFamily: 'inherit',
	fontSize: '16px',
	outline: 'none',
	border: '0',
	boxShadow: '0 1px 0 0 #D8E1E8',
});

function InputField({outs, onChange}) {
	return (
		<div className={css({marginBottom: '15px', textAlign: 'center'})}>
			<label htmlFor='input' className={css({ marginRight: '15px' })}>How many outs do you have:</label>
			<Input id='input' value={outs} onChange={onChange} />
		</div>
	)
}

export { InputField }