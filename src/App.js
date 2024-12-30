import "./App.css";
import Homepage from "./component/Homepage/Homepage";
import Nav from "./component/Navbar/Nav";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./component/About-us/About";
import Ourpresence from "./component/OurPresence/OurPresence";
import Team from "./component/governing-board-members/governing-board-members";
// import FocusArea from "./component/FocusArea/FocusArea";
// import Our_Approach from "./component/FocusArea/Our_Approach";
import Annual from "./component/AnnualReports/AnnualReport";
import Donate from "./component/Donate/Donate";
import Volunteer from "./component/Volunteer/Volunteer";
import Donationform from "./component/DonateForm/DonateForm";
import TC from "./component/TermsAndCondition/TermsCondition";
import Privacy from "./component/Privacypolicy/Privacypolicy";
import Events from "./component/Event/Event";
import VolunteerForm from "./component/Volunteer/VolunteerForm";
import ScrollToTop from "./component/ScrollTop";
import Gallery from "./component/Homepage/Gallery";
import AppoachTab from "./component/Approach_Tab/ApproachTab";
import HealthTab from "./component/EducationTab/HealthTab";
import SamajikTab from "./component/EducationTab/Samajik";
import SwavalambanTab from "./component/EducationTab/Swalavanban";
import EducationTab from "./component/EducationTab/EducationTab";
import RecentEvents from "./component/MainProgram/RecentEvents";
import AnnualFunction from "./component/Event/AnnualFunction/AnnualFunction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Main from "./component/translator/Main";

function App() {
  return (
    <>
      <Router>
        {/* <Payment/> */}
        <ToastContainer />
        <ScrollToTop />
        {/* <Main /> */}
        <Nav />

        <section style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* About-us */}
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/our-presence" element={<Ourpresence />} />
            <Route path="/governing-board-members" element={<Team />} />
            <Route path="/Annual-report" element={<Annual />} />
            {/* Focus area */}
            <Route path="/Foucs-Area" element={<AppoachTab />} />
            <Route path="/education" element={<EducationTab />} />

            <Route path="/Health" element={<HealthTab />} />
            <Route path="/samajik-ayam" element={<SamajikTab />} />
            <Route path="/savalamban" element={<SwavalambanTab />} />
            <Route path="/approachTab" element={<AppoachTab />} />

            {/* Program */}
            <Route path="/main-program" element={<RecentEvents />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/Volunteer-form" element={<VolunteerForm />} />
            <Route path="/donationForm" element={<Donationform />} />

            {/* Terms condition */}
            <Route path="/Term-and-condition" element={<TC />} />
            {/* Policy */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/event" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/annualFunction" element={<AnnualFunction />} />
          </Routes>
        </section>

        <Footer />
      </Router>
    </>
  );
}

export default App;
