import "../styles/App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// Baki imports ke saath yeh line add karein
import NewsArticle2 from '../components/News/NewsArticle2.jsx';
// Agar aapne files src/pages folder mein banayi hain:
import PrivacyPolicy from '../components/Footer/PrivacyPolicy.jsx';
import Disclaimer from '../components/Footer/Disclaimer.jsx';

// 🔹 Main Pages
const LandingPage = React.lazy(() => import("../components/LandingPage/Landing"));
const Contact = React.lazy(() => import("../components/Contact/Contact"));
const AllServices = React.lazy(() => import("../components/ServicesPage/AllServices"));
const About = React.lazy(() => import("../components/About/About"));
const News = React.lazy(() => import("../components/News/News"));
const Insights = React.lazy(() => import("../components/Insights/Insights"));
const Article = React.lazy(() => import("../components/Article/Article"));
const PropertyPrices = React.lazy(() => import("../components/Prices/PropertyPrices"));

// 🔹 Service Pages
const Immigration = React.lazy(() => import("../components/ServicesPage/Immigration/Immigration"));
const PrivateCrime = React.lazy(() => import("../components/ServicesPage/PrivateCrime/PrivateCrime"));
const Residential = React.lazy(() => import("../components/ServicesPage/Residential/Residential"));
const Commercial = React.lazy(() => import("../components/ServicesPage/Commercial/Commercial"));
const Intellectual = React.lazy(() => import("../components/ServicesPage/IntellectualProperty/IntellectualProperty"));
const Dispute = React.lazy(() => import("../components/ServicesPage/Dispute/DisputeResolution"));
const Landlord = React.lazy(() => import("../components/ServicesPage/Landlord/Landlord"));
const Family = React.lazy(() => import("../components/ServicesPage/Family/Family"));
const Wills = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/WillsAndProbate"));

// 🔹 Immigration Sub-pages
const Asylum = React.lazy(() => import("../components/ServicesPage/Immigration/Asylum"));
const SkilledWorkerVisa = React.lazy(() => import("../components/ServicesPage/Immigration/SkilledWorkerVisa"));
const SpouseVisa = React.lazy(() => import("../components/ServicesPage/Immigration/SpouseVisa"));
const UKVisitorVisa = React.lazy(() => import("../components/ServicesPage/Immigration/VisitorVisa"));
const BailRevocation = React.lazy(() => import("../components/ServicesPage/Immigration/BailRevocation"));
const BritishCitizenshipApplication = React.lazy(() => import("../components/ServicesPage/Immigration/BritishCitizenshipApplication"));
const CoS = React.lazy(() => import("../components/ServicesPage/Immigration/CoS"));
const CreativeWorker = React.lazy(() => import("../components/ServicesPage/Immigration/CreativeWorker"));
const DiscretionaryLeave = React.lazy(() => import("../components/ServicesPage/Immigration/DiscretionaryLeave"));
const EntryClearance = React.lazy(() => import("../components/ServicesPage/Immigration/EntryClearance"));
const EuSettlement = React.lazy(() => import("../components/ServicesPage/Immigration/EuSettlement"));
const HumanRights = React.lazy(() => import("../components/ServicesPage/Immigration/HumanRights"));
const IndefiniteLeave = React.lazy(() => import("../components/ServicesPage/Immigration/IndefiniteLeave"));
const InnovatorFounder = React.lazy(() => import("../components/ServicesPage/Immigration/InnovatorFounder"));
const ReviewsAppeals = React.lazy(() => import("../components/ServicesPage/Immigration/ReviewsAppeals"));
const SkilledMigrant = React.lazy(() => import("../components/ServicesPage/Immigration/SkilledMigrant"));
const StudentVisa = React.lazy(() => import("../components/ServicesPage/Immigration/StudentVisa"));
const VisaCategories = React.lazy(() => import("../components/ServicesPage/Immigration/VisaCategories"));
const VisaExtensions = React.lazy(() => import("../components/ServicesPage/Immigration/VisaExtensions"));

