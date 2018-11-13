import React from 'react';
import { DisplayCard } from "./DisplayCard";
import { outsData } from '../data/outsData';

function DisplayCardsWrapper({ usersOuts }) {
	const [ SINGLE_EVENT_OUTS, DOUBLE_EVENT_OUTS ] = outsData();

	const singleEventPercentages = retrieveOuts(SINGLE_EVENT_OUTS);
	const doubleEventPercentages = retrieveOuts(DOUBLE_EVENT_OUTS);

	const outs = 4;
	return (
		<>
			<div className="outs-wrapper outs-wrapper--single">
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
			</div>
			<div className="outs-wrapper outs-wrapper--double">
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
				<DisplayCard outs={outs} />
			</div>
		</>
	);
}

function retrieveOuts(data, userOuts = '7') {
	return data.reduce((acc, val) => {
		let returnedObj = {};
		// key here is DRAW_TYPE (initial, first)
		Object.keys(val).forEach(key => {
			const positionObj = val[key]; // OOP/IP for each draw type
			Object.keys(positionObj).forEach(pos => {
				const position = positionObj[pos];
				console.log('Key:', key, 'Position: ', pos, {position});
				const usersPercentage = position[userOuts]
				console.log({usersPercentage})
			})
		})
	}, [])
}

export { DisplayCardsWrapper };