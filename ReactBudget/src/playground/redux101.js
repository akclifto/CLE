import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {

        case 'INCREMENT' : 
            const incrementBy = typeof action.incrementBy == 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy == 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.count
            };
            
        default :
            return state;
    }
});

//subscribe checks for when the redux state changes for the store var
const unsub = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - obj that gets sent to the redux store.  Below are actions.

// We want to incr count, decr count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10
});

//to unsuscribe from something to stop watching it, call the var created with the subscribe function.
// unsub();

store.dispatch({
    type: 'INCREMENT',
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'DECREMENT'
});

// We want to reset count
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 505
});

