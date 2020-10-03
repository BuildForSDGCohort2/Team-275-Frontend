const updateSchedule = (
    state = {
        schedule: {}
    },
    action) => {
        if (action.type === "UPDATE_SCHEDULE") {
            state= {...state, schedule: action.payload}
        }
        return state;
    };

export default updateSchedule;