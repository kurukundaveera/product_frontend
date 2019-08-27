import React from 'react';
import { shallow} from 'enzyme';
import FileUpload from '../components/FileUpload/FileUpload';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<FileUpload/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#file')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#btn4')).toHaveLength(1);
    });

   
    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().file).toEqual('');
        });
      });
     
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const file = wrapper.find('#file');
          file.simulate('change', { target: { name:'file',value: 'file' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().loginData.customerName).toEqual('file');
        })
      });
    
      
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#file').simulate('change', { target: {name:'file', value: 'file' } });
          
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn4');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().file).toEqual('file');
        });

      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<FileUpload />);
          const spy = jest.spyOn(comp.instance(), 'onFormSubmit');
          comp.instance().forceUpdate();
          comp.find('#btn4').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});