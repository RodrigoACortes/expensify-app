import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters }  from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const text = { target: {
    value: 'hi'
  }}
  wrapper.find('input').simulate('change', text)
  expect(setTextFilter).toHaveBeenLastCalledWith(text.target.value)
})

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', { target: {
    value: 'date'
  }})
  expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: {
    value: 'amount'
  }})
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: 0,
    endDate: 10
  })
  expect(setStartDate).toHaveBeenLastCalledWith(0)
  expect(setEndDate).toHaveBeenLastCalledWith(10)
})

test('should handle date focus changes', () => {
  const focused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused)
  expect(wrapper.state('calendarFocused')).toBe(focused)
})