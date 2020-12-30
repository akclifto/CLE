import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Editing expense with id of {props.match.params.id}
const EditExpense = (props) => {
    // console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    //dispatch the action to edit the expense
                    // redirect back to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                    // console.log('updated', expense);
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>

        </div>

    );

};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

export default connect(mapStateToProps)(EditExpense);
