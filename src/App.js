import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ViewportUpdater from "./components/ViewportUpdater";
import OnboardingChoice from './screens/onboarding-choice/OnboardingChoice';
import OnboardingWelcomeOverview from "./screens/onboarding-welcome/OnboardingWelcomeOverview";
import ProfileSectionScreen from "./screens/profile-section/ProfileSectionScreen";
import EligibilityOverviewScreen from "./screens/eligibilty-overview/EligibilityOverviewScreen";
import BenefitPageScreen from "./screens/benefit-page/BenefitPageScreen";
import LandingPage from "./screens/landing-page/LandingPage";
import ScrollToTop from './ScrollToTop';
import InfoScreenPrivacy from "./screens/info-screen/InfoScreenPrivacy";
import OnboardingWelcomeTopics from "./screens/onboarding-welcome/OnboardingWelcomeTopics";
import InfoScreenNewOrExistingUser from "./screens/info-screen/InfoScreenNewOrExistingUser";
import ProfileScreen from "./screens/profile-screen/ProfileScreen";
import {LanguageProvider} from "./language/LanguageContext";

const theme = createTheme({});

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider theme={theme}>
                <ViewportUpdater/>
                <Router basename={process.env.PUBLIC_URL}>
                    <ScrollToTop />
                    <div>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/user-routing" element={<InfoScreenNewOrExistingUser/>}/>
                            <Route path="/info-privacy" element={<InfoScreenPrivacy/>}/>
                            <Route path="/onboarding-choice" element={<OnboardingChoice/>}/>
                            <Route path="/onboarding-welcome-topics" element={<OnboardingWelcomeTopics/>}/>
                            <Route path="/onboarding-welcome" element={<OnboardingWelcomeOverview/>}/>
                            <Route path="/onboarding-welcome/:benefitId" element={<OnboardingWelcomeOverview/>}/>
                            <Route path="/eligibility-overview" element={<EligibilityOverviewScreen/>}/>
                            <Route path="/profile-section" element={<ProfileSectionScreen/>}/>
                            <Route path="/profile-section/:benefitId" element={<ProfileSectionScreen/>}/>
                            <Route path="/benefit-page/:id" element={<BenefitPageScreen/>}/>
                            <Route path="/profile-overview" element={<ProfileScreen/>}/>
                        </Routes>
                    </div>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;
