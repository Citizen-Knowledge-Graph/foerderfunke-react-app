import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ViewportUpdater from "./components/ViewportUpdater";
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import OnboardingWelcome from "./screens/OnboardingWelcome";

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Slab, Arial, sans-serif',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ViewportUpdater/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/onboarding" element={<Onboarding/>}/>
                        <Route path="/onboarding-welcome" element={<OnboardingWelcome/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
