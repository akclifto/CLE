import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';


let onSubmitSpy, historySpy, wrapper;
beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() }

    wrapper = shallow(<AddExpense 
        onSubmit={onSubmitSpy} 
        history={historySpy} />);
});

test('should render AddExpense page correctly', () => {

    // const onSubmitSpy = jest.fn();
    // const historySpy = { push: jest.fn() }

    // const wrapper = shallow(<AddExpense 
    //     onSubmit={onSubmitSpy} 
    //     history={historySpy} />);

    expect(wrapper).toMatchSnapshot();

});

test('should handle onSubmit correctly', () => {

    // const onSubmitSpy = jest.fn();
    // const historySpy = { push: jest.fn() }

    // const wrapper = shallow(<AddExpense 
    //     onSubmit={onSubmitSpy} 
    //     history={historySpy} />);

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
})