import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

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

// Action Generators::

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createDate = 0
    } = {}
) => ({

    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createDate
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_START_DATE
// SET_END_DATE

// SORT_BY_DATE
// SORT_BY_AMOUNT

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

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
                ...state,
                text: action.text
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

//track changes in console fro debug
const unsub = store.subscribe(() => {
    console.log(store.getState());
});

const toEdit = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const toRemove = store.dispatch(addExpense({ description: 'bills', amount: 50000 }));
store.dispatch(addExpense({ description: 'tickets', amount: 2300 }));

store.dispatch(removeExpense({ id: toRemove.expense.id }));

store.dispatch(editExpense(toEdit.expense.id, { amount: 800 } ));
store.dispatch(setTextFilter('rent'));

