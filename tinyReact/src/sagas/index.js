import { all } from 'redux-saga/effects';
import {contentSaga} from '../sagas/contentSaga'
function* rootSaga() {
  yield all([
	  ...contentSaga
  ]);
}

export default rootSaga