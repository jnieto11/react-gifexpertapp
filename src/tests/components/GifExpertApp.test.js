import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import { GifExpertApp } from "../../GifExpertApp";

configure({ adapter: new Adapter() });

describe('Prueba con GifExpertApp', () => {

    test('Debe mostrarse correctamente ', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar una lista de categories', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
