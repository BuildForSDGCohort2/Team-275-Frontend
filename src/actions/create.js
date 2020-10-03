import firebase from '../firebase/firebase';

export const createSchedule = (post) => {
    return async function(dispatch) {
        const firebaseSchedule = await firebase.createShedule(post);
        dispatch({type: "CREATE_SCHEDULE", payload: firebaseSchedule});
    }
}