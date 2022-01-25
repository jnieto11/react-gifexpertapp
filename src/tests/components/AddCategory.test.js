import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
configure({ adapter: new Adapter() });

describe('Pruebas en <AddCategory/>', () => {

    const setcategories = jest.fn();
    let wrapper = shallow(<AddCategory setcategories={setcategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setcategories} />);
    })
    test('Debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })


    test('No debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setcategories).not.toHaveBeenCalled();

    })

    test('Debe llamar setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
    // 1. simular el inputChange
           wrapper.find('input').simulate('change', { target: { value } }); 
    // 2. simular el submit
           wrapper.find('form').simulate('submit', { preventDefault() { } });
    // 3. setCategories se debe de haber llamado
           expect(setcategories).toHaveBeenCalled();
           expect(setcategories).toHaveBeenCalledTimes(1);
           expect(setcategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. el valor del input debe estar vacio
           expect(wrapper.find('input').prop('value')).toBe('');
    
              
       
        
    })
    

})
