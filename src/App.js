import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ViewportUpdater from "./components/ViewportUpdater";
import OnboardingChoice from './screens/OnboardingChoice';
import OnboardingWelcome from "./screens/onboarding-welcome/OnboardingWelcome";
import OnboardingGamifiedScreen from "./screens/onboarding-gamified/OnboardingGamifiedScreen";
import ProfileSectionScreen from "./screens/profile-section/ProfileSectionScreen";
import EligibilityOverviewScreen from "./screens/eligibilty-overview/EligibilityOverviewScreen";
import AppStartup from "./AppStartup";
import AppValidation from "./AppValidation";

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
            <AppValidation/>
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Routes>
                        <Route path="/" element={<OnboardingChoice/>}/>
                        <Route path="/onboarding-welcome" element={<OnboardingWelcome/>}/>
                        <Route path="/onboarding-gamified" element={<OnboardingGamifiedScreen/>}/>
                        <Route path="/eligibility-overview" element={<EligibilityOverviewScreen/>}/>
                        <Route path="/profile-section/:id/:mode?" element={<ProfileSectionScreen/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
