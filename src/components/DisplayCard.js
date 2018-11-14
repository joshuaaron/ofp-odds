import React from 'react';

function DisplayCard({ singleEvent, doubleEvent, title, cardsRemaining }) {
	const { outOfPos: oopSingle, inPos: ipSingle } = singleEvent;
	const { outOfPos: oopDouble, inPos: ipDouble } = doubleEvent;
	return (
		<div className='outs-card'>
			<h4>{title}</h4>
			<span className='outs-card__cards-remaining'>{cardsRemaining} to come</span>
			<div className='outs-card__stats-container'>
				<h5>Single Card:</h5>
				<StatMarkup oop={oopSingle} ip={ipSingle} />
				<h5>Runner Runner:</h5>
				<StatMarkup oop={oopDouble} ip={ipDouble} />
			</div>
		</div>
	)
}

function StatMarkup({oop, ip}) {
	return (
		<div className="outs-card__stats">
			<p>out of pos: <span>{oop ? `${oop}%` : ''}</span></p>
			<p>in pos: <span>{ip ? `${ip}%` : ''}</span></p>
		</div>
	);
}

export { DisplayCard }