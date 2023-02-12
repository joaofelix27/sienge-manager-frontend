import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from ".";
import InvoiceForms from "../components/Forms/Invoices";
import { Indicators } from "../pages/DashBoards/Indicators";
import LoginPage from "../pages/SignIn";
import SignupPage from "../pages/SignUp";

function AppRoutes() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<InvoiceForms />} />
        </Route>
        <Route path="/dashboards/indicators" element={<Indicators />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
