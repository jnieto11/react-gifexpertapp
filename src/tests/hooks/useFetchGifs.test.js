import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { shallow, configure } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

configure({ adapter: new Adapter() });

describe('Pruebas en el hook useFetchGifs', () => {
    // const { data, loading } = useFetchGifs('Goku');

    test('Debe retornar el estado incial', async () => {
        const { result,waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
        const { data, loading } = result.current;
        await waitForNextUpdate({timeout:5000});
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe retornar un arreglo de imagenes y loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
        await waitForNextUpdate({timeout:5000});

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })



})
