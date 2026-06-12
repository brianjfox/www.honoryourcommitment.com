import { Routes, Route } from 'react-router-dom'
import { useI18n } from './i18n/index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PrivacyNotice from './components/PrivacyNotice.jsx'
import Home from './pages/Home.jsx'
import Petition from './pages/Petition.jsx'
import RegisterCase from './pages/RegisterCase.jsx'
import EconomicImpact from './pages/EconomicImpact.jsx'
import LegalAction from './pages/LegalAction.jsx'
import MediaCenter from './pages/MediaCenter.jsx'
import OpenLetter from './pages/OpenLetter.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { t } = useI18n()
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petition" element={<Petition />} />
          <Route path="/register" element={<RegisterCase />} />
          <Route path="/impact" element={<EconomicImpact />} />
          <Route path="/legal" element={<LegalAction />} />
          <Route path="/media" element={<MediaCenter />} />
          <Route path="/open-letter" element={<OpenLetter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <PrivacyNotice />
    </>
  )
}
