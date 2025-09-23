import Navbar from './components/Navber';
import Footer from './components/Footer';
import AboutPage from './components/About';
import Home from './components/Home';
import ContactPage from './components/ContectPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <div className="flex mt-4 justify-center items-center">
                  <SignIn />
                </div>
              </SignedOut>
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}
