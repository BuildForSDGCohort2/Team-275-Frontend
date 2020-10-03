const createSchedule = (
    state = {
        post: {}
    },
    action) => {
        if (action.type == "CREATE_SCHEDULE") {
            state = {...state, post: action.payload}
        }
        return state;
    };

export default createSchedule;