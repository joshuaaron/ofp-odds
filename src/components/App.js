import React, { Component } from 'react';
import { Header } from './Header';
import { DisplayCardsWrapper } from './DisplayCardsWrapper';
import { InputField } from './InputField';
import { DescriptionBox } from './DescriptionBox';
import styled from 'react-emotion'

const Container = styled('div')({
	maxWidth: '840px', margin: '0 auto', padding: '15px 30px'
});

const initialState = { usersOuts: '' };
class App extends Component {
	state = initialState;

	handleInputChange = ({target}) => {
		this.setState({ usersOuts: target.value });
	}

	render() {
		const { usersOuts } = this.state;
		return (
			<Container>
				<Header />
				<InputField outs={usersOuts} onChange={this.handleInputChange} />
				<DisplayCardsWrapper usersOuts={usersOuts} />
				<DescriptionBox />
			</Container>
		);
	}
}

export { App };
