import React from 'react';

function InputField({outs, onChange}) {
	return (
		<div className='outs-input'>
			<label htmlFor='input'>How many outs do you have:</label>
			<input id='input' value={outs} onChange={onChange} />
		</div>
	)
}

export { InputField }