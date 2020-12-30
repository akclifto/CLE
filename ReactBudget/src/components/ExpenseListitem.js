import React from 'react';
import { Link } from 'react-router-dom';


//Export stateless functional component
// description, amount, createDate

const ExpenseListItem = ({dispatch, id, description, amount, createDate}) => (

    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        
        </Link>
        <p> {amount} - {createDate} </p>

    </div>

);

export default ExpenseListItem;