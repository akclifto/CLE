import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/get-expenses';

//these should be the last two imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();
console.log(store.getState());

store.dispatch(addExpense( { description: 'Water bill' } ));
store.dispatch(addExpense({description: 'Gas bill', amount: 30030}));
store.dispatch(addExpense({description: 'Tacos Run', amount: 2000}));
store.dispatch(setTextFilter('water'));

//shows dynamic nature of rendered components with redux, "water" will initial be displayed, 
// then changed to "gas" using funct below
setTimeout(() => {
    store.dispatch(setTextFilter('Gas'));
}, 3000);

console.log(store.getState());

const state = store.getState();
const visExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visExpenses);

// store.dispatch(getVisibleExpenses());

const jsx = ( 
     <Provider store = {store}>
        <AppRouter />
     </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));

