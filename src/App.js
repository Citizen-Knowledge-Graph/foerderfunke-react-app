import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ViewportUpdater from './ui/shared-components/ViewportUpdater';
import ScrollToTop from './ScrollToTop';
import Handle404Redirect from './Handle404Redirect';
import AppRoutes from './AppRoutes';
import { LanguageProvider } from './ui/language/LanguageContext';
import AppGlobalState from './AppGlobalState';
import theme from './theme';

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider theme={theme}>
                <ViewportUpdater />
                <AppGlobalState />
                <Router basename={process.env.PUBLIC_URL}>
                    <Handle404Redirect />
                    <ScrollToTop />
                    <AppRoutes />
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;
