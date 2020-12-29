//Export stateless functional component
// description, amount, createDate

import React from 'react';

const ExpenseListItem = ({description, amount, createDate}) => (

    <div>
        <h3>{description}</h3>
        <p> {amount} - {createDate} </p>
    </div>

);

export default ExpenseListItem;