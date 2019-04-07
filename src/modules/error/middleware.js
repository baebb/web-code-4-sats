// Constants
const APP_NAME = 'CODE4SATS_PORTAL';

/**
 * Helper function for logging errors
 * TODO: Implement real world logger to backend service
 * @param  {any} ...args
 */
const errorLogger = (...args) => {
    /* eslint-disable no-console */
    console.group(APP_NAME);
    console.info(...args);
    console.groupEnd();
};

export default () => store => (next) => {
    if (!next) {
        throw new Error('`next` action is not received from middleware. Check redux middlewares setup.');
    }

    return (action) => {
        const payload = action.payload || {};
        const isFailure = (action.type || '').endsWith('/FAILURE');
        const containsError = Object.prototype.hasOwnProperty.call(payload, 'error') && !!payload.error;
        const hasError = isFailure && containsError;

        if (hasError) {
            const errorCode = `${APP_NAME}_ERROR`;
            const debugInfo = { action };

            const { type = 'UNKNOWN' } = action;
            const { error = {}, module } = action.payload;
            const state = store.getState();
            const username = state.user;

            const url = window.location.href;
            const env = 'dev';
            const version = '1.0.0';
            const { userAgent } = window.navigator;
            const json = {
                service: APP_NAME,
                module: module || type,
                url,
                env,
                version,
                userAgent,
                time: (new Date()).toString(),
                username,
                errorCode
            };

            if (error && Object.prototype.hasOwnProperty.call(error, 'stack')) {
                Object.assign(json, { error_stack: error.stack });
            }

            if (debugInfo) {
                Object.assign(json, { debugInfo });
            }

            // TODO: Log error to service in future.
            errorLogger(json);
        }

        return next(action);
    };
};
