import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortbyDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { v4 as uuidv4 } from 'uuid';

//make a text filter to search or find things.  
class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (

            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value))
                        // console.log(e.target.value)
                    }} 
                />

                {/*Below is how to create a controlled input using a text filtering process and drop down selectors.*/}

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortbyDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={uuidv4()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuidv4()}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={ () => false}
                />

            </div>
        );
    }

}


const mapStateToProps = (state) => {

    return {
        filters: state.filters
    };

};

export default connect(mapStateToProps)(ExpenseListFilters);