import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoMatch from "./components/landing page/pages/NoMatch";

import Topbar from "./components/landing page/layouts/Topbar";
import Header from "./components/landing page/layouts/Header";
import Hero from "./components/landing page/layouts/Hero";
import Footer from "./components/landing page/layouts/Footer";
import MainPage from "./components/landing page/pages/MainPage";

import Container from "./components/landing page/layouts/Container";

//import MainLandingPage from "./components/landing page/MainLandingPage";
//import StoreAdminRA from "./components/dashboard/react-admin/StoreAdminRA";

export default function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Header />
        <Hero />
        <Container customClass="min_height">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

{/*

<Router>
  <Routes>
    <Route path="/" element={<MainLandingPage />} />
    <Route path="/ra/*" element={<StoreAdminRA />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
</Router>

*/}