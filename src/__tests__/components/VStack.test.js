import React from 'react';
import { render, screen } from '@testing-library/react';
import VStack from '../../ui/shared-components/VStack';
import {createTheme} from "@mui/material/styles";

const theme = createTheme();

describe('VStack Component', () => {
    it('renders children correctly', () => {
        // Render the VStack component with some children

        render(
            <VStack data-testid="vstack-element">
                <div>Child 1</div>
                <div>Child 2</div>
            </VStack>
        );

        // Check if the children are rendered correctly
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('applies default props correctly', () => {
        // Render the VStack without overriding default props
        render(
            <VStack data-testid="vstack-element">
                <div>Default Props</div>
            </VStack>
        );

        // Get the Box component from MUI
        const vStackBox = screen.getByTestId('vstack-element');

        const expectedGap = theme.spacing(2);

        // Check if the default styles are applied
        expect(vStackBox).toHaveStyle('display: flex');
        expect(vStackBox).toHaveStyle('flex-direction: column');
        expect(vStackBox).toHaveStyle('box-sizing: border-box');
        expect(vStackBox).toHaveStyle(`gap: ${expectedGap}`);
        expect(vStackBox).toHaveStyle('justify-content: flex-start');
    });

    it('overrides props correctly', () => {
        // Render the VStack with custom props
        render(
            <VStack gap={4} justifyContent="center" alignItems="flex-end" data-testid="vstack-element">
                <div>Custom Props</div>
            </VStack>    );

        const vStackBox = screen.getByTestId('vstack-element');
        const expectedGap = theme.spacing(4);

        // Check if the overridden props are applied
        expect(vStackBox).toHaveStyle(`gap: ${expectedGap}`);
        expect(vStackBox).toHaveStyle('justify-content: center');
        expect(vStackBox).toHaveStyle('align-items: flex-end');
    });

    it('applies custom sx prop correctly', () => {
        // Render the VStack with a custom sx prop
        render(
            <VStack sx={{backgroundColor: 'red', padding: '20px'}} data-testid="vstack-element">
                <div>Custom SX</div>
            </VStack>    );

        const vStackBox = screen.getByTestId('vstack-element');

        // Check if the custom sx styles are applied
        expect(vStackBox).toHaveStyle('background-color: red');
        expect(vStackBox).toHaveStyle('padding: 20px');
    });
});
