import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarketApp from "./components/MarketApp";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PrivacyPage from "./pages/PrivacyPage";
import FaqPage from "./pages/FaqPage";
import ProductCreatePage from "./pages/ProductCreatePage";

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function ProductDetailPlaceholder() {
  return (
    <main className="container">
      <p>상품 상세 페이지입니다.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/items"
            element={
              <main className="container">
                <section id="market">
                  <MarketApp />
                </section>
              </main>
            }
          />
          <Route path="/products/:id" element={<ProductDetailPlaceholder />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/registration" element={<ProductCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}
