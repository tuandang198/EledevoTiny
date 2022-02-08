/* eslint-disable import/no-anonymous-default-export */
import * as types from '../constant'

const initialState = {
	listItem: [],
	isFetching: false,
	dataFetched: false,
	error: false,
	errorMessage: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case types.GET_CONTENT_REQUEST:
		case types.ADD_CONTENT_REQUEST:
		case types.DELETE_CONTENT_REQUEST:
		case types.UPDATE_CONTENT_REQUEST:
			return {
				...state,
				isFetching: true
			}
		case types.GET_CONTENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
				listItem: payload.studentData
			}
		case types.ADD_CONTENT_SUCCESS:
		case types.DELETE_CONTENT_SUCCESS:
		case types.UPDATE_CONTENT_SUCCESS:
			return {
				...state,
				isFetching: false,
				dataFetched: true,
			}
		case types.GET_CONTENT_FAILURE:
		case types.ADD_CONTENT_FAILURE:
		case types.DELETE_CONTENT_FAILURE:
		case types.UPDATE_CONTENT_FAILURE:
			return {
				...state,
				isFetching: false,
				dataFetched: false,
				error: true,
				errorMessage: payload.errorMessage
			}
		default:
			return state
	}
}
