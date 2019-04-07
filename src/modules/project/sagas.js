// NPM Dependencies
import { fork, takeLatest, put, call } from 'redux-saga/effects';

// Local Dependencies
import { checkRepo } from './services';
import { checkRepoSignal } from './actions';

export function* checkRepoOnRequest({ payload }) {
    try {
        const { path } = payload;

        const response = yield call(checkRepo, path);

        yield put(checkRepoSignal.success(response));
    } catch (error) {
        yield put(checkRepoSignal.failure({ error }));
    }
}

export function* watchCheckRepoSignal() {
    yield takeLatest(
        checkRepoSignal.REQUEST,
        checkRepoOnRequest
    );
}

// // Module Dependencies
// import { initApplicationSignal } from 'modules/app/actions';
//
// // Local Dependencies
// import {
//     // configAuthSignal,
//     getUserCountSignal,
//     configPubSubSignal,
//     sendControlSignal,
//     updateDroneStatus
// } from './actions';
// import { configurePubSub, sendControl, getCurrentUsers, watchPresence } from './services';
//
// export function* sendControlOnRequest({ payload }) {
//     try {
//         const { control } = payload;
//
//         const publishControl = yield call(sendControl, { control });
//
//         yield put(sendControlSignal.success(publishControl));
//     } catch (error) {
//         yield put(sendControlSignal.failure({ error }));
//     }
// }
//
// export function* watchSendControlSignal() {
//     yield throttle(
//         500,
//         sendControlSignal.REQUEST,
//         sendControlOnRequest
//     );
// }
//
// // export function* initAuthOnRequest() {
// //     try {
// //         yield call(configureAuth);
// //
// //         yield put(configAuthSignal.success());
// //     } catch (error) {
// //         yield put(configAuthSignal.failure({ error }));
// //     }
// // }
// //
// // export function* watchInitAuthSignal() {
// //     yield takeLatest(
// //         initApplicationSignal.SUCCESS,
// //         initAuthOnRequest
// //     );
// // }
//
// export function* initPubSubOnRequest() {
//     try {
//         const pubsubConnect = yield call(configurePubSub);
//
//         yield put(configPubSubSignal.success(pubsubConnect));
//     } catch (error) {
//         yield put(configPubSubSignal.failure({ error }));
//     }
// }
//
// export function* watchAppInitSuccessSignal() {
//     yield takeLatest(
//         initApplicationSignal.SUCCESS,
//         initPubSubOnRequest
//     );
// }
//
// function* catchingLoads(socketChannel) {
//     while (true) {
//         const payload = yield take(socketChannel);
//         const { action: status, uuid } = payload;
//         if (uuid === 'droneboi') {
//             const droneStatus = status === 'join';
//             yield put(updateDroneStatus(droneStatus));
//         }
//     }
// }
//
// export function* watchPresenceOnRequest() {
//     const socketChannel = yield call(watchPresence);
//
//     yield call(catchingLoads, socketChannel);
// }
//
// export function* checkCurrentUsersOnRequest() {
//     try {
//         const getUserCount = yield call(getCurrentUsers);
//
//         const { occupants } = getUserCount.channels.controls;
//
//         const hasDrone = _.some(occupants, ['uuid', 'droneboi']);
//
//         yield put(updateDroneStatus(hasDrone));
//
//         yield put(getUserCountSignal.success({ getUserCount }));
//
//         // watch droneboi status realtime
//         yield call(watchPresenceOnRequest);
//     } catch (error) {
//         yield put(getUserCountSignal.failure({ error }));
//     }
// }
//
// export function* watchCheckCurrentUsersSignal() {
//     yield takeLatest(
//         getUserCountSignal.REQUEST,
//         checkCurrentUsersOnRequest
//     );
// }
//
// export function* watchInitPubSubSuccessSignal() {
//     yield takeLatest(
//         configPubSubSignal.SUCCESS,
//         checkCurrentUsersOnRequest
//     );
// }
//
export default [
    // fork(watchAppInitSuccessSignal),
    fork(watchCheckRepoSignal)
];
