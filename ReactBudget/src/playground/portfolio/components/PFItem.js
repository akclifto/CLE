import React from 'react';
import { Link } from 'react-router-dom';


const PFItem = (props) => {
    console.log(props);
    return (
        <div>
        <h1>This is What I Have Done</h1>
            This page is for the item with the id of:  {props.match.params.id}
            <div>
                <Link to="/portfolio">Go Back</Link>
            </div>
        </div>
    
    );

};

export default PFItem;