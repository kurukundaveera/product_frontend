import React from 'react';
import { shallow} from 'enzyme';
import BuyProducts from '../components/BuyProducts/BuyProducts';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<BuyProducts/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('table')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#customerName')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#mobileNumber')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#emailId')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#city')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#quantity')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn1')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn3')).toHaveLength(1);
    });
    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().buyProducts.customerName).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().buyProducts.mobileNumber).toEqual('');
          });
      });
      describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyProducts.emailId).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyProducts.city).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().buyProducts.quantity).toEqual('');
        });
    });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const customerName = wrapper.find('#customerName');
          customerName.simulate('change', { target: { name:'customerName',value: 'divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().loginData.customerName).toEqual('divya');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const mobileNumber = wrapper.find('#mobileNumber');
          mobileNumber.simulate('change', { target: {name:'mobileNumber', value: '1234567899' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyProducts.mobileNumber).toEqual('1234567899');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const emailId = wrapper.find('#emailId');
          emailId.simulate('change', { target: {name:'emailId', value: 'divya@hcl.com' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyProducts.emailId).toEqual('divya@hcl.com');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const city = wrapper.find('#city');
          city.simulate('change', { target: {name:'city', value: 'chittoor' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyProducts.city).toEqual('chittoor');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const quantity = wrapper.find('#quantity');
          quantity.simulate('change', { target: {name:'quantity', value: '20' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().buyProducts.quantity).toEqual('20');
        })
      });
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#customerName').simulate('change', { target: {name:'customerName', value: 'divya' } });
          wrapper.find('#mobileNumber').simulate('change', { target: { name:'mobileNumber',value: '1234567891' } });
          wrapper.find('#emailId').simulate('change', { target: { name:'emailId',value: 'divya@hcl.com' } });
          wrapper.find('#city').simulate('change', { target: { name:'city',value: 'chittoor' } });
          wrapper.find('#quantity').simulate('change', { target: { name:'quantity',value: '20' } });
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn1');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().buyProducts.customerName).toEqual('divya');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().buyProducts.mobileNumber).toEqual('1234567899');
        });
        it('should have excepted Password', () => {
            expect(wrapper.state().buyProducts.emailId).toEqual('divya@hcl.com');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyProducts.city).toEqual('chittoor');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().buyProducts.quantity).toEqual('20');
          });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BuyProducts />);
          const spy = jest.spyOn(comp.instance(), 'handleBuyProduct');
          comp.instance().forceUpdate();
          comp.find('#btn1').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<BuyProducts />);
          const spy = jest.spyOn(comp.instance(), 'cancel');
          comp.instance().forceUpdate();
          comp.find('#btn2').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});