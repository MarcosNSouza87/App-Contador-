import {createStore} from 'redux'

const INITIAL_STATE = {
    activeCounter:{},
    counters:[
        { id:1,title:'Counter 1',count:10},
        { id:2,title:'Counter 2',count:222},
    ]
}

function counters(state = INITIAL_STATE,action){
    //console.log(action)
    switch(action.type){
        case 'TOGGLE_COUNTER':
            return {
                ...state,
                activeCounter:action.counter
            };
        case 'INCREMENT_IN_COUNT':
            return {
                ...state,
                counters:state.counters.map(
                    (counter) => counter.id === action.id ? {...counter, count:counter.count+1}:counter
                )
            };
        case 'DECREMENT_IN_COUNT':
            return {
                ...state,
                counters:state.counters.map(
                    (counter) => counter.id === action.id ? {...counter, count:counter.count-1}:counter
                )
            };
        case 'RESET_IN_COUNT':
            return {
                ...state,
                counters:state.counters.map(
                    (counter) => counter.id === action.id ? {...counter, count:0}:counter
                )
            };
        case 'NEW_COUNTER':
            const newCounter = action.payload.new;
            const ids = state.counters.map(counter => counter.id)
            let idf = Math.max(ids);
            if(idf){
                idf = idf+1;
                newCounter.id = idf;
                newCounter.title = `Counter ${idf}`;
            }
            return {
                ...state,
                counters:[...state.counters,newCounter]
            }
        case 'REMOVE_COUNTER':
            return  {
                ...state,
                counters: state.counters.filter(counter => counter !== action.payload.activeCounter)
            }
        default:
            return state;
    }
}

const store = createStore(counters);

export default store;