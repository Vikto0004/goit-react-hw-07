import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PhonesPage = lazy(() => import("./pages/PhonesPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
