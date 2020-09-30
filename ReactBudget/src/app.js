import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
    <div>
        This is from the dash page
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from the create dummy component!
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from the edit page component!
    </div>

);

const HelpPage = () => (
    <div>
        This is from the help page component!
    </div>

);

const routes = (

    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} exact={true}/>
            <Route path="/edit" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpPage} />
        </div>
        
        

    </BrowserRouter>

);

 ReactDOM.render(routes, document.getElementById('app'));
 
