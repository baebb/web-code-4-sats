import { UPDATE_DRONE_STATUS_DELTA } from './actions';

const initialState = {
    droneOnline: false,
    cockpitLoading: true
};

function updateDroneStatus(state, droneStatus) {
    return {
        ...state,
        droneOnline: droneStatus,
        cockpitLoading: false
    };
}

export default function cockpitReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_DRONE_STATUS_DELTA:
            return updateDroneStatus(state, action.payload);
        default:
            return state;
    }
}
