import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/ui/screens/landing-page/LandingPage';
import InfoPageRouter from '@/ui/screens/info-pages/InfoPageRouter';
import OnboardingChoice from '@/ui/screens/onboarding-pages/choice/OnboardingChoice';
import OnboardingWelcomeOverviewContainer from '@/ui/screens/onboarding-pages/overview/OnboardingWelcomeOverviewContainer';
import EligibilityOverviewScreen from '@/ui/screens/eligibilty-overview/EligibilityOverviewScreen';
import BenefitPageScreen from '@/ui/screens/benefit-page/BenefitPageScreen';
import ProfileScreen from '@/ui/screens/profile-screen/ProfileScreen';
import ActivityLogScreen from '@/ui/screens/activity-log/ActivityLogScreen';
import ResolveUriScreen from '@/ui/screens/resolve-uri/ResolveUriScreen';
import OnboardingWelcomeTopicsContainer from "@/ui/screens/onboarding-pages/topics/OnboardingWelcomeTopicsContainer";
import OnboardingUserContainer from '@/ui/screens/onboarding-pages/user/OnboardingUserContainer';
import InfoScreenReturningUserContainer from '@/ui/screens/info-pages/returning-user/InfoScreenReturningUserContainer';
import InfoScreenPrivacyContainer from '@/ui/screens/info-pages/privacy/InfoScreenPrivacyContainer';
import QuestionPageRouter from '@/ui/screens/question-pages/QuestionPageRouter';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/user-routing" element={<InfoPageRouter/>}/>
        <Route path="/returning-user" element={<InfoScreenReturningUserContainer/>}/>
        <Route path="/privacy-info" element={<InfoScreenPrivacyContainer/>}/>
        <Route path="/onboarding-user" element={<OnboardingUserContainer/>}/>
        <Route path="/onboarding-choice" element={<OnboardingChoice/>}/>
        <Route path="/onboarding-welcome-topics" element={<OnboardingWelcomeTopicsContainer/>}/>
        <Route path="/onboarding-welcome" element={<OnboardingWelcomeOverviewContainer/>}/>
        <Route path="/onboarding-welcome/:benefitMode" element={<OnboardingWelcomeOverviewContainer/>}/>
        <Route path="/eligibility-overview" element={<EligibilityOverviewScreen/>}/>
        <Route path="/benefit-page/:id" element={<BenefitPageScreen/>}/>
        <Route path="/profile-overview" element={<ProfileScreen/>}/>
        <Route path="/activity-log" element={<ActivityLogScreen/>}/>
        <Route path="/default" element={<ResolveUriScreen/>}/>
        <Route path="/questions" element={<QuestionPageRouter/>}/>
    </Routes>
);

export default AppRoutes;
