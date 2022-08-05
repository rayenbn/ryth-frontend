import Auth from "app/auth/Auth";
import { lazy } from "react";

const auth = lazy(() => import("../../auth/Auth"));

const PricingTable = lazy(() => import("./PricingTable"));

const SearchResults = lazy(() => import("./SearchResults"));

const UserProfile = lazy(() => import("./UserProfile"));

const InvestorsPage = lazy(() => import("./InvestorsPage"));

const StartupsPage = lazy(() => import("./StartupsPage"));

const HomePage = lazy(() => import("./HomePage"));

const UniversityPage = lazy(() => import("./UniversityPage"));

const ScholarshipsPage = lazy(() => import("./ScholarshipsPage"));

const UserInvestorProfile = lazy(() => import("./UserInvestorProfile"));

const StartupProfile = lazy(() => import("./StartupProfile"));

const UniversityProfile = lazy(() => import("./UniversityProfile"));

const ScholarshipProfile = lazy(() => import("./ScholarshipProfile"));

const FAQ = lazy(() => import("./FAQ"));



const pagesRoutes = [
      {
        path: "/pricing-table",
        component: PricingTable
      },
      {
        path: "/search-results",
        component: SearchResults
      },
      {
        path: "/faq",
        component: FAQ
      },
      {
        path: "/home",
        component: HomePage
      },
      {
        path: "/investors",
        component: InvestorsPage,
      },
      {
        path: "/startups",
        component: StartupsPage
      },
      {
        path: "/startup/:slugName",
        component: StartupProfile
      },
      {
        path: "/universities",
        component: UniversityPage
      },
      {
        path: "/scholarships",
        component: ScholarshipsPage
      },
      {
        path: "/profile/:slugName",
        component: UserProfile
      },
      {
        path: "/investor/:investorSlugName",
        component: UserInvestorProfile
      },
      {
        path: "/university/:universityId",
        component: UniversityProfile
      },
      {
        path: "/scholarship/:scholarshipId",
        component: ScholarshipProfile
      }
      
];

export default pagesRoutes;
