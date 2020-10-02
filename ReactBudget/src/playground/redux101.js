import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT' : 
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            }
        default :
            return state;
    }
});

console.log(store.getState());

// Actions - obj that gets sent to the redux store.  Below are actions.

// We want to incr count, decr count
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());

// We want to reset count
store.dispatch({
    type: 'RESET'
});
console.log(store.getState());

