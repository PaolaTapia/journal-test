// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import Swal from 'sweetalert2';

//Enzyme.configure({ adapter: new Adapter() });

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const noScroll = ()=>{}; 
Object.defineProperty(window,'scrollTo', {value: noScroll, writable: true});


jest.mock('sweetalert2', ()=>({
     fire: jest.fn(),      
     close: jest.fn(),       
}))

//"react-scripts test",