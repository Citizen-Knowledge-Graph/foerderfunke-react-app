import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ViewportUpdater from './ui/shared-components/ViewportUpdater';
import ScrollToTop from './ScrollToTop';
import AppRoutes from './AppRoutes';
import theme from './theme';
import { AppInitialisationProvider } from './AppInitialisationProvider';

const App = () => {
    return (
        <AppInitialisationProvider>
            <ThemeProvider theme={theme}>
                <ViewportUpdater />
                <Router basename={process.env.PUBLIC_URL}>
                    <ScrollToTop />
                    <AppRoutes />
                </Router>
            </ThemeProvider>
        </AppInitialisationProvider>
    );
};

export default App;
