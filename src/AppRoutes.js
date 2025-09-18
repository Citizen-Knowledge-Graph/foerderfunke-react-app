import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/ui/screens/landing-page/LandingPage';
import InfoPageRouter from '@/ui/screens/info-pages/InfoPageRouter';
import OnboardingChoice from '@/ui/screens/onboarding-pages/choice/OnboardingChoice';
import OnboardingWelcomeOverviewContainer from '@/ui/screens/onboarding-pages/overview/OnboardingWelcomeOverviewContainer';
import EligibilityOverviewScreenContainer from '@/ui/screens/eligibilty-overview/EligibilityOverviewScreenContainer';
import BenefitPageScreenContainer from '@/ui/screens/benefit-page/BenefitPageScreenContainer';
import ProfileScreen from '@/ui/screens/profile-screen/ProfileScreen';
import ActivityLogScreen from '@/ui/screens/activity-log/ActivityLogScreen';
import ResolveUriScreen from '@/ui/screens/resolve-uri/ResolveUriScreen';
import OnboardingWelcomeTopicsContainer from "@/ui/screens/onboarding-pages/topics/OnboardingWelcomeTopicsContainer";
import InfoScreenReturningUserContainer from '@/ui/screens/info-pages/returning-user/InfoScreenReturningUserContainer';
import InfoScreenPrivacyContainer from '@/ui/screens/info-pages/privacy/InfoScreenPrivacyContainer';
import QuestionPageRouter from '@/ui/screens/question-pages/QuestionPageRouter';
import ImpressumPage from './ui/screens/legal/ImpressumPage';
import DataProtection from './ui/screens/legal/DataProtection';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/user-routing" element={<InfoPageRouter/>}/>
        <Route path="/returning-user" element={<InfoScreenReturningUserContainer/>}/>
        <Route path="/privacy-info" element={<InfoScreenPrivacyContainer/>}/>
        <Route path="/onboarding-choice" element={<OnboardingChoice/>}/>
        <Route path="/onboarding-welcome-topics" element={<OnboardingWelcomeTopicsContainer/>}/>
        <Route path="/onboarding-welcome" element={<OnboardingWelcomeOverviewContainer/>}/>
        <Route path="/eligibility-overview" element={<EligibilityOverviewScreenContainer/>}/>
        <Route path="/benefit-page/:id" element={<BenefitPageScreenContainer/>}/>
        <Route path="/profile-overview" element={<ProfileScreen/>}/>
        <Route path="/activity-log" element={<ActivityLogScreen/>}/>
        <Route path="/default" element={<ResolveUriScreen/>}/>
        <Route path="/questions" element={<QuestionPageRouter/>}/>
        <Route path="/impressum" element={<ImpressumPage/>}/>
        <Route path="/data-protection" element={<DataProtection/>}/>
        <Route path="/bielefeld" element={<LandingPage runway="bielefunke" />}/>
        <Route path="/bielefunke" element={<LandingPage runway="bielefunke" />}/>
        <Route path="/wolfenbuettel" element={<LandingPage runway="wolfenbuettel" />}/>
        <Route path="/wolfenbüttel" element={<LandingPage runway="wolfenbuettel" />}/>
    </Routes>
);

export default AppRoutes;
