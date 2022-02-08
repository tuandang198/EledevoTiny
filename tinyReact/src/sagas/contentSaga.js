import * as types from '../constant'
import * as actions from '../actions/index'
import {put,takeEvery} from 'redux-saga/effects'
import getAPI from '../fetchAPI/getItems'
import addAPI from '../fetchAPI/addAPI'
import updateAPI from '../fetchAPI/updateAPI'
import deleteAPI from '../fetchAPI/deleteAPI'

function* getContent(action) {
	try {
		const res = yield getAPI(action.payload)
		yield put(actions.getContentSuccess(res))

	} catch (error) {
		yield put(actions.getContentFailure(error))
	}
}
function* addContent(action) {
	try {
		yield addAPI(action.payload)
		yield put(actions.addContentSuccess())
		yield put(actions.getContentRequest())
	} catch (error) {
		yield put(actions.addContentFailure(error))
	}
}

function* updateContent(action) {
	try {
		yield updateAPI(action.payload)
		yield put(actions.updateContentSuccess())
		yield put(actions.getContentRequest())
	} catch (error) {
		yield put(actions.updateContentFailure(error))
	}
}

function* deleteContent(action) {
	try {
		yield deleteAPI(action.payload)
		yield put(actions.deleteContentSuccess())
		yield put(actions.getContentRequest())
	} catch (error) {
		yield put(actions.deleteContentFailure(error))
	}
}

export const contentSaga = [
	takeEvery(types.GET_CONTENT_REQUEST,getContent),
	takeEvery(types.ADD_CONTENT_REQUEST,addContent),
	takeEvery(types.UPDATE_CONTENT_REQUEST,updateContent),
	takeEvery(types.DELETE_CONTENT_REQUEST,deleteContent)
]