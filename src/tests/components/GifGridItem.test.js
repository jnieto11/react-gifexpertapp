import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
configure({ adapter: new Adapter() });


describe('Pruebas en <GifGridItem></GifGridItem>', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el title', () => {
        
        const p  = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })
    
    test('Debe tener la imagen  igual al url y alt de los props con el title', () => {
        
        const img  = wrapper.find('img');     
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })
    
    test('Debe tener animate__fadeIn', () => {
        
        const div  = wrapper.find('div');     
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })

})
