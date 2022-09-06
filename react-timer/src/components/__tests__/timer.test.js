import { getByPlaceholderText, getByRole, getByTestId, getByText, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Timer from '../Timer/Timer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



test('Zamanlayıcı sayımı baslatma',()=>{
    const{getByPlaceholderText, debug} = render(<Timer/>)
    debug()
    // sayac gösterge alanını bul 
    const sycGosterge1 =screen.getByText('25:00')
    // 25:00 olduğunu bekliyoruz.
    expect(sycGosterge1).toHaveTextContent(25)
    // start butonunu bul  
    const startbtnn = screen.getByText('Start')
    // star butonuna tıkla
    userEvent.click(startbtnn) 
    
  

});

test('Zamanlayıcı sayımı durdurma',()=>{
    const{getByPlaceholderText, debug} = render(<Timer/>)
    debug()
    // stop butonunu bul
    const stopbtnn = screen.getByText('Stop')
    // stop butonuna tıkla
    userEvent.click(stopbtnn)
    

});

test('Zamanlayıcı sayımı sıfırlama',()=>{
    const{getByPlaceholderText, debug} = render(<Timer/>)
    debug()
    // reset butonunu bul
    const rstbtnn = screen.getByText('Reset')
    // reset butonuna tıkla
    userEvent.click(rstbtnn)
    //sayac kontrol 
    const sycGosterge =screen.getByText('25:00')
    expect(sycGosterge).toHaveTextContent(25)  

});
test('Zamanlayıcı sayımını durdurup tekrar etme',()=>{
    const{getByPlaceholderText, debug} = render(<Timer/>)
    debug()
    const startbtnn = screen.getByText('Start')
    userEvent.click(startbtnn)
    const stopbtnn = screen.getByText('Stop')
    userEvent.click(stopbtnn)
    const startbtnn1 = screen.getByText('Start')
    userEvent.click(startbtnn1)   
    //sayaç son durum 25:00 göstermelidir.
    const sycGosterge =screen.getByText('25:00')
    expect(sycGosterge).toHaveTextContent(25)

});
