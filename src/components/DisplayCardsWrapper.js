import React from 'react';
import { DisplayCard } from "./DisplayCard";
import { outsData } from '../data/outsData';
import styled from 'react-emotion';

const OutsWrapper = styled('div')({
	display: 'grid',
	gridGap: `15px`,
	gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
})

function DisplayCardsWrapper({ usersOuts }) {
	const [ SINGLE_EVENT_OUTS, DOUBLE_EVENT_OUTS ] = outsData();

	const {
		initial: singleInitial,
		firstPull: singleFirst,
		secondPull: singleSecond,
		thirdPull: singleThird,
	} = retrieveOuts(SINGLE_EVENT_OUTS, usersOuts);

	const {
		initial: doubleInitial,
		firstPull: doubleFirst,
		secondPull: doubleSecond,
		thirdPull: doubleThird,
	} = retrieveOuts(DOUBLE_EVENT_OUTS, usersOuts);

	return (
		<OutsWrapper>
			<DisplayCard cardsRemaining={12} singleEvent={singleInitial} doubleEvent={doubleInitial} title={'Initial Draw'} />
			<DisplayCard cardsRemaining={9} singleEvent={singleFirst} doubleEvent={doubleFirst} title={'First Pull'} />
			<DisplayCard cardsRemaining={6} singleEvent={singleSecond} doubleEvent={doubleSecond} title={'Second Pull'} />
			<DisplayCard cardsRemaining={3} singleEvent={singleThird} doubleEvent={doubleThird} title={'Third Pull'} />
		</OutsWrapper>
	);
}

function retrieveOuts(data, userOuts) {
	return data.reduce((acc, val) => {
		Object.keys(val).forEach(street => {
			const byPositionData = val[street];

			// Create each streets obj.
			if (!acc[street]) {
				acc[street] = {};
			}

			Object.keys(byPositionData).forEach(positionType => {
				const positions = byPositionData[positionType];
				const usersPercentage = positions[userOuts];

				// Create each positions per street and fill it.
				if (!acc[street][positionType]) {
					acc[street][positionType] = usersPercentage;
				}
			});
		});
		return acc;
	}, {});
}

export { DisplayCardsWrapper };