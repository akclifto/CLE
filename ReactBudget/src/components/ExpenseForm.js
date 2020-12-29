import React from 'react';
import { sortByAmount } from '../actions/filters';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: ''

    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    setupNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ( { note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        // using a regular expression here to get a correct value and char input for money to two decimal places
        // search regex101 to learn more about it
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ( { amount }));
        }
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
