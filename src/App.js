import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ViewportUpdater from "./components/ViewportUpdater";
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import OnboardingWelcome from "./screens/OnboardingWelcome";
import OnboardingSectionsScreen from "./screens/onboarding-sections/OnboardingSectionsScreen";
import OnboardingUsername from "./screens/OnboardingUsername";
import ProfileSectionScreen from "./screens/profile-section/ProfileSectionScreen";
import AppStartup from "./AppStartup";

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto Slab, Arial, sans-serif',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ViewportUpdater/>
            <AppStartup/>
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/onboarding" element={<Onboarding/>}/>
                        <Route path="/onboarding-welcome" element={<OnboardingWelcome/>}/>
                        <Route path="/onboarding-username" element={<OnboardingUsername/>}/>
                        <Route path="/onboarding-sections" element={<OnboardingSectionsScreen/>}/>
                        <Route path="/profile-section/:id" element={<ProfileSectionScreen/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
