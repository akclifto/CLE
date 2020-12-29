import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

//Export stateless functional component
// description, amount, createDate

const ExpenseListItem = ({dispatch, id, description, amount, createDate}) => (

    <div>
        <h3>{description}</h3>
        <p> {amount} - {createDate} </p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>

);

export default connect()(ExpenseListItem);