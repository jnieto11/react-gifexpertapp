import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('Debe mostrarse correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })



    test('Debe mostar items cuando se cargan imagenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'https://localhost/cualquiercosa.jpg',
            url: 'Cualquier cosa'
        },
        {
            id: 'ABC1',
            title: 'https://localhost/cualquiercosa.jpg',
            url: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })

})