// 🔹 Residential Property Sub-pages
const FreeholdSales = React.lazy(() => import("../components/ServicesPage/Residential/FreeholdSales"));
const FreeholdPurchases = React.lazy(() => import("../components/ServicesPage/Residential/FreeholdPurchases"));
const LeaseTermsAdvice = React.lazy(() => import("../components/ServicesPage/Residential/LeaseTermsAdvice"));
const TransferOfEquity = React.lazy(() => import("../components/ServicesPage/Residential/TransfersOfEquity"));

// 🔹 Commercial Property Sub-pages
const AdviceMultiple = React.lazy(() => import("../components/ServicesPage/Commercial/AdviceMultiple"));
const BreakRent = React.lazy(() => import("../components/ServicesPage/Commercial/BreakRent"));
const BusinessLicenses = React.lazy(() => import("../components/ServicesPage/Commercial/BusinessAndLicense"));
const ConsentAlterations = React.lazy(() => import("../components/ServicesPage/Commercial/ConsentAlterations"));
const ForfeitureNotices = React.lazy(() => import("../components/ServicesPage/Commercial/ForfeitureAndNotices"));
const LeaseRenewals = React.lazy(() => import("../components/ServicesPage/Commercial/LeaseRenewals"));
const PropertyDilapidations = React.lazy(() => import("../components/ServicesPage/Commercial/PropertyDilapidations"));
const PurchaseCommercial = React.lazy(() => import("../components/ServicesPage/Commercial/PurchaseCommercial"));
const RentRecovery = React.lazy(() => import("../components/ServicesPage/Commercial/RentRecovery"));
const SalesCommercial = React.lazy(() => import("../components/ServicesPage/Commercial/SaleCommercial"));
const SchedulesConditions = React.lazy(() => import("../components/ServicesPage/Commercial/SchedulesConditions"));

// 🔹 Intellectual Property Sub-pages
const Copyright = React.lazy(() => import("../components/ServicesPage/IntellectualProperty/Copyright"));
const Patent = React.lazy(() => import("../components/ServicesPage/IntellectualProperty/Patent"));
const Trademark = React.lazy(() => import("../components/ServicesPage/IntellectualProperty/Trademark"));

// 🔹 Dispute Resolution Sub-pages
const BuildingContracts = React.lazy(() => import("../components/ServicesPage/Dispute/BuildingContracts"));
const ContractDisputes = React.lazy(() => import("../components/ServicesPage/Dispute/ContractDisputes"));
const SupplyGoodsServices = React.lazy(() => import("../components/ServicesPage/Dispute/SupplyGoodsServices"));
const DebtMatters = React.lazy(() => import("../components/ServicesPage/Dispute/DebtMatters"));
const BuildingContractDisputes = React.lazy(() => import("../components/ServicesPage/Dispute/BuildingContractDisputes"));
const BankruptcyMatters = React.lazy(() => import("../components/ServicesPage/Dispute/CorporatePersonalBankruptcty.jsx"));
const DebtRecovery = React.lazy(() => import("../components/ServicesPage/Dispute/DisputeDebtRecovery"));

// 🔹 Landlord & Tenant Sub-pages
const ClaimsDisrepair = React.lazy(() => import("../components/ServicesPage/Landlord/ClaimsDisrepair"));
const PossessionClaims = React.lazy(() => import("../components/ServicesPage/Landlord/PossessionClaims"));
const RecoveryRent = React.lazy(() => import("../components/ServicesPage/Landlord/RecoveryRent"));

// 🔹 Family Sub-pages
const Adoption = React.lazy(() => import("../components/ServicesPage/Family/Adoption"));
const ChildArrangements = React.lazy(() => import("../components/ServicesPage/Family/ChildArrangements"));
const ConsentOrders = React.lazy(() => import("../components/ServicesPage/Family/ConsentOrders"));
const Divorce = React.lazy(() => import("../components/ServicesPage/Family/Divorce"));
const DomesticViolence = React.lazy(() => import("../components/ServicesPage/Family/DomesticViolence"));
const FinancialSettlements = React.lazy(() => import("../components/ServicesPage/Family/FinancialSettlements"));
const NuptialAgreement = React.lazy(() => import("../components/ServicesPage/Family/NuptialAgreement"));
const ParentalResponsibility = React.lazy(() => import("../components/ServicesPage/Family/ParentalResponsibility"));

