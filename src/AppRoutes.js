import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './ui/screens/landing-page/LandingPage';
import InfoPageRouter from './ui/screens/info-pages/InfoPageRouter';
import OnboardingChoice from './ui/screens/onboarding-choice/OnboardingChoice';
import OnboardingWelcomeOverview from './ui/screens/onboarding-welcome/OnboardingWelcomeOverview';
import EligibilityOverviewScreen from './ui/screens/eligibilty-overview/EligibilityOverviewScreen';
import ProfileSectionScreen from './ui/screens/profile-section/ProfileSectionScreen';
import BenefitPageScreen from './ui/screens/benefit-page/BenefitPageScreen';
import ProfileScreen from './ui/screens/profile-screen/ProfileScreen';
import ActivityLogScreen from './ui/screens/activity-log/ActivityLogScreen';
import ResolveUriScreen from './ui/screens/resolve-uri/ResolveUriScreen';
import OnboardingWelcomeTopics from "./ui/screens/onboarding-welcome/OnboardingWelcomeTopics";
import InfoScreenReturningUser from './ui/screens/info-pages/stages/InfoScreenReturningUser';
import InfoScreenPrivacy from './ui/screens/info-pages/stages/InfoScreenPrivacy';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/user-routing" element={<InfoPageRouter/>}/>
        <Route path="/returning-user" element={<InfoScreenReturningUser/>}/>
        <Route path="/privacy-info" element={<InfoScreenPrivacy/>}/>
        <Route path="/onboarding-choice" element={<OnboardingChoice/>}/>
        <Route path="/onboarding-welcome-topics" element={<OnboardingWelcomeTopics/>}/>
        <Route path="/onboarding-welcome" element={<OnboardingWelcomeOverview/>}/>
        <Route path="/onboarding-welcome/:benefitMode" element={<OnboardingWelcomeOverview/>}/>
        <Route path="/eligibility-overview" element={<EligibilityOverviewScreen/>}/>
        <Route path="/profile-section" element={<ProfileSectionScreen/>}/>
        <Route path="/profile-section/:benefitMode" element={<ProfileSectionScreen/>}/>
        <Route path="/benefit-page/:id" element={<BenefitPageScreen/>}/>
        <Route path="/profile-overview" element={<ProfileScreen/>}/>
        <Route path="/activity-log" element={<ActivityLogScreen/>}/>
        <Route path="/default" element={<ResolveUriScreen/>}/>
    </Routes>
);

export default AppRoutes;
