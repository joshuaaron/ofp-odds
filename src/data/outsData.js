const outsData = () => {
	const FIRST_FIVE = 'initial';
	const FIRST_PULL = 'firstPull';
	const SECOND_PULL = 'secondPull';
	const THIRD_PULL = 'thirdPull';

	const OUT_OF_POS = 'outOfPos';
	const IN_POS = 'inPos';

	const SINGLE_EVENT_OUTS = [
		{
			[FIRST_FIVE]: {
				[OUT_OF_POS]: {
					1: 26,
					2: 45,
					3: 60,
					4: 71,
					5: 79,
					6: 85,
					7: 89,
					8: 93,
					9: 95,
					10: 96,
					11: 98,
					12: 98,
					13: 99,
					14: 99,
					15: 99,
				},
				[IN_POS]: {
					1: 29,
					2: 49,
					3: 65,
					4: 76,
					5: 83,
					6: 89,
					7: 92,
					8: 95,
					9: 97,
					10: 98,
					11: 99,
					12: 99,
					13: 99,
					14: 99,
					15: 99,
				}
			}
		},

		// FIRST PULL
		{
			[FIRST_PULL]: {
				[OUT_OF_POS]: {
					1: 23,
					2: 41,
					3: 56,
					4: 67,
					5: 75,
					6: 82,
					7: 87,
					8: 90,
					9: 93,
					10: 95,
					11: 97,
					12: 98,
					13: 99,
					14: 99,
					15: 99,
				},
				[IN_POS]: {
					1: 24,
					2: 43,
					3: 58,
					4: 69,
					5: 77,
					6: 84,
					7: 88,
					8: 92,
					9: 94,
					10: 96,
					11: 97,
					12: 98,
					13: 99,
					14: 99,
					15: 99,
				}
			}
		},

		// SECOND PULL
		{
			[SECOND_PULL]: {
				[OUT_OF_POS]: {
					1: 18,
					2: 33,
					3: 45,
					4: 56,
					5: 65,
					6: 72,
					7: 78,
					8: 83,
					9: 87,
					10: 90,
					11: 92,
					12: 94,
					13: 96,
					14: 97,
					15: 98,
				},
				[IN_POS]: {
					1: 19,
					2: 34,
					3: 48,
					4: 58,
					5: 67,
					6: 75,
					7: 80,
					8: 85,
					9: 89,
					10: 92,
					11: 94,
					12: 96,
					13: 97,
					14: 98,
					15: 99,
				}
			}
		},

		// THIRD PULL
		{
			[THIRD_PULL]: {
				[OUT_OF_POS]: {
					1: 10,
					2: 20,
					3: 29,
					4: 37,
					5: 45,
					6: 52,
					7: 58,
					8: 64,
					9: 69,
					10: 73,
					11: 78,
					12: 81,
					13: 85,
					14: 88,
					15: 90,
				},
				[IN_POS]: {
					1: 11,
					2: 21,
					3: 31,
					4: 39,
					5: 47,
					6: 55,
					7: 61,
					8: 67,
					9: 72,
					10: 77,
					11: 81,
					12: 84,
					13: 88,
					14: 90,
					15: 92,
				}
			}
		}
	];

	const DOUBLE_EVENT_OUTS = [
		{
			[FIRST_FIVE]: {
				[OUT_OF_POS]: {
					2: 6,
					3: 16,
					4: 27,
					5: 38,
					6: 49,
					7: 58,
					8: 67,
					9: 74,
					10: 80,
				},
				[IN_POS]: {
					2: 8,
					3: 19,
					4: 32,
					5: 45,
					6: 56,
					7: 66,
					8: 74,
					9: 81,
					10: 86,
				}
			}
		},

		// FIRST PULL
		{
			[FIRST_PULL]: {
				[OUT_OF_POS]: {
					2: 5,
					3: 13,
					4: 22,
					5: 32,
					6: 42,
					7: 52,
					8: 61,
					9: 68,
					10: 75,
				},
				[IN_POS]: {
					2: 5,
					3: 14,
					4: 24,
					5: 35,
					6: 46,
					7: 56,
					8: 64,
					9: 72,
					10: 78,
				}
			}
		},

		// SECOND PULL
		{
			[SECOND_PULL]: {
				[OUT_OF_POS]: {
					2: 3,
					3: 7,
					4: 13,
					5: 21,
					6: 28,
					7: 36,
					8: 44,
					9: 51,
					10: 58,
				},
				[IN_POS]: {
					2: 3,
					3: 8,
					4: 15,
					5: 23,
					6: 31,
					7: 39,
					8: 48,
					9: 55,
					10: 63,
				}
			}
		},

		// THIRD PULL
		{
			[THIRD_PULL]: {
				[OUT_OF_POS]: {
					2: 1,
					3: 2,
					4: 4,
					5: 7,
					6: 10,
					7: 14,
					8: 18,
					9: 22,
					10: 27,
				},
				[IN_POS]: {
					2: 1,
					3: 2,
					4: 5,
					5: 8,
					6: 11,
					7: 16,
					8: 20,
					9: 25,
					10: 30,
				}
			}
		}
	];

	return [
		SINGLE_EVENT_OUTS,
		DOUBLE_EVENT_OUTS,
	];
}

export {outsData}


// `
// USED FOR:
// 	- 3 to flush, ie A94ddd (10 outs if live)
// 	- 3 to boat, ie TT8 (5 outs if live)
// 	- Making Trips, ie J to JJJ (3 outs if live)
// 	- TwoPair+ ie, 458 to 45588 (9 outs if live) or KQ to KKQQ, KQQQ or KKKQ (6 outs if live)
// `