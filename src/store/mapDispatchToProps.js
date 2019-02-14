const mapDispatchToProps = (dispatch) => {
	return {
		PayIncrease: () => dispatch({ type: 'addCount', count: 1 })
	};
};

export default mapDispatchToProps;
