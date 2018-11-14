import React from 'react';
import styled from 'react-emotion';

function DisplayCard({ singleEvent, doubleEvent, title, cardsRemaining }) {
	return (
		<OutsCard>
			<h4>{title}</h4>
			<Span>{cardsRemaining} to come</Span>
			<StatsContainer>
				<h5>Single Card:</h5>
				<StatMarkup oop={singleEvent.outOfPos} ip={singleEvent.inPos} />
				<h5>Runner Runner:</h5>
				<StatMarkup oop={doubleEvent.outOfPos} ip={doubleEvent.inPos} />
			</StatsContainer>
		</OutsCard>
	)
}

function StatMarkup({oop, ip}) {
	return (
		<Stats>
			<p>out of pos: <span>{oop ? `${oop}%` : ''}</span></p>
			<p>in pos: <span>{ip ? `${ip}%` : ''}</span></p>
		</Stats>
	);
}

const Span = styled('span')`
	display: block;
	margin-bottom: 12px;
	font-size: 12px;
	text-transform: uppercase;
`;

const StatsContainer = styled('div')({
	textAlign: 'left',
	'h5': {
		fontSize: '15px',
		textTransform: 'uppercase',
	}
});

const OutsCard = styled('div')({
	position: 'relative',
	padding: '15px',
	background: 'white',
	color: '#868686',
	boxShadow: '0 3px 10px 0 rgba(25, 25, 25, 0.35)',
	borderRadius: '4px',
	textAlign: 'center',
	transition: '0.4s ease-out',

	'::before': {
		content: '""',
		position: 'absolute',
		display: 'block',
		height: '3px',
		bottom: '0',
		left: '0',
		width: '100%',
		borderRadius: '4px',
		background: 'linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213))',
	},

	':hover': {
		transform: 'translateY(-4px)',
	},

	'h4': {
		fontWeight: '400',
		textTransform: 'uppercase',
		color: '#464545',
		letterSpacing: '1px',
		marginBottom: '2px',
	}
});

const Stats = styled('div')({
	marginBottom: '15px',
	'p': {
		fontSize: '14px',
		textTransform: 'uppercase',
		margin: '0',
	},
	'span': {
		fontWeight: 'bold'
	}
});

export { DisplayCard }