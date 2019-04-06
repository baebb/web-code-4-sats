// Lib Dependencies
import {
    createActionCreator,
    createDeltaAction,
    createSignalAction
} from 'lib/redux';

// Module Name
export const MODULE_NAME = 'COCKPIT';

// Action Types
export const CONFIG_AUTH = 'CONFIG_AUTH';
export const CONFIG_PUBSUB = 'CONFIG_PUBSUB';
export const SEND_CONTROL = 'SEND_CONTROL';
export const GET_USER_COUNT = 'GET_USER_COUNT';
export const UPDATE_DRONE_STATUS = 'UPDATE_DRONE_STATUS';

// Signals
// export const configAuthSignal = createSignalAction(MODULE_NAME, CONFIG_AUTH);
export const configPubSubSignal = createSignalAction(MODULE_NAME, CONFIG_PUBSUB);
export const sendControlSignal = createSignalAction(MODULE_NAME, SEND_CONTROL);
export const getUserCountSignal = createSignalAction(MODULE_NAME, GET_USER_COUNT);


// Deltas
export const UPDATE_DRONE_STATUS_DELTA = createDeltaAction(MODULE_NAME, UPDATE_DRONE_STATUS);
// export const UPDATE_APPLICATION_STATE_DELTA =
//     createDeltaAction(MODULE_NAME, UPDATE_APPLICATION_STATE);
// export const UPDATE_ERROR_STATE_DELTA = createDeltaAction(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
export const updateDroneStatus = createActionCreator(UPDATE_DRONE_STATUS_DELTA);
// export const updateApplicationState = createActionCreator(UPDATE_APPLICATION_STATE_DELTA);
// export const updateErrorState = createActionCreator(UPDATE_ERROR_STATE_DELTA);
