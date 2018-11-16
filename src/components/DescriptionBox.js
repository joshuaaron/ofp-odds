import React from 'react';
import { css } from 'emotion';

function DescriptionBox() {
	return (
		<div className={css({ margin: '15px 15px 0'})}>
			<h4 className={css({ margin: '0 0 8px', fontWeight: '400'})}>Runner Runner:</h4>
			<p className={css({ margin: '0' })}>
			- 3 to flush: A94ddd (10 outs if live)<br />
				- 3 to boat: TT8 (5 outs if live) <br />
				- Making Trips: J to JJJ (3 outs if live)<br />
				- TwoPair+: 458 to 45588 (9 outs if live) or KQ to KKQQ, KQQQ or KKKQ (6 outs if live)
			</p>
		</div>
	)
}

export { DescriptionBox }
