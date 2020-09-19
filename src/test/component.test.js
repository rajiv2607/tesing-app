import Increment from '../component/Increment'
import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('my first test' , () =>{
    it('this is one' , () =>{
        expect(true)
    });

    it('find the number of elements present', () => {
        const increment = shallow(<Increment />);
        expect(increment.find('button').length).toBe(2);
        expect(increment.find('label').length).toBe(1);
    });

    it('get the initial state of count', () => {
        const increment = shallow(<Increment />);
       expect(increment.find('.count').text()).toBe("0");
    });

    it('get the state after we click the increment', () => {
        const increment = shallow(<Increment />);
       increment.find('.increment').simulate('click')
       expect(increment.find('.count').text()).toBe("1");
    });

    it('get the state after we click the decrement', () => {
        const increment = shallow(<Increment />);
       increment.find('.decrement').simulate('click')
       expect(increment.find('.count').text()).toBe("-1");
    });

   
})

// Snapshot testing 
describe('Increment component', () => {
    it('should render snapshot', () => {
      const component = renderer.create(<Increment />);
  
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    })
})