import initState from '../state';

// reducer的作用就是产生新的state
const reducer1 = (state = initState, action) => {
	switch (action.type) {
		case 'addCount':
			return (state.count = state.count + action.count);
		default:
			return state.count;
	}
};

export default reducer1;
