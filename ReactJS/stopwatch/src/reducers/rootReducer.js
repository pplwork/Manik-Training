const initState = {
    isActive: false,
    isPaused: true,
    time: 0,
    Laps: [],
    intervalID: null
}

const rootReducer = (state=initState,action)=>{
    switch(action.type){
        case "START_WATCH":
            return{
                ...state,
                isActive:true,
                isPaused: false,
                time: 0
            }

        case "SET_INTERVAL":
            return{
                ...state,
                intervalID: action.id
            }
        case "RESUME_WATCH":
            return{
                ...state,
                isPaused: false
            }
        case "PAUSE_WATCH":
            return{
                ...state,
                isPaused: true
            }
        case "INCREASE_TIME":
            return{
                ...state,
                time: state.time+10
            }
        case "STOP_WATCH":
            if(state.isActive){
                return {
                    ...state,
                    isActive: false,
                    isPaused: true
                }
            }
            return state;
        case "RESET_WATCH":
            if(state.isPaused){
                return {
                    ...state,
                    Laps:[],
                    time:0,
                    isActive: false,
                    isPaused:true
                }
            }
            return state;
        case "LAPS":
            if(state.isActive&&!state.isPaused){
                return {
                    ...state,
                    Laps:[...state.Laps,{
                        lapNo: state.Laps.length,
                        lapTime: state.time,
                        splitTime: state.Laps.length ? state.time-state.Laps[state.Laps.length-1].lapTime : state.time
                    }]
                }
            }
            return state;
        default:
            return state;
    }
}

export default rootReducer;