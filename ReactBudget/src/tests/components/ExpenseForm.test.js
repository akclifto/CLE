import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

//easey and basic test to get a snapshot of the ExpenseForm
test('should render ExpenseForm correctly', ()  => {

    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

});

test('should render Expense form with expense data at id 1', () => {

    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});


//starting more complext testing, where simulations of sunbmissions, clicks, etc.
test('should render error for invalid form submission', () => {

    // an error message should prompt when form isn't properly filled out.
    // otherwise, error message is empty ''
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} 
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})

test('should set DESCRIPTION on input change', () => {
    
    const value = 'test new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }

    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set NOTE on textarea change', () => {

    const value = 'test note change';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

// should set amount if valid input == 23.50 valid
test('should set amount if valid input == 23.50', () => {

    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

// 23.125 not valid
test('should NOT set amount if invalid input == 23.125', () => {

    const value = '23.125';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount').length).toBe(0);
    expect(wrapper.state('amount')).toBe('');
});

