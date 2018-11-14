import React from 'react';
import styled from 'react-emotion';

const Heading = styled('h2')({
	margin: '15px 0',
	fontWeight: '300',
	textAlign: 'center',
	letterSpacing: '9px',
	textTransform: 'uppercase',
});

function Header() {
	return (
		<Heading>Open Face Pineapple Odds</Heading>
	)
}

export { Header }
