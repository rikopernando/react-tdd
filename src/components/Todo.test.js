import React from 'react'
import { shallow } from 'enzyme'
import Todo from './Todo'

it('shows todo text', () => {
    const subject = shallow(<Todo text="Attend React Cont 17" isDone />)

    expect(subject.find('.todo').text()).toBe('Attend React Cont 17')
})

it('shows line-through when it is done', () => {

    const subject = shallow(<Todo text="Attend React Cont 17" isDone />)

    expect(subject.find('.todo').text()).toBe('Attend React Cont 17')

    expect(subject.prop('style').textDecoration).toBe('line-through')
})

it('should not show line-through when it is done', () => {

    const subject = shallow(<Todo text="Attend React Cont 17" isDone={false} />)

    expect(subject.find('.todo').text()).toBe('Attend React Cont 17')

    expect(subject.prop('style').textDecoration).toBe('none')
})
