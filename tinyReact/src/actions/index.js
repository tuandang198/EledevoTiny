import * as types from '../constant'

export function getContentRequest(payload) {
	return({
		type: types.GET_CONTENT_REQUEST,
		payload
	})
}

export function getContentSuccess(payload) {
	return({
		type: types.GET_CONTENT_SUCCESS,
		payload
	})
}

export function getContentFailure(payload) {
	return({
		type: types.GET_CONTENT_FAILURE,
		payload
	})
}

export function addContentRequest(payload) {
	return({
		type: types.ADD_CONTENT_REQUEST,
		payload
	})
}

export function addContentSuccess(payload) {
	return({
		type: types.ADD_CONTENT_SUCCESS,
		payload
	})
}

export function addContentFailure(payload) {
	return({
		type: types.ADD_CONTENT_FAILURE,
		payload
	})
}

export function updateContentRequest(payload) {
	return({
		type: types.UPDATE_CONTENT_REQUEST,
		payload
	})
}

export function updateContentSuccess(payload) {
	return({
		type: types.UPDATE_CONTENT_SUCCESS,
		payload
	})
}

export function updateContentFailure(payload) {
	return({
		type: types.UPDATE_CONTENT_FAILURE,
		payload
	})
}

export function deleteContentRequest(payload) {
	return({
		type: types.DELETE_CONTENT_REQUEST,
		payload
	})
}

export function deleteContentSuccess(payload) {
	return({
		type: types.DELETE_CONTENT_SUCCESS,
		payload
	})
}

export function deleteContentFailure(payload) {
	return({
		type: types.DELETE_CONTENT_FAILURE,
		payload
	})
}