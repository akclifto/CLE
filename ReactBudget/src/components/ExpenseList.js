import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (

    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
    </div>

);

// We can use connect from redux and the state of the components to access information as needed.  
// The connect components lets us access info within other components where the structure may be disjointed
//      meaning, there is no direct link between two components that need to connect information.  
//      this apparently is pretty common.
const ConnectedExpenseList = connect((state) => {

    return {
        expenses: state.expenses
    };

})(ExpenseList);

export default ConnectedExpenseList;