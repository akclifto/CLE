import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

//Export stateless functional component
// description, amount, createDate

const ExpenseListItem = ({dispatch, id, description, amount, createDate}) => (

    <div>
        <Link to={'/edit/${id}'}>
            <h3>{description}</h3>
        
        </Link>
        <p> {amount} - {createDate} </p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>

);

export default connect()(ExpenseListItem);