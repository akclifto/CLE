import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortbyDate, sortByAmount } from '../actions/filters';

//make a text filter to search or find things.  
const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
                // console.log(e.target.value)
            }} />

        {/*Below is how to create a controlled input using a text filtering process and drop down selectors.*/}
        
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortbyDate())
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {

    return {
        filters: state.filters
    };

};

export default connect(mapStateToProps)(ExpenseListFilters);