// 🔹 Wills & Probate Sub-pages
const Probate = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/Probate"));
const SuccessionPlanning = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/SuccessionPlanning"));
const WillsPage = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/Wills"));
const Trusts = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/Trusts"));
const EstatePlanning = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/EstatePlanning"));
const InheritanceTaxPlanning = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/InheritanceTaxPlanning"));
const PowerAttorney = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/PowerOfAttorney"));
const PrivateWealthManagement = React.lazy(() => import("../components/ServicesPage/WillsAndProbate/WealthManagement"));

// 🔹 Price Pages
const DebtRecoveryPrices = React.lazy(() => import("../components/Prices/DebtRecovery"));
const ImmigrationPrices = React.lazy(() => import("../components/Prices/ImmigrationPrices"));

// News & Insights 
const ImmigrationNews = React.lazy(() => import("../components/NewsInsights/ImmigrationNews"));
const Litigation = React.lazy(() => import("../components/NewsInsights/Litigation"));


const KeyUpdatesEVisa = React.lazy(() => import("../components/ArticlePages/KeyUpdatesEVisa"));
const VisitorVisaArticle = React.lazy(() => import("../components/ArticlePages/VisitorVisaArticle"));
const SwitchingVisaCategories = React.lazy(() => import("../components/ArticlePages/SwitchingVisaCategories"));
const StudentVisaGuide = React.lazy(() => import("../components/ArticlePages/StudentVisaGuide"))
const UKStudentVisaGuide = React.lazy(() => import("../components/ArticlePages/UKStudentVisaGuide.jsx"));
const SuccessfulStudentVisa = React.lazy(() => import("../components/ArticlePages/SuccessfulStudentVisa.jsx"));
const InternationalStudentsThrive = React.lazy(() => import("../components/ArticlePages/InternationalStudentsThrive"));
const NavigatingTheSkilledWorkerVisa = React.lazy(() => import("../components/ArticlePages/NavigatingTheSkilledWorkerVisa"));
const HowLumineSolicitorsSupport = React.lazy(() => import("../components/ArticlePages/HowLumineSolicitorsSupport"));
const HowToApplySkilledWorker = React.lazy(() => import("../components/ArticlePages/HowToApplySkilledWorker"));




// 🔹 News Articles (Dynamic)
const NewsArticles = React.lazy(() => import("../components/News/NewsArticles"));
const ArticleDetailPage = React.lazy(() => import("../components/News/ArticleDetailPage"));
const ArticleEditor = React.lazy(() => import("../components/Admin/ArticleEditor"));
const Conveyancing = React.lazy(() => import("../components/NewsInsights/Conveyancing.jsx"));
const NewsArticle3 = React.lazy(() => import("../components/News/NewsArticle3.jsx"));

// 🔹 Transition
const PageTransition = React.lazy(() => import("../lib/PageTransitions/PageTransition"));

// 🔹 Utils
import ResourceLoader from "../utils/ResourceLoader";
import ResourceHints from "../utils/ResourceHints";
import FontPreloader from "../utils/FontPreLoader";

