import { render, screen, fireEvent } from '@testing-library/react';
import TemplateViewHeader from '../../ui/components/TemplateViewHeader';

jest.mock('../../ui/language/useTranslation', () => () => ({
    t: (key) => key === 'app.nav.backBtn' ? 'Back' : key,
}));

describe('TemplateViewHeader Component', () => {
    it('renders the button with correct text and icon', () => {
        render(<TemplateViewHeader onClick={() => {}} />);

        const button = screen.getByRole('button', { name: /back/i });
        expect(button).toBeInTheDocument();

        const icon = screen.getByTestId('chevron-left-icon');
        expect(icon).toBeInTheDocument();
    });

    it('calls the onClick handler when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<TemplateViewHeader onClick={handleClick} />);

        const button = screen.getByRole('button', { name: /back/i });
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct styles to the button', () => {
        render(<TemplateViewHeader onClick={() => {}} />);

        const button = screen.getByRole('button', { name: /back/i });

        expect(button).toHaveStyle({
            color: 'black',
            fontSize: '16px',
        });
    });
});
