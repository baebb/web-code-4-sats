// NPM Dependencies
import axios from 'axios';

export const GITHUB_URL = 'https://api.github.com';

export const checkRepo = path =>
    axios.get(`${GITHUB_URL}/repos${path}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));

// // NPM Dependencies
// import PubNub from 'pubnub';
// import { eventChannel } from 'redux-saga';
//
// import apiConfig from 'config/api';
//
// const { pubnubPublishKey, pubnubSubscribeKey } = apiConfig;
//
// let pubnub;
//
// export const configurePubSub = () => {
//     pubnub = new PubNub({
//         publishKey: pubnubPublishKey,
//         subscribeKey: pubnubSubscribeKey
//     });
//
//     pubnub.subscribe({
//         channels: ['controls'],
//         withPresence: true
//     });
//
//     return new Promise((resolve, reject) => {
//         pubnub.addListener({
//             status: statusEvent => (statusEvent.category === 'PNConnectedCategory' ?
//                 resolve(statusEvent) : reject(statusEvent))
//         });
//     });
// };
//
// export const watchPresence = () => eventChannel((emit) => {
//     pubnub.addListener({
//         presence: (presence) => {
//             // const { action } = presence;
//             // console.log('new presence');
//             // console.log('action: ', action);
//             // console.log('new presence: ', presence);
//             emit(presence);
//         }
//     });
//     return () => {
//         console.log('lol what even is this?');
//     };
// });
//
// export const getCurrentUsers = () => new Promise((resolve) => {
//     pubnub.hereNow({
//         channels: ['controls'],
//         includeUUIDs: true,
//         includeState: true
//     }, (status, response) => resolve(response));
// });
//
// // export const connectToChannel = () => {
// //     channel = socket.subscribe('private-controls');
// //
// //     return new Promise((resolve, reject) => {
// //         channel.bind('pusher:subscription_succeeded', () => resolve());
// //         channel.bind('pusher:subscription_error', error => reject(error));
// //     });
// // };
//
//
// export const sendControl = ({ control }) => new Promise((resolve, reject) => {
//     pubnub.publish(
//         {
//             message: { control },
//             channel: 'controls'
//         },
//         status => (status.error ? reject(status) : resolve(status))
//     );
// });
//
