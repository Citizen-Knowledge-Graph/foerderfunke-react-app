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
import BenefitPageScreen from "./screens/benefit-page/BenefitPageScreen";
import LandingPage from "./screens/landing-page/LandingPage";
import AppStartup from "./AppStartup";
import AppValidation from "./AppValidation";
import ScrollToTop from './ScrollToTop';
import InfoPrivacy from "./screens/info-privacy/InfoPrivacy";
import InfoAccount from "./screens/info-account/InfoAccount";

const theme = createTheme({});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ViewportUpdater/>
            <AppStartup/>
            <AppValidation/>
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/info-privacy" element={<InfoPrivacy/>}/>
                        <Route path="/info-account" element={<InfoAccount/>}/>
                        <Route path="/onboarding-choice" element={<OnboardingChoice/>}/>
                        <Route path="/onboarding-welcome" element={<OnboardingWelcome/>}/>
                        <Route path="/onboarding-gamified" element={<OnboardingGamifiedScreen/>}/>
                        <Route path="/eligibility-overview" element={<EligibilityOverviewScreen/>}/>
                        <Route path="/profile-section/:id/:mode?" element={<ProfileSectionScreen/>}/>
                        <Route path="/benefit-page/:id" element={<BenefitPageScreen/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
