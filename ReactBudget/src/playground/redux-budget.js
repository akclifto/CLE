import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE

// SET_START_DATE
// SET_END_DATE
// SET_TEXT_FILTER

// SORT_BY_DATE
// SORT_BY_AMOUNT

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return {

            };
        case 'REMOVE_EXPENSE':
            return {

            };
        case 'EDIT_EXPENSE':
            return {

            };
        default:
            return state;

    }

};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {

            };
        case 'SORT_BY_DATE':
            return {

            };
        case 'SORT_BY_AMOUNT':
            return {

            };
        default: 
            return state;   
    }

};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer, 
        filters: filtersReducer
    })
);


console.log(store.getState());

// const unsub = store.subscribe(() => {
//     console.log(store.getState());
// });

const demoState = {

    expenses: [{
        id: 'asdflkaj',
        description: 'January Rent',
        note: 'Final payment',
        amount: 54500,
        createDate: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

