export const setStatusApp = (statusApp) => ({
	type: 'SET_STATUS_APP',
	statusApp,
});

const INITIAL_STATE = {
	statusApp: '',
};

const songbirdReducer = (state = INITIAL_STATE, action) => {
	const {
		type,
		...payload
	} = action;

	switch (type) {
		case 'SET_STATUS_GAME':
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default songbirdReducer;
