import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
// import expenses from '../fixtures/expenses'

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={36786318}/>)
  expect(wrapper).toMatchSnapshot()
})