import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// date object for react sucks, using moment.js instead. Documentation is really good for moment
//const date = new Date();
// const now = moment();
// console.log(now.format('MMM DD YYYY'));

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false

    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    setupNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        // using a regular expression here to get a correct value and char input for money to two decimal places
        // search regex101 to learn more about it
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ( { createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ( { calendarFocused: focused }))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description of Expense"
                        placeholder="Description of Expense"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        //number of calendar months visible when selecting a day
                        numberOfMonths={1}
                        //inline way to let you select any day in existence 
                        isOutsideRange={ () => false}
                    />
                    
                    <br />

                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.setupNoteChange}
                    >
                    </textarea>

                    <br />

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
