import initState from '../state';

// reducer的作用就是产生新的state
const reducer1 = ({count} = initState, action) => {
	switch (action.type) {
		case 'addCount':
			return ({count:count + action.count});
		default:
			return {count};
	}
};

export default reducer1;
