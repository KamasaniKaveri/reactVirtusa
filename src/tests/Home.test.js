import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Component', () => {

    
    
    const homeBodyElement = screen.queryByTestId('medHomeBody');

    test('feHome1', () => {
            expect(homeBodyElement).toBeTruthy();
    })

})