import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (

    <div>
        <h1>Expense List</h1>
        {props.filters.text} 
        {props.expenses.length}
    </div>

);


const mapStateToProps = (state) => {

    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

// We can use connect from redux and the state of the components to access information as needed.  
// The connect components lets us access info within other components where the structure may be disjointed
//      meaning, there is no direct link between two components that need to connect information.  
//      this apparently is pretty common.

//  connect (the state of the props to be mapped)(where the connect will be mapped)

export default connect(mapStateToProps)(ExpenseList);
