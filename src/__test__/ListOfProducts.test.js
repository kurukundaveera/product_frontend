import React from 'react';
import {shallow,mount} from 'enzyme';
import ListOfProducts from '../components/ListOfProducts/ListOfProducts';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<ListOfProducts/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn6')).toHaveLength(0);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn7')).toHaveLength(0);
    });

    it('should render h1 tag',()=>{
        expect(wrapper.find('h5')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListOfProducts/>);
          const spy = jest.spyOn(comp.instance(), 'handleClick');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListOfProducts/>);
          const spy = jest.spyOn(comp.instance(), 'handleBuyProducts');
          comp.instance().forceUpdate();
          comp.find('#btn7').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
   
      describe('when list of products is ',()=>{
        const list=[
          {
            productName:"fund bond",
        
          },
          {
            productName:"fund bond",
        
          },
          {
            productName:"fund bond",
        
          },
        ]
        beforeEach(()=>{
          wrapper=shallow(<ListOfProducts list={list} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<ListOfProducts list={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });
      describe('when list of products is ',()=>{
        const list1=[
          {
            productDescription:"fund bond",
            brokerage:1
        
          },
          {
            productDescription:"fund bond",
            brokerage:1
        
          },
          {
            productDescription:"fund bond",
            brokerage:1
        
          },
        ]
        beforeEach(()=>{
          wrapper=shallow(<ListOfProducts list2={list2} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<ListOfProducts list1={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});