import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from ".";
import Home from "../pages/Home";
import LoginPage from "../pages/SignIn";
import SignupPage from "../pages/SignUp";

function AppRoutes() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<PrivateRoutes/>}>
           <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
