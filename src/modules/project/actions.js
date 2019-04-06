// Lib Dependencies
import {
    // createActionCreator,
    // createDeltaAction,
    createSignalAction
} from 'lib/redux';

// Module Name
export const MODULE_NAME = 'PROJECT';

// Action Types
export const CHECK_REPO = 'CHECK_REPO';

// Signals
export const checkRepoSignal = createSignalAction(MODULE_NAME, CHECK_REPO);


// Deltas
// export const UPDATE_DRONE_STATUS_DELTA = createDeltaAction(MODULE_NAME, UPDATE_DRONE_STATUS);
// export const UPDATE_APPLICATION_STATE_DELTA =
//     createDeltaAction(MODULE_NAME, UPDATE_APPLICATION_STATE);
// export const UPDATE_ERROR_STATE_DELTA = createDeltaAction(MODULE_NAME, UPDATE_ERROR_STATE);

// Action Creators
// export const updateDroneStatus = createActionCreator(UPDATE_DRONE_STATUS_DELTA);
// export const updateApplicationState = createActionCreator(UPDATE_APPLICATION_STATE_DELTA);
// export const updateErrorState = createActionCreator(UPDATE_ERROR_STATE_DELTA);
