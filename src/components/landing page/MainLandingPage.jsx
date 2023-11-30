import Topbar from "./layouts/Topbar";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";

import "./MainLandingPage.module.css";
{/*import '../../indexMedilab.css';*/}

export default function MainLandingPage() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <MainPage />
      <Footer />
    </>
  )
}