// 🔹 UI
import { Box, Spinner, Center, VStack, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/navbar/logo.webp";

// 🔹 Loader
const LoadingSpinner = () => (
  <Center minH="100vh" bg="black">
    <VStack spacing={8}>
      <Box w="200px" h="200px" mb={4}>
        <Image src={Logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </Box>
      <VStack spacing={4}>
        <Spinner color="#beab7c" size="xl" />
        <Text color="#beab7c">Loading...</Text>
      </VStack>
    </VStack>
  </Center>
);

// 🔹 Transition Wrapper
const SuspensePageTransition = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <PageTransition>{children}</PageTransition>
  </Suspense>
);

// 🔹 App
function App() {
  return (
    <>
      <ResourceLoader />
      <ResourceHints />
      <FontPreloader />

      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* 🔹 Main Pages */}
            <Route path="/" element={<SuspensePageTransition><LandingPage /></SuspensePageTransition>} />
            <Route path="/contact" element={<SuspensePageTransition><Contact /></SuspensePageTransition>} />
            <Route path="/about" element={<SuspensePageTransition><About /></SuspensePageTransition>} />
            <Route path="/news" element={<SuspensePageTransition><News /></SuspensePageTransition>} />
            <Route path="/insights" element={<SuspensePageTransition><Insights /></SuspensePageTransition>} />
            <Route path="/article-page" element={<SuspensePageTransition><Article /></SuspensePageTransition>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />


            {/* 🔹 Price Pages */}
            <Route path="/prices/property-prices" element={<SuspensePageTransition><PropertyPrices /></SuspensePageTransition>} />
            <Route path="/prices/debt-recovery" element={<SuspensePageTransition><DebtRecoveryPrices /></SuspensePageTransition>} />
            <Route path="/prices/immigration-prices" element={<SuspensePageTransition><ImmigrationPrices /></SuspensePageTransition>} />



            {/* 🔹 Services Main */}
            <Route path="/all-services" element={<SuspensePageTransition><AllServices /></SuspensePageTransition>} />

            {/* 🔹 Services Main Pages */}
            <Route path="/all-services/immigration" element={<SuspensePageTransition><Immigration /></SuspensePageTransition>} />
            <Route path="/all-services/private-crime" element={<SuspensePageTransition><PrivateCrime /></SuspensePageTransition>} />
            <Route path="/all-services/residential" element={<SuspensePageTransition><Residential /></SuspensePageTransition>} />
            <Route path="/all-services/commercial" element={<SuspensePageTransition><Commercial /></SuspensePageTransition>} />
            <Route path="/all-services/intellectual-property" element={<SuspensePageTransition><Intellectual /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution" element={<SuspensePageTransition><Dispute /></SuspensePageTransition>} />
            <Route path="/all-services/landlord-tenant" element={<SuspensePageTransition><Landlord /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children" element={<SuspensePageTransition><Family /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate" element={<SuspensePageTransition><Wills /></SuspensePageTransition>} />

            {/* 🔹 Immigration Sub Pages */}
            <Route path="/all-services/immigration/reviews-appeals" element={<SuspensePageTransition><ReviewsAppeals /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/asylum" element={<SuspensePageTransition><Asylum /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/british-citizenship-application" element={<SuspensePageTransition><BritishCitizenshipApplication /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/cos" element={<SuspensePageTransition><CoS /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/creative-worker" element={<SuspensePageTransition><CreativeWorker /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/discretionary-leave" element={<SuspensePageTransition><DiscretionaryLeave /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/entry-clearance" element={<SuspensePageTransition><EntryClearance /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/eu-settlement" element={<SuspensePageTransition><EuSettlement /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/bail-revocation" element={<SuspensePageTransition><BailRevocation /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/indefinite-leave" element={<SuspensePageTransition><IndefiniteLeave /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/innovator-founder" element={<SuspensePageTransition><InnovatorFounder /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/human-rights" element={<SuspensePageTransition><HumanRights /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/skilled-migrant" element={<SuspensePageTransition><SkilledMigrant /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/skilled-worker-visa" element={<SuspensePageTransition><SkilledWorkerVisa /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/spouse-visa" element={<SuspensePageTransition><SpouseVisa /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/student-visa" element={<SuspensePageTransition><StudentVisa /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/visa-categories" element={<SuspensePageTransition><VisaCategories /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/uk-visitor-visa" element={<SuspensePageTransition><UKVisitorVisa /></SuspensePageTransition>} />
            <Route path="/all-services/immigration/visa-extensions" element={<SuspensePageTransition><VisaExtensions /></SuspensePageTransition>} />

            {/* 🔹 Residential Sub Pages */}
            <Route path="/all-services/residential/freehold-sales" element={<SuspensePageTransition><FreeholdSales /></SuspensePageTransition>} />
            <Route path="/all-services/residential/freehold-purchases" element={<SuspensePageTransition><FreeholdPurchases /></SuspensePageTransition>} />
            <Route path="/all-services/residential/lease-terms-advice" element={<SuspensePageTransition><LeaseTermsAdvice /></SuspensePageTransition>} />
            <Route path="/all-services/residential/transfer-of-equity" element={<SuspensePageTransition><TransferOfEquity /></SuspensePageTransition>} />

            {/* 🔹 Commercial Sub Pages */}
            <Route path="/all-services/commercial/advice-multiple" element={<SuspensePageTransition><AdviceMultiple /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/break-rent" element={<SuspensePageTransition><BreakRent /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/business-licenses" element={<SuspensePageTransition><BusinessLicenses /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/consent-alterations" element={<SuspensePageTransition><ConsentAlterations /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/forfeiture-notices" element={<SuspensePageTransition><ForfeitureNotices /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/lease-renewals" element={<SuspensePageTransition><LeaseRenewals /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/property-dilapidations" element={<SuspensePageTransition><PropertyDilapidations /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/purchase-commercial" element={<SuspensePageTransition><PurchaseCommercial /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/rent-recovery" element={<SuspensePageTransition><RentRecovery /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/sales-commercial" element={<SuspensePageTransition><SalesCommercial /></SuspensePageTransition>} />
            <Route path="/all-services/commercial/schedules-conditions" element={<SuspensePageTransition><SchedulesConditions /></SuspensePageTransition>} />

            {/* 🔹 Intellectual Property Sub Pages */}
            <Route path="/all-services/intellectual-property/copyright" element={<SuspensePageTransition><Copyright /></SuspensePageTransition>} />
            <Route path="/all-services/intellectual-property/patent" element={<SuspensePageTransition><Patent /></SuspensePageTransition>} />
            <Route path="/all-services/intellectual-property/trademark" element={<SuspensePageTransition><Trademark /></SuspensePageTransition>} />

            {/* 🔹 Dispute Resolution Sub Pages */}
            <Route path="/all-services/dispute-resolution/building-contracts" element={<SuspensePageTransition><BuildingContracts /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/contract-disputes" element={<SuspensePageTransition><ContractDisputes /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/supply-goods-services" element={<SuspensePageTransition><SupplyGoodsServices /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/debt-matters" element={<SuspensePageTransition><DebtMatters /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/building-contract-disputes" element={<SuspensePageTransition><BuildingContractDisputes /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/bankruptcy-matters" element={<SuspensePageTransition><BankruptcyMatters /></SuspensePageTransition>} />
            <Route path="/all-services/dispute-resolution/debt-recovery" element={<SuspensePageTransition><DebtRecovery /></SuspensePageTransition>} />

            {/* 🔹 Landlord & Tenant Sub Pages */}
            <Route path="/all-services/landlord-tenant/claims-disrepair" element={<SuspensePageTransition><ClaimsDisrepair /></SuspensePageTransition>} />
            <Route path="/all-services/landlord-tenant/possession-claims" element={<SuspensePageTransition><PossessionClaims /></SuspensePageTransition>} />
            <Route path="/all-services/landlord-tenant/recovery-rent" element={<SuspensePageTransition><RecoveryRent /></SuspensePageTransition>} />

            {/* 🔹 Family Sub Pages */}
            <Route path="/all-services/family-and-children/adoption-surrogacy" element={<SuspensePageTransition><Adoption /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/child-arrangements" element={<SuspensePageTransition><ChildArrangements /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/consent-orders" element={<SuspensePageTransition><ConsentOrders /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/divorce" element={<SuspensePageTransition><Divorce /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/domestic-violence" element={<SuspensePageTransition><DomesticViolence /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/financial-settlements" element={<SuspensePageTransition><FinancialSettlements /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/nuptial-agreement" element={<SuspensePageTransition><NuptialAgreement /></SuspensePageTransition>} />
            <Route path="/all-services/family-and-children/parental-responsbility" element={<SuspensePageTransition><ParentalResponsibility /></SuspensePageTransition>} />

            {/* 🔹 Wills & Probate Sub Pages */}
            <Route path="/all-services/wills-probate/probate" element={<SuspensePageTransition><Probate /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/succession-planning" element={<SuspensePageTransition><SuccessionPlanning /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/wills" element={<SuspensePageTransition><WillsPage /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/trusts" element={<SuspensePageTransition><Trusts /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/estate-planning" element={<SuspensePageTransition><EstatePlanning /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/inheritance-tax-planning" element={<SuspensePageTransition><InheritanceTaxPlanning /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/power-attorney" element={<SuspensePageTransition><PowerAttorney /></SuspensePageTransition>} />
            <Route path="/all-services/wills-probate/private-wealth-management" element={<SuspensePageTransition><PrivateWealthManagement /></SuspensePageTransition>} />


            {/* News&Insights  */}
            <Route path="/immigration-news" element={<SuspensePageTransition><ImmigrationNews /></SuspensePageTransition>} />
            <Route path="/litigation" element={<SuspensePageTransition><Litigation /></SuspensePageTransition>} />

            {/* 🔹 Article Pages */}
            <Route path="/immigration/evisa-updates" element={<SuspensePageTransition><KeyUpdatesEVisa /></SuspensePageTransition>} />
            <Route path="/all-you-need-to-know-about-visitor-visa-in-uk" element={<SuspensePageTransition><VisitorVisaArticle /></SuspensePageTransition>} />
            <Route path="/switching-visa-categories" element={<SuspensePageTransition><SwitchingVisaCategories /></SuspensePageTransition>} />
            <Route path="/student-visa-guide" element={<SuspensePageTransition><StudentVisaGuide /></SuspensePageTransition>} />
            <Route path="/uk-student-visa-your-complete-guide-to-studying-in-the-uk" element={<SuspensePageTransition><UKStudentVisaGuide /></SuspensePageTransition>} />
            <Route path="/how-to-ensure-a-successful-student-visa-application" element={<SuspensePageTransition><SuccessfulStudentVisa /></SuspensePageTransition>} />
            <Route path="/how-lumine-solicitors-help-international-students-thrive-in-uk" element={<SuspensePageTransition><InternationalStudentsThrive /></SuspensePageTransition>} />
            <Route path="/navigating-the-skilled-worker-visa" element={<SuspensePageTransition>   <NavigatingTheSkilledWorkerVisa /></SuspensePageTransition>} />
            <Route path="/how-lumine-solicitors-support-employers-and-applicants-with-skilled-worker-visas" element={<SuspensePageTransition> <HowLumineSolicitorsSupport /></SuspensePageTransition>} />
            <Route path="/how-to-apply-skilled-worker" element={<SuspensePageTransition> <HowToApplySkilledWorker /></SuspensePageTransition>} />


            <Route path="/news/articles" element={<SuspensePageTransition><NewsArticles /></SuspensePageTransition>} />
            <Route path="/news/articles/:slug" element={<SuspensePageTransition><ArticleDetailPage /></SuspensePageTransition>} />
            <Route path="/admin/articles/new" element={<SuspensePageTransition><ArticleEditor /></SuspensePageTransition>} />
            <Route path="/immigration-news/:slug" element={<SuspensePageTransition><ArticleDetailPage /></SuspensePageTransition>} />
            <Route path="/litigation-news" element={<SuspensePageTransition><Litigation /></SuspensePageTransition>} />
            <Route path="/litigation-news/:slug" element={<SuspensePageTransition><ArticleDetailPage /></SuspensePageTransition>} />
            {/* 🔹 Housing Property News Routes */}
            <Route path="/conveyancing" element={<SuspensePageTransition>< Conveyancing /></SuspensePageTransition>} />
            <Route path="/conveyancing-news/:slug" element={<SuspensePageTransition><ArticleDetailPage /></SuspensePageTransition>} />

            {/* Agar aap NewsArticle3 ko alag se bhi dekhna chahte hain (Optional) */}
            <Route path="/news/housing-cards" element={<SuspensePageTransition><NewsArticle3 /></SuspensePageTransition>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;