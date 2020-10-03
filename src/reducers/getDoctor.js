const getDoctor = (
    state = {
        doctor: {}
    },
    action) => {
        if (action.type === "GET_DOCTOR") {
            state= {...state, doctor: action.payload}
        }
        return state;
    };

export default getDoctor;