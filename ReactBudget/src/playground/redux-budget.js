import { createStore, combineReducers } from 'redux'; 

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

