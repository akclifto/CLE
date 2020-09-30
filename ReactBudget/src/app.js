import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        <h1>404! NOT FOUND PAGE</h1>
        <Link to="/">Go Home</Link>

    </div>

);

const Header = () => (
    <header>
        <h1>Budget App</h1>
         <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>  | 
         <NavLink to="/create" activeClassName="is-active"> Add Expense</NavLink>  | 
         <NavLink to="/edit" activeClassName="is-active"> Edit Expense</NavLink>  | 
         <NavLink to="/help" activeClassName="is-active"> Help</NavLink>  | 

    </header>

);

const routes = (

    <BrowserRouter>
        <div>
            <Header/>

            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>



    </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('app'));

